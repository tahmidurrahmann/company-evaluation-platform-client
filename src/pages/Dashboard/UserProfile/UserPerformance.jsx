import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";
import useEmployeeTask from "../../../hooks/useEmployeeTask";
import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../../Provider/AuthProvider';

const UserPerformance = () => {

    const [date, setDate] = useState(7)
    const { user } = useContext(AuthContext)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if (data.daySelect === 'oneMonth') {
            setDate(30)
        }
        else if (data.daySelect === 'oneWeek') {
            setDate(7)
        }
        else if (data.daySelect === 'oneYear') {
            setDate(365)
        }
    }

    const [startMonths, setStartMonth] = useState(0)
    const [data, setData] = useState([])
    const [employeeRequestCheck] = useEmployeeProfile()
    const [allEmployeeTask] = useEmployeeTask()
    const [taskEndMonth, setTaskEndMonth] = useState(0)

    useEffect(() => {
        const myTaskCompany = allEmployeeTask?.filter(element => element.company === employeeRequestCheck.company)
        const myTask = myTaskCompany?.filter(element => element.email === user.email)
        if (myTask) {
            myTask?.map(taseElement => {
                const startTime = taseElement.startTime?.split(' ')
                const taskEndTime = taseElement.taskEndTime?.split(" ")
                const startYear = parseFloat(startTime[2])
                const taskEndTimeYear = parseFloat(taskEndTime && taskEndTime?.length > 0 ? taskEndTime[2] : null);
                const taskEndTimeMonth = parseFloat(taskEndTime && taskEndTime?.length > 0 ? taskEndTime[0] : null);
                const startMonth = startTime[0]

                // this data is Start Month booking
                const monthMap = {
                    January: 1,
                    February: 2,
                    March: 3,
                    April: 4,
                    May: 5,
                    June: 6,
                    July: 7,
                    August: 8,
                    September: 9,
                    October: 10,
                    November: 11,
                    December: 12
                };

                if (startMonth in monthMap) {
                    setStartMonth(monthMap[startMonth]);
                }
                if (taskEndTimeMonth in monthMap) {
                    setTaskEndMonth(monthMap[taskEndTimeMonth]);
                }

                const startDay = parseFloat(startTime[1])
                const taskEndTimeDay = parseFloat(taskEndTime && taskEndTime?.length > 0 ? taskEndTime[1] : null);

                // TODO :

                // 1. task koy din a sas korca Todo
                // Compleated : 2. kirakom effort dica
                // 3. effort ar performance kamon HufCompleated

                const endTime = taseElement?.timeAndLocal?.split('T')
                const endSpacikTime = endTime[0]?.split('-')
                const endYear = parseFloat(endSpacikTime[0])
                const endMonth = parseFloat(endSpacikTime[1])
                const endDay = parseFloat(endSpacikTime[2])
                const deffreanceYear = endYear - startYear
                const deffreanceMonth = endMonth - startMonths
                const deffreanceDay = endDay - startDay
                const taskEndDateTimeYear = taskEndTimeYear - startYear
                const taskEndDateTimeMonth = taskEndMonth - startMonths
                const taskEndDateTimeDay = taskEndTimeDay - startDay
                const taskDueDate = deffreanceYear * 365 + deffreanceMonth * 30 + deffreanceDay
                const taskEndDateTime = taskEndDateTimeYear * 365 + taskEndDateTimeMonth * 30 + taskEndDateTimeDay
                const deffrance = taskDueDate - taskEndDateTime
                // console.log(deffrance);

                const data = myTask ? myTask?.map((taskElement) => ({
                    "name": taskElement?.startTime,
                    // "uv": taskDueDate,
                    "Days": date,
                    "Effort": taskElement.effort === 'High' ? date : taskElement?.effort === 'Medium' ? date / 2 : taskElement?.effort === 'Low' ? 0 : '',
                    // "cv": index + 1,
                    "performance": taseElement?._id === taskElement?._id ? taskDueDate * deffrance / 100 : '',
                    "amt": 2400
                })) : [];
                setData(data)

            })
        }
        else {
            setData([])
        }
    }, [startMonths, date, allEmployeeTask, employeeRequestCheck, taskEndMonth, user?.email])

    return (
        <div>
            <div className='text-black'>
                <form onChange={handleSubmit(onSubmit)}>
                    <select className="select select-info w-full max-w-xs" name='daySelect' {...register("daySelect")}>
                        <option disabled selected>Select Days</option>
                        <option value='oneWeek' >One Week</option>
                        <option value='oneMonth'>One Month</option>
                        <option value='oneYear'>One Year</option>
                    </select>
                </form>
            </div>
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
                        <stop offset="5%" stopColor="#FF33E0" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#FF33E0" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Days" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Effort" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="performance" stroke="#FF33E0" fillOpacity={1} fill="url(#colorcv)" unit="%" />
            </AreaChart>
        </div>
    );
};

export default UserPerformance;