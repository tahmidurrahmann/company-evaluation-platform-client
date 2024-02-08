
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import RaachingHome from "./RaachingHome";

const RachingBarMap = () => {
    const [completedTaskpers, setCompletedTaskpers] = useState(0)
    const axiosPublic = useAxiosPublic();
    const [filterHr, setFilterHr] = useState([])
    console.log(completedTaskpers);
    useEffect(() => {
        axiosPublic
            .get("/imployeeTasks")
            .then((res) => {
                const completedFilter = res?.data?.filter(element => element.status === 'completed')
                // const persent = (completedFilter.length / taskFilter.length) * 100

                // console.log(taskFilter);
                setCompletedTaskpers(completedFilter)
            })
            .catch((error) => {
                console.log(error);
            });

        axiosPublic.get("/hrAndUsers")
            .then(res => {
                // console.log(res.data)
                setFilterHr(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosPublic, setFilterHr])
    filterHr.map(element=> {
    const taskFilter = completedTaskpers.filter(elementTask => elementTask.company === element.company)
    console.log(taskFilter);
    })

    return (
        <div>
            <RaachingHome
                filterHr={filterHr}
                completedTaskpers={completedTaskpers}
                
            ></RaachingHome>
        </div>
    );
};

export default RachingBarMap;