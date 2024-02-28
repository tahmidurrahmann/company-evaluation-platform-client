import React, { useState, useCallback, useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import OnlineOfline from "./OnlineOfline";
import { IoFilterSharp } from "react-icons/io5";
import { RiLoaderFill } from "react-icons/ri";
import { BiLike, BiDislike, BiSolidDislike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { SiPoly } from "react-icons/si";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";

interface Task {
  _id: string;
  company: string;
  name: string;
  email: string;
  addItem: string;
  employImage: string;
  timeAndLocal: string;
  effort: string;
  status: string;
  liked: boolean;
  disLiked: boolean;
}

const EmployeTaskes: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const axiosPublic = useAxiosPublic();
  const [hrRequestCheck] = useHrRequestCheckedOrNot();

  const fetchTasks = useCallback(async () => {
    try {
      const res = await axiosPublic.get("/imployeeTasks");
      const taskFilter = res?.data?.filter(
        (element: Task) => element?.company === hrRequestCheck?.company
      );
      setTasks(taskFilter);
      setFilteredTasks(taskFilter);
    } catch (error) {
      console.log(error);
    }
  }, [axiosPublic, hrRequestCheck]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleLike = async (taskId: string) => {
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
          await fetchTasks();
          console.log("like");

          Swal.fire({
            title: "Liked!",
            text: "You liked this task.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error liking task:", error);
        }
      }
    });
  };

  const handleDisLike = async (taskId: string) => {
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
            text: "You Dis-Liked This Task.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error disliking task:", error);
        }
      }
    });
  };

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
            className="dropdown-content z-[1] bg-black menu p-2 shadow border-2 border-blue-300 rounded-box w-52"
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
        <div className="w-full overflow-x-auto">
          <table className="table">
            <thead className="font-bold text-black bg-gray-300">
              <tr className="text-xs">
                <th>Name</th>
                <th>Task Name</th>
                <th>Active</th>
                <th>Deadline</th>
                <th>Effort</th>
                <th>Like</th>
                <th>Dislike</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((element, index) => (
                <tr
                  className="h-24 text-xs text-white border-b-2 border-gray-300"
                  key={index}
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            referrerPolicy="no-referrer"
                            src={element.employImage}
                            alt={element.name}
                          />
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
                  <td> {element.addItem}</td>
                  <td>
                    <OnlineOfline />
                  </td>
                  <td className="font-bold text-blue-500">
                    {element.timeAndLocal}
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
                      {element.effort}
                    </h1>
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
                          {element.disLiked ? (
                            <button>
                              <BiSolidDislike className="text-3xl" />
                            </button>
                          ) : (
                            <button onClick={() => handleDisLike(element._id)}>
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
