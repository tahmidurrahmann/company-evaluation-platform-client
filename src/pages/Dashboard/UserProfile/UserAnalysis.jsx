import { useEffect, useState } from "react";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import Loading from "../../../shared/Loading/Loading";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";

const UserAnalysis = () => {
    const [specificEmployee, isDrag] = useDragAndDrop();
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        if (specificEmployee?.length > 0) {
            const todoTask = specificEmployee?.filter(employee => employee?.status === "todo");
            setTodo(todoTask);
            const doingTask = specificEmployee?.filter(employee => employee?.status === "doing");
            setDoing(doingTask);
            const completedTask = specificEmployee?.filter(employee => employee?.status === "completed");
            setCompleted(completedTask);
        }
    }, [specificEmployee]);

    if (isDrag) {
        return <Loading />;
    }

    const data = [
        { name: 'To do', percentage: parseFloat(todo.length / specificEmployee.length * 100).toFixed(2) },
        { name: 'Doing', percentage: parseFloat(doing.length / specificEmployee.length * 100).toFixed(2) },
        { name: 'Completed', percentage: parseFloat(completed.length / specificEmployee.length * 100).toFixed(2) },
    ];



    return (
        <div>
            <div className="py-16">
                <SharedHeadingDashboard heading="Employee Current Task Analysis" />
                <div className="font-bold">
                    <ResponsiveContainer width="100%" height={500}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid stroke="#FFFFFF" strokeWidth={1} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend />
                            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']}
                                labelStyle={{ color: '#FF0000', fontWeight: 'bold' }}
                            />
                            <Line type="monotone" dataKey="percentage" stroke="#FF0000" name="To Do" strokeWidth={2} />
                            <Line type="monotone" dataKey="percentage" stroke="#82ca9d" name="Doing" strokeWidth={2} />
                            <Line type="monotone" dataKey="percentage" stroke="#8884d8" name="Completed" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default UserAnalysis;
