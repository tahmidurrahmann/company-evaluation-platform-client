
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import RaachingHome from "./RaachingHome";

const RachingBarMap = () => {
    const axiosPublic = useAxiosPublic();
    const [completedTaskpers, setCompletedTaskpers] = useState(0)
    const [filterHr, setFilterHr] = useState([])
   
    console.log(completedTaskpers);
    useEffect(() => {
        axiosPublic
            .get("/imployeeTasks")
            .then((res) => {
                const completedFilter = res?.data?.filter(element => element.status === 'completed')
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
        
    }, [axiosPublic, setFilterHr,])

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