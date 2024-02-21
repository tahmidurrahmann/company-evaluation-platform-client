import { IoFilterSharp } from "react-icons/io5";
import { useCallback, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import { SiPoly } from "react-icons/si";
import Swal from "sweetalert2";
import { RiLoaderFill } from "react-icons/ri";
import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

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

  return (
    <div className="mt-5 space-y-10">
      <div className="flex items-center justify-center">
        <div className="mt-5 space-y-10">
          <div className="flex items-center justify-center">
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 px-2 text-xl font-semibold border"
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

          <div>
            <div className="ml-24 mr-2 overflow-x-auto">
              <table className="table">
                <thead className="font-bold text-black bg-gray-300">
                  <tr>
                    <th>Name</th>
                    <th>Task Name</th>
                    <th>Deadline</th>
                    <th>Effort</th>
                    <th>Up Vote</th>
                    <th>Down Vote</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((element, index) => (
                    <tr
                      className="h-24 text-white border-b-2 border-gray-300"
                      key={index}
                    >
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img src={element.employImage} alt="Employee" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{element?.name}</div>
                            <div className="text-sm opacity-50">
                              {element?.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{element.addItem}</td>
                      <td className="font-bold text-white">
                        {element.timeAndLocal}
                      </td>
                      <td>{element.effort}</td>
                      <td>
                        <h1
                          className={`${
                            element.effort === "medium"
                              ? "text-white font-bold"
                              : "text-white font-bold"
                          }`}
                        >
                          {element.status === "completed" ? (
                            <>
                              {element.liked ? (
                                <button disabled>
                                  <AiFillLike className="text-3xl" />
                                </button>
                              ) : (
                                <button onClick={() => handleLike(element._id)}>
                                  <BiLike className="text-3xl" />
                                </button>
                              )}
                            </>
                          ) : (
                            <p className="flex flex-col items-center gap-1">
                              <button className="font-semibold text-white">
                                {element?.status === "todo" && (
                                  <SiPoly
                                    className="text-3xl text-blue-400"
                                    size={22}
                                  ></SiPoly>
                                )}
                                {element?.status === "doing" && (
                                  <RiLoaderFill className="text-3xl text-orange-500 6s animate-spin" />
                                )}
                              </button>
                            </p>
                          )}
                        </h1>
                      </td>
                      <td>
                        {element.status === "completed" ? (
                          <>
                            {element.disLiked ? (
                              <button>
                                <BiDislike className="text-3xl" />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleDisLike(element._id)}
                              >
                                <BiDislike className="text-3xl" />
                              </button>
                            )}
                          </>
                        ) : (
                          <p className="flex flex-col items-center gap-1">
                            <button className="font-semibold text-white">
                              {element?.status === "todo" && (
                                <SiPoly
                                  className="text-3xl text-blue-400"
                                  size={22}
                                ></SiPoly>
                              )}
                              {element?.status === "doing" && (
                                <RiLoaderFill className="text-3xl text-orange-500 6s animate-spin" />
                              )}
                            </button>
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeTaskes;
