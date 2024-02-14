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
          (element) => element.company === hrRequestCheck.company
        );
        setTasks(taskFilter);
        setFilteredTasks(taskFilter);
        console.log('task data is ',res.data); // Initialize filteredTasks with all tasks
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosPublic, hrRequestCheck]);

  const handleCompletedStatus = () => {
    setFilteredTasks(tasks.filter((task) => task.status === "completed"));
  };
  const handleAllTask = () => {
    setFilteredTasks(tasks);
  };

  const handleDoingStatus = () => {
    setFilteredTasks(tasks.filter((task) => task.status === "doing"));
  };


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
            <li onClick={handleCompletedStatus} className="hover:bg-gray-500 rounded-xl">
              <a>Completed</a>
            </li>
            <li onClick={handleDoingStatus} className="hover:bg-gray-500 rounded-xl">
              <a>Doing</a>
            </li>
            <li onClick={handleAllTask} className="hover:bg-gray-500 rounded-xl">
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
                <th>Tags</th>
                <th>Channel</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((element, index) => (
                <tr className="h-24 border-b-2 text-white border-gray-300" key={index}>

                  <td className="flex justify-center mt-5  items-center gap-4">
                    <div className="avatar -ml-10">
                      <div className="w-8 rounded-full  border-2">
                        <img
                          src={element.employImage}
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    {element.name}
                  </td>
                  <td>{element.additem}</td>
                  <td className="text-blue-500 font-bold">{element.timeAndLocal}</td>
                  <td>
                    <h1
                      className={`${element.audience === "primium"
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
                      className={`${element.tags === "lowProirity"
                        ? "border-2 border-black rounded-full -ml-5 text-center text-white hover:text-white "
                        : element.tags === "highPriority"
                          ? "border-2 border-blue-300 -ml-5 rounded-full text-center text-white hover:text-white "
                          : "border-2 border-blue-300 -ml-5 rounded-full text-center bg-gray-200 hover:text-white "
                        }`}
                    >
                      {element.tags}
                    </h1>
                  </td>
                  <td>
                    <h1
                      className={`${element.channel === "social"
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
                    <h1
                      className={`${element.effort === "medium"
                        ? "text-white font-bold"
                        : element.tags === "low"
                          ? "btext-white font-bold"
                          : element.effort === "high"
                            ? "text-white font-bold"
                            : "text-white font-bold"
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