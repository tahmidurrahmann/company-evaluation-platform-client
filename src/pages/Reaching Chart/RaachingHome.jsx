import { useEffect, useState } from "react";
import ReachingChart from "./ReachingChart";

const RaachingHome = ({ filterHr, completedTaskpers }) => {
    const [data, setCompanyTask] = useState([])
    const colors = ["#9656a1", "#3b8ea5", "#f6ae2d", "#4fb286", "#ff6f61", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#5e1741"];


    useEffect(() => {
        const data = filterHr.map((hrElement, index) => {
            const taskFilter = completedTaskpers?.filter(taskElement => taskElement?.company === hrElement?.company);
            const color = colors[index % colors?.length];
            return {
                name: hrElement?.company,
                value: taskFilter?.length,
                color: color
            };
        });
        setCompanyTask(data);
    }, [filterHr, completedTaskpers, colors]);

    console.log(data);
    return (
        <div>
            <ReachingChart data={data}></ReachingChart>
        </div>
    );
};

export default RaachingHome;