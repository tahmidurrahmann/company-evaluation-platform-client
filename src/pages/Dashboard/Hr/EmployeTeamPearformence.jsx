import { useState } from "react";
import { FaBuromobelexperte } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";
import useEmployeeTask from "../../../hooks/useEmployeeTask";


const EmployeTeamPearformence = () => {
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employeeAgreements, isEmployee] = useEmployee()
    const [employeeIndex, handleEmployeeIndex] = useState(0)
    const employeeFilter = employeeAgreements.filter(element => element?.company === hrRequestCheck?.company)
    const [allEmployeeTask] = useEmployeeTask()
    console.log(allEmployeeTask);
    const taskFilter = allEmployeeTask?.filter(element => element?.company === hrRequestCheck?.company)
    const myName = taskFilter?.filter(taskElement => taskElement?.name === employeeFilter[employeeIndex]?.name)
    const todoFilter = myName?.filter(element => element?.status === 'todo')
    const doingFilter = myName?.filter(element => element?.status === 'doing')
    const completedFilter = myName?.filter(element => element?.status === 'completed')


    if (isHr || isEmployee) {
        return <Loading />
    }

    // const taskShows = employeeFilter.map(element => ({
    //     name: element.name,
    //     TodoTask: todoFilter.length,
    //     DoingTask: doingFilter.length,
    //     CompleatedTask: completedFilter.length
    // }));
    // setTaskShow(taskShows)
    const taskShow = [
        {
            name: 'element.name',
            TodoTask: todoFilter?.length,
            DoingTask: doingFilter?.length,
            CompleatedTask: completedFilter?.length
        }
    ];

    console.log(taskShow);

    return (
        <div className="space-y-6">
            <nav className="shadow-sm ml-20">
                <div className="navbar backdrop-blur-3xl hover:bg-black border-2 border-blue-500  rounded-xl mt-5">
                    <div className="flex-1 ">
                        <FaBuromobelexperte className="text-2xl text-white font-bold" />
                        <a className="btn btn-ghost text-xl">Team Performance</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={hrRequestCheck?.imageURL} />

                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 text-black font-bold uppercase shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    {
                                        employeeFilter?.map((element, index) => <li onClick={() => handleEmployeeIndex(index)} key={index}><a>{element?.name}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className=" p-4">
                <div className="flex justify-between mx-10 gap-5">
                    <div className="flex justify-center items-center text-center w-1/2 py-6 rounded-lg ml-20 space-x-3 bg-black border-2 border-blue-400 shadow-lg shadow-blue-400">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-400" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold ">{todoFilter?.length}</h1>
                            <p className="text-sm text-white font-semibold">TodoTasks</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center w-1/2 py-6 space-x-3 rounded-lg shadow-lg bg-black border-2 border-blue-400 shadow-blue-400">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-400" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold ">{completedFilter?.length}</h1>
                            <p className="text-sm text-white font-semibold">Compleated Task</p>
                        </div>

                    </div >
                </div >
            </div >

            <div className=" border p-4 space-y-6 w-full">
                <h1 className="font-sans text-2xl font-bold">Performance Survey</h1>

                <BarChart
                    width={window.innerWidth / 1.5}
                    height={400}
                    data={taskShow}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="TodoTask" fill="#C92502" />
                    <Bar dataKey="DoingTask" fill="#24E905" />
                    <Bar dataKey="CompleatedTask" fill="#3A02FE" />
                </BarChart>
            </div>
        </div >
    );
};

export default EmployeTeamPearformence;