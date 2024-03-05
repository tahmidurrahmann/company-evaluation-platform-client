import { useEffect, useState } from "react";
import ReachingChart from "./ReachingChart";

const RaachingHome = ({ filterHr, completedTaskpers }) => {
    const [data, setCompanyTask] = useState([])
    useEffect(() => {
        if (filterHr?.length > 0 && completedTaskpers?.length > 0) {
            const colors = ["#9656a1", "#3b8ea5", "#f6ae2d", "#4fb286", "#ff6f61", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#5e1741"];
            const data = filterHr?.map((hrElement, index) => {
                // console.log(hrElement.imageURL);
                const taskFilter = completedTaskpers?.filter(taskElement => taskElement?.company === hrElement?.company);
                const color = colors[index % colors?.length];
                return {
                    name: hrElement?.company,
                    value: taskFilter?.length,
                    image: hrElement.imageURL,
                    color: color
                };
            });
            setCompanyTask(data);
        }
    }, [filterHr, completedTaskpers]);
    console.log(data);
    return (
        <div className="mt-16">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Our Top Company Evaluation</h1>
            <div className="" data-aos-duration="1000" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <ReachingChart data={data} ></ReachingChart>
            </div>
        </div>
    );
};

export default RaachingHome;