import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
} from 'recharts';
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";
import useEmployeeTask from "../../../hooks/useEmployeeTask";


const UserPerformance = () => {

    const [employeeRequestCheck] = useEmployeeProfile()
    console.log(employeeRequestCheck);
    const [allEmployeeTask] = useEmployeeTask()
    console.log(allEmployeeTask);
    const myTask = allEmployeeTask?.filter(element => element.company === employeeRequestCheck.company)
    console.log(myTask);

    const data = myTask ? myTask.map((taskElement, index) => ({
        "name": taskElement.startTime,
        "uv": 4,
        "pv": index,
        "cv": 2,
        "amt": 2400
    })) : [];


    return (
        <div>
            <AreaChart width={1040} height={600} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorcv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#383838" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#383838" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="cv" stroke="#383838" fillOpacity={1} fill="url(#colorcv)" />
            </AreaChart>
        </div>
    );
};

export default UserPerformance;