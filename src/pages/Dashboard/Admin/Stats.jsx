import { GrUserManager } from "react-icons/gr";
import { TbUserPentagon } from "react-icons/tb";
import useEmployeeTask from "../../../hooks/useEmployeeTask";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SiPoly } from "react-icons/si";

const Stats = ({ hrLength, employeeLength }) => {

    const [allEmployeeTask, isEmployeeTaskPending] = useEmployeeTask();
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        if (allEmployeeTask?.length > 0) {
            const completedTask = allEmployeeTask?.filter(employee => employee?.status === "completed");
            setCompleted(completedTask);
        }
    }, [allEmployeeTask])

    if (isEmployeeTaskPending) {
        return <Loading />
    }

    const allTaskLength = allEmployeeTask?.length;
    const completedLength = completed?.length;

    return (
        <div className="mt-10 lg:max-w-screen-sm xl:max-w-screen-xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="rounded-xl shadow-2xl shadow-[#007cc7]">
                    <article className="flex items-center gap-4 rounded-lg bg-black p-6">
                        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                            <GrUserManager size={26} />
                        </span>
                        <div>
                            <p className="text-2xl font-medium text-white">{hrLength}</p>
                            <p className="text-sm text-white">Entire Hiring Manager</p>
                        </div>
                    </article>
                </div>
                <div className="rounded-xl shadow-2xl shadow-[#007cc7]">
                    <article className="flex items-center gap-4 rounded-lg bg-black p-6">
                        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                            <TbUserPentagon size={26} />
                        </span>
                        <div>
                            <p className="text-2xl font-medium text-white">{employeeLength}</p>
                            <p className="text-sm text-white">Overall Employee</p>
                        </div>
                    </article>
                </div>
                <div className="rounded-xl shadow-2xl shadow-[#007cc7]">
                    <article className="flex items-center gap-4 rounded-lg bg-black p-6">
                        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                            <SiPoly size={26} className="text-3xl text-blue-400" />
                        </span>
                        <div>
                            <p className="text-2xl font-medium text-white">{allTaskLength}</p>
                            <p className="text-sm text-white">Combined Task Given</p>
                        </div>
                    </article>
                </div>
                <div className="rounded-xl shadow-2xl shadow-[#007cc7]">
                    <article className="flex items-center gap-4 rounded-lg bg-black p-6">
                        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                            <RiVerifiedBadgeFill size={26} className="text-3xl text-green-400" />
                        </span>
                        <div>
                            <p className="text-2xl font-medium text-white">{completedLength}</p>
                            <p className="text-sm text-white">Completed Task</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Stats;