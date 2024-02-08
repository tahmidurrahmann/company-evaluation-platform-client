import { useEffect, useState } from "react";
import ReachingChart from "./ReachingChart";

const RaachingHome = ({ filterHr, completedTaskpers }) => {
    const [data, setCompanyTask] = useState([])
    useEffect(() => {
        const data = filterHr.map(hrElement => {
            const taskFilter = completedTaskpers.filter(taskElement => taskElement.company === hrElement.company);
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            return {
                name: hrElement.company,
                value: taskFilter.length,
                color: randomColor
            };
        });
        setCompanyTask(data);
    }, [filterHr, completedTaskpers]);

    console.log(data);

    return (
        <div>
            <ReachingChart data={data}></ReachingChart>
        </div>
    );
};

export default RaachingHome;