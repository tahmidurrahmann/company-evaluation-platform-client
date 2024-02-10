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

const EmployeTeamPearformence = () => {
    const [todoTasks, setTodoTasks] = useState([]);
    // const [taskShow, setTaskShow] = useState([]);
    const [task, setTask] = useState([]);
    const [doingTasks, setDoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [employeeAgreements] = useEmployee()
    const [employeeIndex, setEmployeeIndex] = useState(0)
    const employeeFilter = employeeAgreements.filter(element => element.company === hrRequestCheck.company)
    useEffect(() => {
        axiosPublic
            .get("/imployeeTasks")
            .then((res) => {
                const taskFilter = res?.data?.filter(element => element.company === hrRequestCheck.company)
                console.log('jjj', taskFilter);
                setTask(taskFilter)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [axiosPublic, hrRequestCheck,])
    useEffect(() => {

        const myName = task.filter(taskElement => taskElement.name === employeeFilter[employeeIndex].name)
        const todoFilter = myName.filter(element => element.status === 'todo')
        const doingFilter = myName.filter(element => element.status === 'doing')
        const completedFilter = myName.filter(element => element.status === 'completed')
        setTodoTasks(todoFilter);
        setDoingTasks(doingFilter);
        setCompletedTasks(completedFilter);


    }, [completedTasks.length, todoTasks.length, doingTasks.length, task, employeeFilter, employeeIndex]);

    // const taskShow = employeeFilter.map(element => ({
    //     name: element.name,
    //     TodoTask: `${todoTasks.length}`,
    //     DoingTask: `${doingTasks.length}`,
    //     CompleatedTask: `${completedTasks.length}`
    // }));
    const taskShow = [
        {
            name: 'Name',
            TodoTask: `${todoTasks.length}`,
            DoingTask: `${doingTasks.length}`,
            CompleatedTask: `${completedTasks.length}`
        }
    ];

  
 
    return (
        <div className="space-y-6">
            <div className=" p-4">
                <div className="flex justify-between mx-10 gap-5">
                    <div className="flex justify-center items-center text-center w-1/2 py-6 rounded-lg  space-x-3 bg-black shadow-xl shadow-blue-500">
                        <div>
                            <MdTaskAlt className="text-6xl text-white" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold text-white">20</h1>
                            <p className="text-sm  font-semibold text-white">Tasks</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center w-1/2 py-6 space-x-3 rounded-lg shadow-xl bg-black shadow-blue-400">
                        <div>
                            <MdTaskAlt className="text-6xl text-white" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold text-white">20</h1>
                            <p className="text-sm font-semibold text-white">Tasks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-4 space-y-6 w-full">
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