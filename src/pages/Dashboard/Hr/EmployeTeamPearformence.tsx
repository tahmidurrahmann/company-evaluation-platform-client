import React from 'react';
import { FaBuromobelexperte } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Loading from "../../../shared/Loading/Loading";
import useEmployeeTask from "../../../hooks/useEmployeeTask";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import { useState } from "react";

const EmployeTeamPearformence = () => {
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employeeAgreements, isEmployee] = useEmployee()
    const [employeeIndex, handleEmployeeIndex] = useState<number>(0)
    const employeeFilter = employeeAgreements.filter((element: any) => element?.company === hrRequestCheck?.company)
    const [allEmployeeTask] = useEmployeeTask();
    const taskFilter = allEmployeeTask?.filter((element: any) => element?.company === hrRequestCheck?.company)
    const myName = taskFilter?.filter((taskElement: any) => taskElement?.name === employeeFilter[employeeIndex]?.name)
    const todoFilter = myName?.filter((element: any) => element?.status === 'todo')
    const doingFilter = myName?.filter((element: any) => element?.status === 'doing')
    const completedFilter = myName?.filter((element: any) => element?.status === 'completed')

    if (isHr || isEmployee) {
        return <Loading />
    }

    const taskShow = [
        {
            name: 'All Tasks',
            TodoTask: todoFilter?.length,
            DoingTask: doingFilter?.length,
            CompletedTask: completedFilter?.length
        }
    ];

    return (
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <nav className="shadow-sm mx-4 xl:mx-0">
                <div className="navbar backdrop-blur-3xl hover:bg-black border-2 border-blue-500  rounded-xl mt-5">
                    <div className="flex-1 ">
                        <FaBuromobelexperte className="text-2xl text-white font-bold" />
                        <a className="btn btn-ghost text-xl">Team Performance</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="border-2 rounded-full">
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
            <div className="px-4 xl:px-0">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex justify-center items-center text-center w-1/2 py-6 rounded-lg space-x-3 bg-black border-2 border-blue-400 shadow-lg shadow-blue-400">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{todoFilter?.length}</h1>
                            <p className="text-sm text-white font-semibold">Todo Tasks</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center w-1/2 py-6 space-x-3 rounded-lg shadow-lg bg-black border-2 border-blue-400 shadow-blue-400">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{completedFilter?.length}</h1>
                            <p className="text-sm text-white font-semibold">Completed Tasks</p>
                        </div>
                    </div >
                </div>
            </div>
            <div className="mx-4 xl:mx-0 border rounded-lg">
                <h1 className="font-sans text-center text-xl md:text-2xl font-bold py-4">Performance Survey</h1>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={taskShow}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TodoTask" fill="#C92502" />
                        <Bar dataKey="DoingTask" fill="#007cc7" />
                        <Bar dataKey="CompletedTask" fill="#FF8042" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default EmployeTeamPearformence;