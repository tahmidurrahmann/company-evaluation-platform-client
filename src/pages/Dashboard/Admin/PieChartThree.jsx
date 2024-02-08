import ApexCharts from 'apexcharts';
import { useEffect, useState } from 'react';
import useEmployeeTask from '../../../hooks/useEmployeeTask';
import Loading from '../../../shared/Loading/Loading';
import { SiPoly } from 'react-icons/si';
import { RiLoaderFill, RiVerifiedBadgeFill } from 'react-icons/ri';

const PieChartThree = () => {

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

    const allTaskLength = allEmployeeTask?.length;
    const todoLength = todo?.length;
    const doingLength = doing?.length;
    const completedLength = completed?.length;
    const taskCompletedPercentage = (completedLength / allTaskLength * 100).toFixed(2);

    useEffect(() => {
        if (allEmployeeTask?.length > 0) {
            const options = {
                series: [taskCompletedPercentage],
                chart: {
                    height: 350,
                    type: 'radialBar',
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: ['Completed Task'],
            };

            const chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();

            // Cleanup function
            return () => {
                chart.destroy();
            };
        }
    }, [taskCompletedPercentage, allEmployeeTask]);

    if (isEmployeeTaskPending) {
        return <Loading />
    }

    return (
        <div className='border rounded-lg'>
            <div className='flex flex-col justify-center items-center md:flex-row gap-6 lg:gap-12 p-8'>
                <div className='space-y-2'>
                    <h1 className='text-[#2F2B3DC7] text-xl'>Task Details</h1>
                    <p className='text-[#2F2B3D6B] text-lg'>Total {allTaskLength} Tasks</p>
                    <div className='flex justify-start items-center gap-2 text-sm font-medium pt-4 pb-2'>
                        <SiPoly size={26} className="text-3xl text-blue-400  " />
                        <div className='flex flex-col justify-center items-start'>
                            <p>TODO Tasks</p>
                            <h1>{todoLength}</h1>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 text-sm font-medium pb-2'>
                        <RiLoaderFill size={26} className="text-3xl text-orange-500 6s animate-spin" />
                        <div className='flex flex-col justify-center items-start'>
                            <p>DOING Tasks</p>
                            <h1>{doingLength}</h1>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 text-sm font-medium'>
                        <RiVerifiedBadgeFill size={26} className="text-3xl text-green-500" />
                        <div className='flex flex-col justify-center items-start'>
                            <p>COMPLETED Tasks</p>
                            <h1>{completedLength}</h1>
                        </div>

                    </div>
                </div>
                <div id="chart"></div>
            </div>
        </div>
    );
};

export default PieChartThree;