import { useEffect, useState } from "react";
import ReachingChart from "./ReachingChart";
// import useInterval from "./useInterval";

// const getRandomIndex = array => {
//     return Math.floor(array.length * Math.random());
// };

const RaachingHome = ({ filterHr, completedTaskpers }) => {

    // const [iteration, setIteration] = useState(0);
    // const [start, setStart] = useState(false);
    const [data, setCompanyTask] = useState([])
    useEffect(() => {
        const data = filterHr.map(hrElement => {
            const taskFilter = completedTaskpers.filter(taskElement => taskElement.company === hrElement.company);
            console.log(taskFilter);
            return {
                name: hrElement.company,
                value: taskFilter.length,
                color: "#f4efd3"
            };
        });
        setCompanyTask(data);
    }, [filterHr, completedTaskpers]);

    console.log(data);
    // useInterval(() => {
    //     if (start) {
    //         const randomIndex = getRandomIndex(data);
    //         setCompanyTask(
    //             data.map((entry, index) =>
    //                 index === randomIndex
    //                     ? {
    //                         ...entry,
    //                         value: entry.value + 10
    //                     }
    //                     : entry
    //             )
    //         );
    //         setIteration(iteration + 1);
    //     }
    // }, 500);

    return (
        <div>
            <ReachingChart data={data}></ReachingChart>
            {/* <button onClick={() => setStart(!start)}>
                {start ? "Stop the race" : "Start the race!"}
            </button> */}
        </div>
    );
};

export default RaachingHome;