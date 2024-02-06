import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import TeamMemberReq from "./TeamMemberReq";
import moment from "moment-timezone";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useEmployee from "../../../hooks/useEmployee";
import toast from "react-hot-toast";





const AllEmploye = () => {
  

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);
    const [targetinfo, setTargetinfo] = useState([]);
    const [postTask, setPostTask] = useState([]);
    const [employeeAgreements, isEmployee] = useEmployee();
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employee, setEmployee] = useState([]);
    const [myEmploye, setMyEmploye] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = (formdata) => {
        const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        setData(formdata);
        const additem = data.additem;
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
        const giveTaskInfo = { additem, status, timeAndLocal, employImage, audience, tags, number, channel, effort, name, email, startTime, company };
        setPostTask(giveTaskInfo);
        console.log(giveTaskInfo);
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
    }, [employee, hrRequestCheck?.company, axiosPublic, hrRequestCheck?.status, data]);

    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const allEmployee = employeeAgreements?.filter(agreement => agreement?.status === "checked");
            setEmployee(allEmployee);
        }
    }, [employeeAgreements]);

    if (isHr || isEmployee) {
        return <Loading />;
    }

    const handeltaskPost = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosSecure.post('/imployeeTasks', postTask);

            console.log(res.data);

            if (res.data && res.data.acknowledged) {
                toast.success('Your Task is Submited')
            } else {
                toast.error('error Task is not sumbited')
            }
        } catch (error) {
            console.error(error);

            toast.error('something wrong Task is not submited')
        }
    };


    const handelinformation = (info) => {
        setTargetinfo(info);
    };




    return (
        <div>
            <TeamMemberReq></TeamMemberReq>
         
                                    
            <div className="overflow-x-auto">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-6">All Responce Employe</h1>
                <table className="table table-xs ">
                    <thead className="bg-gray-100 text-black h-12">
                        <tr>
                            <th>No:</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Give Task</th>
                            <div className="flex flex-row w-96 mt-3 justify-between">
                                <th>GTask Start Date</th>
                                <th>Task End Date</th>
                            </div>
                        

                        </tr>
                    </thead>
                    <tbody className="">
                        {myEmploye.map((element, index) => (
                            <tr className="border-blue-300 border-b-2" key={index}>
                                <th>{index + 1}</th>
                                <td><img referrerPolicy="no-referrer" className="h-12 w-12 rounded-full" src={element.imageURL} alt="" /></td>
                                <td>{element.name}</td>
                                <td>{element?.company}</td>
                                <td onClick={() => handelinformation(element)} >
                                    <button onClick={() => document.getElementById('my_modal_3').showModal()}>
                                        <span>+</span> add task
                                    </button>
                                </td>
                                {time.map((elementss, index) => (
                                    <div key={index} className="flex flex-row w-96 justify-between" >
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
                        <div className="backdrop-blur p-5 border-2 border-blue-100 rounded-xl h-[550px] max-w-8xl mx-auto ">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="bg-neutral text-white font-bold absolute right-3 px-7 py-2">✕</button>
                            </form>
                            <div className="mt-20">

                                <form onChange={handleSubmit(onSubmit)}>

                                    <div className="grid max-w-4xl mx-auto w-[700px] gap-5">

                                        <div className="col-span-1 p-2">
                                            <input type="datetime-local" name="timeAndLocal" id="timeAndLocal" {...register("timeAndLocal")} className="input input-bordered input-info w-full" />
                                        </div>
                                        <div className="col-span-1 flex gap-5 p-2">
                                            <select {...register("audience")} className="select select-info w-full">
                                                <option>Audience</option>
                                                <option value='primium'>primium</option>
                                                <option value='busness'>busness</option>
                                                <option value='Other'>Other</option>
                                            </select>
                                            <select {...register("tags")} className="select select-info w-full">
                                                <option>Tags</option>
                                                <option value='lowProirity'>low priority</option>
                                                <option value='highPriority'>high priority</option>
                                                <option value='medPriority'>Med Priority</option>
                                            </select>
                                        </div>
                                        <div className="col-span-1 flex gap-5 p-2">
                                            <select {...register("channel")} placeholder="Chanel" className="select select-info w-full">
                                                <option>Channel</option>
                                                <option value='social'>social</option>
                                                <option value='blog'>blog</option>
                                                <option value='press'>press</option>
                                                <option value='other'>other</option>
                                            </select>
                                            <select {...register("effort")} placeholder="Effort" className="select select-info w-full">
                                                <option>Effort</option>
                                                <option value='low'>low</option>
                                                <option value='medium'>medium</option>
                                                <option value='high'>high</option>
                                            </select>
                                        </div>
                                        <div className="col-span-1 p-2">
                                            <textarea type="text" placeholder="Add tasks item" name="additem" id="additem" {...register("additem")} className="textarea textarea-bordered input-info w-full " />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button onClick={handeltaskPost} className="btn btn-neutral mt-5">Give His Task</button>
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
