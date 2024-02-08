import ReachingChart from "./ReachingChart";



const RaachingHome = ({ filterHr, completedTaskpers , element}) => {
    // console.log(completedTaskpers);
    // const taskFilter = completedTaskpers.filter(elementTask => elementTask.company === element.company)
    console.log(element)
    const data =
        filterHr.map(element => (
            {
                name: element.company,
                value: completedTaskpers.length,
                color: "#cccccc"
            }
        ))

    return (
        <div>
            <ReachingChart data={data}></ReachingChart>
        </div>
    );
};

export default RaachingHome;