import { IoFilterSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";

const EmployeTaskes = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [hrRequestCheck] = useHrRequestCheckedOrNot();

  useEffect(() => {
    axiosPublic
      .get("/imployeeTasks")
      .then((res) => {
        const taskFilter = res?.data?.filter(
          (element) => element?.company === hrRequestCheck?.company
        );
        setTasks(taskFilter);
        setFilteredTasks(taskFilter); // Initialize filteredTasks with all tasks
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosPublic, hrRequestCheck]);

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
    <div className="space-y-10">
      <div className="flex justify-center items-center">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 border px-2 font-semibold text-xl"
            >
              Filter <IoFilterSharp />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={handleCompletedStatus}>
                <a>Completed</a>
              </li>
              <li onClick={handleDoingStatus}>
                <a>Doing</a>
              </li>
              <li onClick={handleAllTask}>
                <a>All</a>
              </li>
            </ul>
          </div>
      </div>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table ">
            <thead className="bg-gray-300 text-black font-bold">
              <tr>
                <th>Assignment</th>
                <th>Task Name</th>
                <th>Due date</th>
                <th>Audience</th>
                <th>Tags</th>
                <th>Channel</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((element, index) => (
                <tr className="h-24 border-b-2 border-gray-300" key={index}>
                  <td className="flex justify-center mt-5  items-center gap-4">
                    <div className="avatar">
                      <div className="w-8 rounded-full  border-2">
                        <img src={element.employImage} alt="User Avatar" />
                      </div>
                    </div>
                    {element.name}
                  </td>
                  <td>{element.additem}</td>
                  <td>{element.timeAndLocal}</td>
                  <td>
                    <h1
                      className={`${
                        element.audience === "primium"
                          ? "text-blue-500 font-bold"
                          : element.audience === "busness"
                          ? "text-gray-500 font-bold"
                          : "font-bold text-orange-500"
                      }`}
                    >
                      {element.audience}
                    </h1>
                  </td>
                  <td>
                    <h1
                      className={`${
                        element.tags === "lowProirity"
                          ? "border-2 border-black rounded-full text-center hover:bg-blue-400 hover:text-white px-1 text-black"
                          : element.tags === "highPriority"
                          ? "border-2 border-black rounded-full text-center hover:bg-orange-300 hover:text-white px-1 text-black"
                          : "border-2 border-black rounded-full text-center hover:bg-gray-200 hover:text-white px-1 text-black"
                      }`}
                    >
                      {element.tags}
                    </h1>
                  </td>
                  <td>
                    <h1
                      className={`${
                        element.channel === "social"
                          ? "font-bold"
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
                  <td>
                    <h1
                      className={`${
                        element.effort === "medium"
                          ? "badge badge-secondary badge-outline"
                          : element.tags === "low"
                          ? "badge badge-primary badge-outline"
                          : element.effort === "high"
                          ? "badge badge-accent badge-outline"
                          : "badge badge-neutral"
                      }`}
                    >
                      {element.effort}
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