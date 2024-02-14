import ApexCharts from 'apexcharts';
import { useEffect, useState } from "react";
import useEmployeeTask from "../../../hooks/useEmployeeTask";
import Loading from "../../../shared/Loading/Loading";

const PieChartTwo = () => {

    const [allEmployeeTask, isEmployeeTaskPending] = useEmployeeTask();
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        if (allEmployeeTask?.length > 0) {
            const todoTask = allEmployeeTask?.filter(employee => employee?.status === "todo");
            setTodo(todoTask);
            const doingTask = allEmployeeTask?.filter(employee => employee?.status === "doing");
            setDoing(doingTask);
            const completedTask = allEmployeeTask?.filter(employee => employee?.status === "completed");
            setCompleted(completedTask);
        }
    }, [allEmployeeTask])

    const totalTask = allEmployeeTask?.length;
    const todoLength = todo?.length;
    const doingLength = doing?.length;
    const completedLength = completed?.length;

    useEffect(() => {
        if(allEmployeeTask?.length > 0){
            const options = {
                series: [todoLength, doingLength, completedLength],
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                                color : "#fff",
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color : "#fff",
                                formatter: function () {
                                    return totalTask;
                                },
                            },
                        },
                    },
                },
                labels: ['TODO', 'DOING', 'COMPLETED'],
            };
    
            const chart = new ApexCharts(document.querySelector('#chart'), options);
            chart.render();
    
            // Cleanup function
            return () => {
                chart.destroy();
            };
        }
    }, [completedLength, doingLength, todoLength, totalTask, allEmployeeTask]);

    if (isEmployeeTaskPending) {
        return <Loading />
    }

    return (
        <div id="chart"></div>
    );
};

export default PieChartTwo;