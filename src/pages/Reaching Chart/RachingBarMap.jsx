import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import RaachingHome from "./RaachingHome";

const RachingBarMap = () => {
  const axiosPublic = useAxiosPublic();
  const [completedTaskpers, setCompletedTaskpers] = useState(0);
  const [filterHr, setFilterHr] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/imployeeTasks")
      .then((res) => {
        const completedFilter = res?.data?.filter(
          (element) => element.status === "completed"
        );
        setCompletedTaskpers(completedFilter);
      })
      .catch((error) => {
        console.log(error);
      });
    axiosPublic
      .get("/hrAndUsers")
      .then((res) => {
        setFilterHr(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosPublic]);

  if (
    filterHr?.length > 0 &&
    completedTaskpers?.length > 0 &&
    Array.isArray(completedTaskpers)
  ) {
    filterHr.map((element) => {
      const taskFilter = completedTaskpers?.filter(
        (elementTask) => elementTask?.company === element?.company
      );
    });
  }


    return (
        <div className="px-6 xl:px-0 max-w-screen-2xl mx-auto">
            <RaachingHome
                filterHr={filterHr}
                completedTaskpers={completedTaskpers}
            ></RaachingHome>
        </div>
    );

};

export default RachingBarMap;
