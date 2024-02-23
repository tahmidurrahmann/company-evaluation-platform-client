import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";
import moment from "moment-timezone";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import MultipleFileUploader from "./MultipleFileUploader";
import useEmployeeTask from "../../../hooks/useEmployeeTask";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";

const AllEmploye = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [targetinfo, setTargetinfo] = useState([]);
    const [employeeAgreements, isEmployee] = useEmployee();
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employee, setEmployee] = useState([]);
    const [myEmploye, setMyEmploye] = useState([]);
    const [,, refetch] = useEmployeeTask();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState({})

    const onSubmit = async (data) => {
        const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        const addItem = data.addItem;
        const status = 'todo';
        const timeAndLocal = data.timeAndLocal;
        const audience = data.audience;
        const tags = data.tags;
        const number = data.number;
        const channel = data.channel;
        const effort = data.effort;
        const name = targetinfo.name;
        const employImage = targetinfo.imageURL;
        const email = targetinfo.email;
        const company = hrRequestCheck?.company;
        const giveTaskInfo = { addItem, status, timeAndLocal, employImage, audience, tags, number, channel, effort, name, email, startTime, company, file };
        console.log(giveTaskInfo);
        try {
            const res = await axiosSecure.post('/imployeeTasks', giveTaskInfo);
            if (res.data && res.data.acknowledged) {
                toast.success('Your Task is Submitted')
                refetch();
            } else {
                toast.error('error Task is not Submitted')
            }
        } catch (error) {
            toast.error('something wrong Task is not Submitted')
        }
    };

    const [time, setTime] = useState([]);

    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeMatch = employee.filter(element => element?.company === hrRequestCheck?.company);
            setMyEmploye(findEmployeMatch);
            axiosPublic.get('/imployeeTasks')
                .then(res => {
                    setTime(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [employee, hrRequestCheck?.company, axiosPublic, hrRequestCheck?.status]);

    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const allEmployee = employeeAgreements?.filter(agreement => agreement?.status === "checked");
            setEmployee(allEmployee);
        }
    }, [employeeAgreements]);

    if (isHr || isEmployee) {
        return <Loading />;
    }

    const handleInformation = (info) => {
        setTargetinfo(info);
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-6">All Response Employe</h1>
                <table className="table table-xs">
                    <thead className="bg-gray-100 text-black h-12">
                        <tr>
                            <th>No:</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Give Task</th>
                            <div className="flex flex-row mt-3 justify-evenly">
                                <th>Task Start Date</th>
                                <th>Task End Date</th>
                            </div>
                        </tr>
                    </thead>
                    <tbody className="">
                        {myEmploye.map((element, index) => (
                            <tr className="border-blue-300 border-b-2" key={index}>
                                <th>{index + 1}</th>
                                <td><img referrerPolicy="no-referrer" className="h-12 border-2 shadow-blue-600 shadow-xl w-12 rounded-full" src={element.imageURL} alt="" /></td>
                                <td>{element.name}</td>
                                <td>{element?.company}</td>
                                <td onClick={() => handleInformation(element)} >
                                    <button className="bg-[#007cc7] py-2 px-4 rounded-lg text-white transition hover:scale-105" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                        <span>+</span> Add task
                                    </button>
                                </td>
                                {time.map((elementss, index) => (
                                    <div key={index} className="flex flex-row  justify-evenly" >
                                        <td >
                                            {element.email === elementss.email ? elementss.startTime : ''}
                                        </td>
                                        <td>
                                            {element.email === elementss.email ? elementss.timeAndLocal : ''}
                                        </td>
                                    </div>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal ">
                        <div className="backdrop-blur text-black p-4 md:p-8 mx-2 md:mx-0 border-2 border-blue-100 rounded-xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="bg-red-500 text-white font-bold absolute right-3 py-1 px-2 transition hover:scale-105 rounded-full">✕</button>
                            </form>

                            <div className="mt-10">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <div className="p-2 flex flex-col">
                                            <label className="text-white" htmlFor="Task Deadline Date & Time">Task Deadline Date & Time</label>
                                            <input type="datetime-local" name="timeAndLocal" id="timeAndLocal" {...register("timeAndLocal", { required: true })} className="input input-bordered input-info w-full" />
                                            {errors.timeAndLocal?.type === "required" && (
                                                <p className="text-red-600 text-left pt-1">Deadline is required</p>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-center gap-5 p-2">
                                            <div className="flex-1">
                                                <label className="text-white" htmlFor="audience">Audience</label>
                                                <select {...register("audience", { required: true })} className="select select-info w-full">
                                                    <option value='Premium'>Premium</option>
                                                    <option value='Business'>Business</option>
                                                    <option value='Other'>Other</option>
                                                </select>
                                                {errors.audience?.type === "required" && (
                                                    <p className="text-red-600 text-left pt-1">Audience is required</p>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-white" htmlFor="tags">Tags</label>
                                                <select {...register("tags", { required: true })} className="select select-info w-full">
                                                    <option value='Lowest Priority'>Lowest Priority</option>
                                                    <option value='Medium Priority'>Medium Priority</option>
                                                    <option value='Highest Priority'>Highest Priority</option>
                                                </select>
                                                {errors.tags?.type === "required" && (
                                                    <p className="text-red-600 text-left pt-1">Tags is required</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-5 p-2">
                                            <div className="flex-1">
                                                <label className="text-white" htmlFor="channel">Channel</label>
                                                <select {...register("channel", { required: true })} placeholder="Channel" className="select select-info w-full">
                                                    <option value='Social'>Social</option>
                                                    <option value='Blog'>Blog</option>
                                                    <option value='Press'>Press</option>
                                                    <option value='Other'>Other</option>
                                                </select>
                                                {errors.channel?.type === "required" && (
                                                    <p className="text-red-600 text-left pt-1">Channel is required</p>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-white" htmlFor="effort">Effort</label>
                                                <select {...register("effort", { required: true })} placeholder="Effort" className="select select-info w-full">
                                                    <option value='Low'>Low</option>
                                                    <option value='Medium'>Medium</option>
                                                    <option value='High'>High</option>
                                                </select>
                                                {errors.effort?.type === "required" && (
                                                    <p className="text-red-600 text-left pt-1">Effort is required</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <textarea {...register("addItem", { required: true })} type="text" placeholder="Overall Task Details" name="addItem" id="addItem" className="textarea textarea-bordered input-info w-full" cols="30" rows="5" />
                                            {errors.addItem?.type === "required" && (
                                                <p className="text-red-600 text-left pt-1">Details is required</p>
                                            )}
                                        </div>
                                        <div className="col-span-1 p-2">
                                            <MultipleFileUploader setFile={setFile} />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <input type="submit" value="Add Task" className="py-3 px-6 rounded-lg text-white font-medium bg-[#007cc7] mt-5 transition hover:scale-105" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AllEmploye;
