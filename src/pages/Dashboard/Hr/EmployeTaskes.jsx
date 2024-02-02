import { IoMdAdd } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import  './Emply.css'
const EmployeTaskes = () => {
    const [tasks, setTasks] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic
        .get("/imployeeTasks")
        .then((res) => {
            console.log(res.data);
            setTasks(res.data);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div className="space-y-10">
            <div className="flex justify-between">
                <button className="flex items-center gap-2 border px-2 font-semibold text-xl">
                    <IoMdAdd className="" />
                    Add Task
                </button>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 border px-2 font-semibold text-xl">
                        Incomplete-Tasks
                        <FaHandPointRight />
                    </button>
                    <button className="flex items-center gap-2 border px-2 font-semibold text-xl">
                        Filter
                        <IoFilterSharp />
                    </button>
                </div>
            </div>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        <thead className="bg-gray-300 text-black font-bold">
                            <tr>
                                    <th>Assignee</th>
                                <th>Task Name</th>
                            
                                <th>Due date</th>
                                <th>Audience</th>
                                <th>Tags</th>
                              
                                <th>Channel</th>
                                <th>Effort</th>
                                {/* Add more headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="font-bold">
                                <td className="py-3 text-xl flex">
                                    Requirement
                                    <span className="text-green-800 text-2xl font-bold typing-demo">
                                        {" "}
                                        ......
                                    </span>
                                </td>
                                {/* Add more td elements for this row */}
                                {/* <td>Content 1</td>
                <td>Content 2</td>
                <td>Content 3</td>
                <td>Content 4</td>
                <td>Content 5</td>
                <td>Content 6</td>
                <td>Content 7</td> */}
                                {/* Add more td elements as needed */}
                            </tr>
                            {tasks.map((element, index) => (
                                <tr className="h-24 border-b-2 border-gray-300" key={index}>
                                  
                                    <td className="flex justify-center mt-5  items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-8 rounded-full  border-2">
                                                <img
                                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                                    alt="User Avatar"
                                                />
                                            </div>
                                        </div>
                                        {element.name}
                                    </td>

                                    <td>{element.additem}</td>

                                    
                                    <td>{element.timeAndLocal}</td>
                                    <td>
                                        <h1
                                            className={`${element.audience === "primium"
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
                                            className={`${element.tags === "lowProirity"
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
                                    <td>
                                        <h1
                                            className={`${element.effort === "medium"
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