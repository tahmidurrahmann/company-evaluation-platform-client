import { IoMdAdd } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";

const EmployeTaskes = () => {
    const [tasks, setTasks] = useState([])
    const axiosPublic = useAxiosPublic()
    axiosPublic.get('/imployeeTasks')
        .then(res => {
            console.log(res.data)
            setTasks(res.data)
        })
        .catch(error => {
            console.log(error)
        })


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
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Assignee</th>
                                <th>Due date</th>
                                <th>Audience</th>
                                <th>Tags</th>
                                <th>Estimated hours</th>
                                <th>Channel</th>
                                <th>Effort</th>
                                {/* Add more headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="font-bold">
                                <td className="py-3 text-xl flex">
                                    Requirement
                                    <span className="text-green-800 text-2xl font-bold">
                                        {" "}
                                        ...
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
                            {
                                tasks.map((element, index) => <tr key={index}>
                                    <td>{element.additem}</td>
                                    <td className="flex justify-center items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img
                                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                                    alt="User Avatar"
                                                />
                                            </div>
                                        </div>
                                        {element.name}
                                    </td>
                                    <td>{element.timeAndLocal}</td>
                                    <td>
                                        <h1 className="badge badge-success">{element.audience}</h1>
                                    </td>
                                    <td>
                                        <h1 className="badge badge-secondary">{element.tags}</h1>
                                    </td>
                                    <td>2</td>
                                    <td>
                                        <h1 className="badge badge-primary">{element.channel}</h1>
                                    </td>
                                    <td>
                                        <h1 className="badge badge-secondary">{element.effort}</h1>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeTaskes;