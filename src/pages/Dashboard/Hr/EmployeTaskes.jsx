import { IoFilterSharp } from "react-icons/io5";
import { useCallback, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { SiTodoist } from "react-icons/si";
import Swal from "sweetalert2";

const EmployeTaskes = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [hrRequestCheck] = useHrRequestCheckedOrNot();

  const fetchTasks = useCallback(async () => {
    try {
      const res = await axiosPublic.get("/imployeeTasks");
      const taskFilter = res?.data?.filter(
        (element) => element?.company === hrRequestCheck?.company
      );
      setTasks(taskFilter);
      setFilteredTasks(taskFilter); // Initialize filteredTasks with all tasks
    } catch (error) {
      console.log(error);
    }
  }, [axiosPublic, hrRequestCheck]);

  const handleLike = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Like this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Like It!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.post(`/likeTask/${taskId}`);
          await fetchTasks(); // Refetch tasks after successfully liking the task
          console.log("like");

          Swal.fire({
            title: "Liked!",
            text: "Your Liked This Task.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error liking task:", error);
        }
      }
    });
  };

  const handleDisLike = async (taskId) => {
    console.log(taskId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Dis-Like this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Dis-Like It!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.post(`/disLikeTask/${taskId}`);

          await fetchTasks();
          Swal.fire({
            title: "Dis-Liked!",
            text: "Your Dis-Liked This Task.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error liking task:", error);
        }
      }
    });
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleCompletedStatus = () => {
    setFilteredTasks(tasks?.filter((task) => task?.status === "completed"));
  };

  const handleAllTask = () => {
    setFilteredTasks(tasks);
  };

  const handleDoingStatus = () => {
    setFilteredTasks(tasks?.filter((task) => task?.status === "doing"));
  };

  console.log(tasks);
  return (
    <div className="space-y-10 mt-5">
      <div className="flex justify-center  items-center">
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            role="button"
            className="flex items-center  gap-2 border px-2 font-semibold text-xl"
          >
            Filter <IoFilterSharp />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] bg-black menu p-2 shadow border-2 border-blue-300  rounded-box w-52"
          >
            <li
              onClick={handleCompletedStatus}
              className="hover:bg-gray-500 rounded-xl"
            >
              <a>Completed</a>
            </li>
            <li
              onClick={handleDoingStatus}
              className="hover:bg-gray-500 rounded-xl"
            >
              <a>Doing</a>
            </li>
            <li
              onClick={handleAllTask}
              className="hover:bg-gray-500 rounded-xl"
            >
              <a>All</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <div className="overflow-x-auto ml-24 mr-2">
          <table className="table ">
            <thead className="bg-gray-300 text-black font-bold">
              <tr>
                <th>Assignee</th>
                <th>Task Name</th>
                <th>Deadline</th>
                <th>Audience</th>
                {/* <th>Tags</th> */}
                <th>Channel</th>
                <th>Effort</th>
                <th>Vote</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((element, index) => (
                <tr
                  className="h-24 border-b-2 text-white border-gray-300"
                  key={index}
                >
                  <td className="flex justify-center mt-5  items-center gap-4">
                    <div className="avatar -ml-10">
                      <div className="w-8 rounded-full  border-2">
                        <img src={element.employImage} alt="User Avatar" />
                      </div>
                    </div>
                    {element.name}
                  </td>
                  <td> {element.addItem}</td>
                  <td className="text-blue-500 font-bold">
                    {element.timeAndLocal}
                  </td>
                  <td>
                    <h1
                      className={`${
                        element.audience === "primium"
                          ? "text-white font-bold"
                          : element.audience === "busness"
                          ? "text-white font-bold"
                          : "font-bold text-white"
                      }`}
                    >
                      {element.audience}
                    </h1>
                  </td>

                  <td>
                    <h1
                      className={`${
                        element.channel === "social"
                          ? "font-bold "
                          : element.channel === "blog"
                          ? "font-bold"
                          : element.channel === "press"
                          ? "font-bold"
                          : "font-bold"
                      }`}
                    >
                      {element.channel}*
                    </h1>
                  </td>
                  <td className="">
                    {element.status === "completed" ? (
                      <>
                        {element.disLiked ? (
                          <button className="bg-pink-950 py-2 px-6 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-blue-900 border-blue-400 hover:scale-105 transition">
                            <AiOutlineDislike className="text-3xl" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDisLike(element._id)}
                            className="bg-blue-400 py-2 px-6 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-blue-900 border-blue-400 hover:scale-105 transition"
                          >
                            <AiOutlineDislike className="text-3xl" />
                          </button>
                        )}
                      </>
                    ) : (
                      <p className="flex flex-col items-center gap-1">
                        <button className="bg-blue-400 py-2 px-6 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-blue-900 border-blue-400">
                          <SiTodoist className="text-3xl mb-2" />
                        </button>

                        <span className="badge badge-primary">
                          {element.status}
                        </span>
                      </p>
                    )}
                  </td>
                  <td className="">
                    <h1
                      className={`${
                        element.effort === "medium"
                          ? "text-white font-bold"
                          : element.tags === "low"
                          ? "text-white font-bold"
                          : element.effort === "high"
                          ? "text-white font-bold"
                          : "text-white font-bold"
                      }`}
                    >
                      {element.status === "completed" ? (
                        <>
                          {element.liked ? (
                            <button
                              disabled
                              className="bg-pink-950 py-2 px-6 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-blue-900 border-blue-400 hover:scale-105 transition"
                            >
                              <AiOutlineLike className="text-3xl" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleLike(element._id)}
                              className="bg-blue-400 py-2 px-6 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-blue-900 border-blue-400 hover:scale-105 transition"
                            >
                              <AiOutlineLike className="text-3xl" />
                            </button>
                          )}
                        </>
                      ) : (
                        <p className="flex flex-col items-center gap-1">
                          <button
                            onClick={() => handleLike(element._id)}
                            disabled
                            className="bg-blue-400 py-2 px-6 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-blue-900 border-blue-400"
                          >
                            <SiTodoist className="text-3xl mb-2" />
                          </button>

                          <span className="badge badge-primary">
                            {element.status}
                          </span>
                        </p>
                      )}
                    </h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeTaskes;