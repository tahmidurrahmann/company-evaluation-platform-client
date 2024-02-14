import { useEffect, useState } from "react";
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
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";

const EmployeTeamPearformence = () => {
    const [todoTasks, setTodoTasks] = useState([]);
    // const [taskShow, setTaskShow] = useState([]);
    const [task, setTask] = useState([]);
    const [taskShow, setTaskShow] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employeeAgreements, isEmployee] = useEmployee()
    const [employeeIndex, setEmployeeIndex] = useState(0)
    const employeeFilter = employeeAgreements.filter(element => element.company === hrRequestCheck.company)
    useEffect(() => {
        axiosPublic
            .get("/imployeeTasks")
            .then((res) => {
                const taskFilter = res?.data?.filter(element => element.company === hrRequestCheck.company)
                setTask(taskFilter)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [axiosPublic, hrRequestCheck])

    useEffect(() => {
        const myName = task?.filter(taskElement => taskElement?.name === employeeFilter[employeeIndex].name)
        const todoFilter = myName?.filter(element => element?.status === 'todo')
        const doingFilter = myName?.filter(element => element?.status === 'doing')
        const completedFilter = myName?.filter(element => element?.status === 'completed')
        setTodoTasks(todoFilter);
        setCompletedTasks(completedFilter);
        const taskShow = employeeFilter.map(element => ({
            name: element.name,
            TodoTask: `${todoFilter.length}`,
            DoingTask: `${doingFilter.length}`,
            CompleatedTask: `${completedFilter.length}`
        }));
        setTaskShow(taskShow)
    }, [completedTasks.length, todoTasks.length, task, employeeFilter, employeeIndex])

    if (isHr || isEmployee) {
        return <Loading />
    }

    // const taskShow = employeeFilter.map(element => ({
    //     name: element.name,
    //     TodoTask: ${todoTasks.length},
    //     DoingTask: ${doingTasks.length},
    //     CompleatedTask: ${completedTasks.length}
    // }));
    // const taskShow = [
    //     {
    //         name: 'Name',
    //         TodoTask: ` ${todoTasks.length}`,
    //         DoingTask: ` ${doingTasks.length}`,
    //         CompleatedTask: `${completedTasks.length}`
    //     }
    // ];

    console.log(employeeIndex)
    const handleEmployeeIndex = index => {
        setEmployeeIndex(index)
        console.log(index)
    }

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
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 text-black font-bold uppercase shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                {
                                    employeeFilter?.map((element, index) => <li onClick={() => handleEmployeeIndex(index)} key={index}><a>{element.name}</a></li>)
                                }
                            </ul>
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
                            <h1 className="text-4xl font-bold ">{todoTasks.length}</h1>
                            <p className="text-sm text-white font-semibold">TodoTasks</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center w-1/2 py-6 space-x-3 rounded-lg shadow-lg bg-black border-2 border-blue-400 shadow-blue-400">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-400" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold ">{completedTasks.length}</h1>
                            <p className="text-sm text-white font-semibold">Compleated Task</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black   text-white shadow-lg shadow-blue-300 ml-24   space-y-6 w-[1200px]">
                <h1 className="font-sans text-2xl font-bold">Performance Survey</h1>
                <BarChart
                    className="items-center text mx-auto"
                    width={window.innerWidth / 1.5}
                    height={400}
                    data={taskShow}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    barSize={30}
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