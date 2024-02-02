import { useEffect, useState } from "react";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import Loading from "../../../shared/Loading/Loading";
import SharedHeading from "../../../shared/SharedHeading/SharedHeading";

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
    }, [specificEmployee])

    if (isDrag) {
        return <Loading />
    }

    const todoPercentage = (todo?.length / specificEmployee?.length * 100).toFixed(2);
    const doingPercentage = (doing?.length / specificEmployee?.length * 100).toFixed(2)
    const completedPercentage = (completed?.length / specificEmployee?.length * 100).toFixed(2);

    return (
        <div>
            <div className="py-8">
                <SharedHeading heading="Employee Current Task Analysis" />
            </div>
            <p>Todo percentage {todoPercentage} %</p>
            <p>Doing Percentage {doingPercentage} %</p>
            <p>Completed {completedPercentage} %</p>
        </div>
    );
};

export default UserAnalysis;