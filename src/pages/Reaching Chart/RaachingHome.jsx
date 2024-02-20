import { useEffect, useState } from "react";
import ReachingChart from "./ReachingChart";

const RaachingHome = ({ filterHr, completedTaskpers }) => {
    const [data, setCompanyTask] = useState([])

    useEffect(() => {
        if (filterHr?.length > 0 && completedTaskpers?.length > 0) {
            const colors = ["#9656a1", "#3b8ea5", "#f6ae2d", "#4fb286", "#ff6f61", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#5e1741"];
            const data = filterHr?.map((hrElement, index) => {
                const taskFilter = completedTaskpers?.filter(taskElement => taskElement?.company === hrElement?.company);
                const color = colors[index % colors?.length];
                return {
                    name: hrElement?.company,
                    value: taskFilter?.length,
                    color: color
                };
            });
            setCompanyTask(data);
        }
    }, [filterHr, completedTaskpers]);

    return (
       <div className="mt-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Our Top Company Evaluation</h1>
            <div className="">
                <ReachingChart data={data} ></ReachingChart>
            </div>
       </div>
    );
};

export default RaachingHome;