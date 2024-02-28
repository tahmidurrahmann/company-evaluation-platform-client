
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useEmployeeTask from '../../../hooks/useEmployeeTask';
import { useEffect, useState } from 'react';

const Evelotionchart1 = () => {

    const axiosPublic = useAxiosPublic();
    const [allEmployeeTask] = useEmployeeTask()
    const [data01, setData01] = useState([])
    const [data02, setData02] = useState([])
    const [data03, setData03] = useState([])

    useEffect(() => {
        axiosPublic.get("/hrAndUsers")
            .then(res => {
                if (res?.data?.length > 0 && allEmployeeTask?.length > 0) {
                    const data01 = res?.data?.map((hrElement, index) => {
                        const taskFilter = allEmployeeTask?.filter(taskElement => taskElement.company === hrElement.company)
                        const todoWork = taskFilter.filter(element => element.status === 'todo')
                        return {
                            x: index,
                            y: todoWork?.length,
                        };
                    });
                    const data02 = res?.data?.map((hrElement, index) => {
                        const taskFilter = allEmployeeTask?.filter(taskElement => taskElement.company === hrElement.company)
                        const doingWork = taskFilter.filter(element => element.status === 'doing')
                        return {
                            x: index,
                            y: doingWork?.length,
                        };
                    });
                    const data03 = res?.data?.map((hrElement, index) => {
                        const taskFilter = allEmployeeTask?.filter(taskElement => taskElement.company === hrElement.company)
                        const compleatedWork = taskFilter.filter(element => element.status === 'completed')
                        return {
                            x: index,
                            y: compleatedWork?.length,
                        };
                    });

                    setData01(data01)
                    setData02(data02);
                    setData03(data03);

                }
            })
            .catch(error => {
                console.log(error);
            })

    }, [allEmployeeTask, axiosPublic])
    return (
        <div>
            <ResponsiveContainer width="100%" height={320}>
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="" />
                    <YAxis type="number" dataKey="y" name="weight" unit="" />
                    <ZAxis type="number" range={[100]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="New" data={data01} fill="#8884d8" line shape="cross" />
                    <Scatter name="Doing" data={data02} fill="#FF33F3" line shape="diamond" />
                    <Scatter name="Done" data={data03} fill="#6BFF33" line shape="diamond" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Evelotionchart1;