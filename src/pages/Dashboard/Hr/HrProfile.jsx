import CountUp from 'react-countup';
import { FaUserGraduate, FaTasks, } from "react-icons/fa";
import { FaPersonSnowboarding, FaUsersBetweenLines } from "react-icons/fa6";
import { PopupButton } from 'react-calendly';
import Loading from '../../../shared/Loading/Loading';
import { CgMail } from "react-icons/cg";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import useUsers from '../../../hooks/useUsers';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useEmployee from '../../../hooks/useEmployee';
import useHrRequestCheckedOrNot from '../../../hooks/useHrRequestCheckedOrNot';

const HrProfile = () => {

    const [employeeAgreements, isEmployee] = useEmployee();
    const [allUsers, isUser] = useUsers();
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employee, setEmployee] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [task, setTask] = useState([]);
    const [completedTaskpers, setCompletedTaskpers] = useState(0)

    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const allEmployee = employeeAgreements?.filter(agreement => agreement?.status === "checked");
            const taskFilter = allEmployee?.filter(element => element?.company === hrRequestCheck?.company)
            setEmployee(taskFilter);
        }
    }, [employeeAgreements, hrRequestCheck?.company])
    useEffect(() => {
        axiosPublic
            .get("/imployeeTasks")
            .then((res) => {
                const taskFilter = res?.data?.filter(element => element?.company === hrRequestCheck?.company)
                const completedFilter = taskFilter?.filter(element => element?.status === 'completed')
                const persent = (completedFilter?.length / taskFilter?.length) * 100
                setCompletedTaskpers(persent)
                setTask(taskFilter)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [axiosPublic, hrRequestCheck,])

    if (isHr || isUser || isEmployee) {
        return <Loading />
    }

    return (
        <>
            <div className='my-6'>
                {
                    hrRequestCheck?.status === "checked" ? <div className="object-cover  shadow-black bg-black text-white shadow-xl flex flex-col md:flex-row p-6 md:p-8 mx-4 xl:mx-0 rounded-xl gap-12 items-center">
                        <img src={hrRequestCheck?.imageURL} alt="Shoes" className='w-40' />
                        <div>
                            <h1 className="text-xl font-semibold flex items-center gap-2"><FaRegUser />{hrRequestCheck?.name}</h1>
                            <h1 className="text-xl font-semibold flex items-center gap-2"><PiMediumLogoFill /> {hrRequestCheck?.company}</h1>
                            <h2 className="font-medium text-neutral-400 flex items-center gap-2"><CgMail />{hrRequestCheck?.email}</h2>
                        </div>
                    </div>
                        : <div>Please Apply For HR</div>
                }

            </div>
            <div className="App flex justify-center items-center py-6 ">
                <PopupButton className='bg-black text-white p-5 shadow-xl rounded-xl hover:text-blue-400 border-b-2 font-bold'
                    url="https://calendly.com/tahmidurrahman/30min"

                    rootElement={document.getElementById("root")}
                    text="Click here to schedule!"
                />
            </div>


            <h1 className='text-center text-white text-2xl lg:text-3xl font-extrabold mt-32'>Your Normal Analices for your company</h1>
            <section className="flex flex-wrap lg:flex-row justify-center items-center gap-12 md:gap-16 my-20">
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <FaUsersBetweenLines className='text-5xl bg-black shadow-xl shadow-blue-400' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div className='text-white'>
                                <CountUp start={0} end={allUsers?.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">All Users</span>
                    </h2>

                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">

                        <FaUserGraduate className='text-5xl bg-black shadow-xl shadow-blue-400' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div className='text-white'>
                                <CountUp start={0} end={employee?.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">All Employe</span>
                    </h2>

                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">

                        <FaTasks className='text-5xl bg-black shadow-xl shadow-blue-400' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div className='text-white'>

                                <CountUp start={0} end={task.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Your Employe Task</span>
                    </h2>
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <FaPersonSnowboarding className='text-5xl bg-black shadow-xl shadow-blue-400' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div className='flex gap-3 text-white'>

                                <CountUp start={0} end={completedTaskpers}>
                                </CountUp> %
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Your employe pearformeance</span>
                    </h2>

                </article>
            </section>
        </>
    );
};

export default HrProfile;