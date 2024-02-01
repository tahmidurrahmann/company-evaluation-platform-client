import useEmployee from "../../../hooks/useEmployee";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import TeamMemberReq from "./TeamMemberReq";
import moment from "moment-timezone";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllEmploye = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState([])
    const [targetinfo, setTargetinfo] = useState([])
    const [postTask, setPostTask] = useState([])
    const [employeeAgreements, isEmployee] = useEmployee();
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [employee, setEmployee] = useState([]);
    const [myEmploye, setMyEmploye] = useState([])


    console.log(hrRequestCheck.company)
    // console.log(time.timeAndLocal)

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (formdata) => {
        const startTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        // setTime(time)
        // console.log(formdata)
        setData(formdata)
        const additem = data.additem
        const status = 'todo'
        const timeAndLocal = data.timeAndLocal
        const audience = data.audience
        const tags = data.tags
        const number = data.number
        const channel = data.channel
        const effort = data.effort
        const name = targetinfo.name
        const email = targetinfo.email
        const company = hrRequestCheck.company
        const giveTaskInfo = { additem, status, timeAndLocal, audience, tags, number, channel, effort, name, email, startTime, company }
        setPostTask(giveTaskInfo)
    }
    // console.log(employee)
    // console.log(myEmploye)
    // console.log(hrRequestCheck)
    const [time, setTime] = useState([])
    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeMatch = employee.filter(element => element?.company === hrRequestCheck?.company)
            setMyEmploye(findEmployeMatch)
            axiosPublic.get('/imployeeTasks')
                .then(res => {
                    setTime(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [employee, hrRequestCheck?.company, axiosPublic, hrRequestCheck?.status, data])
    // console.log(time)
    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const allEmployee = employeeAgreements?.filter(agreement => agreement?.status === "checked");
            setEmployee(allEmployee);
        }
    }, [employeeAgreements])

    if (isHr || isEmployee) {
        return <Loading />
    }

    const handeltaskPost = () => {
        axiosSecure.post('/imployeeTasks', postTask)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handelinformation = (info) => {
        // console.log(info)
        setTargetinfo(info)
    }


    // const localGetItem = JSON.parse(localStorage.getItem('data'))
    // console.log(localGetItem)

    return (
        <div>
            <TeamMemberReq></TeamMemberReq>
            <div className="overflow-x-auto">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-6">All Responce Employe</h1>
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Give Task</th>
                            <div className="flex flex-row w-96 justify-between">
                                <th>GTask Start Date</th>
                                <th>Task End Date</th>
                            </div>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEmploye.map((element, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img referrerPolicy="no-referrer" className="h-12 w-12 rounded-full" src={element.imageURL} alt="" /></td>
                                <td>{element.name}</td>
                                <td>{element?.company}</td>
                                <td onClick={() => handelinformation(element)} ><button onClick={() => document.getElementById('my_modal_3').showModal()}><span>+</span> add task</button></td>
                                {

                                    time.map((elementss, index) => <div key={index} className="flex flex-row w-96 justify-between" >

                                        <td >
                                            {
                                                element.email === elementss.email ? elementss.startTime : ''
                                            }
                                        </td>
                                        <td>
                                            {
                                                element.email === elementss.email ? elementss.timeAndLocal : ''
                                            }

                                        </td>
                                    </div>)
                                }
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>

                </div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                    <div className=" bg-[#4caeeb67] h-[500px] max-w-8xl mx-auto ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="mt-20">
                            <form onChange={handleSubmit(onSubmit)}>
                                <table className="table table-xs">
                                    <thead className="text-white text-lg">
                                        <tr>
                                            <th>Task Name</th>
                                            <th>Assignee</th>
                                            <th>Due Date</th>
                                            <th>Audience</th>
                                            <th>Tags</th>
                                            <th>Estimated hour</th>
                                            <th>Channel</th>
                                            <th>Effort</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <th>
                                                <input type="text" placeholder="Add tasks item" name="additem" id="additem" {...register("additem")} className="input input-bordered input-info max-w-xs" />
                                            </th>
                                            <td>
                                                <input type="datetime-local" name="timeAndLocal" id="timeAndLocal" {...register("timeAndLocal")} className="input input-bordered input-info max-w-xs" />
                                            </td>
                                            <td>
                                                {/* primium/busness */}
                                                <select {...register("audience")} className="select max-w-xs">
                                                    <option >Audience</option>
                                                    <option value='primium' >primium</option>
                                                    <option value='busness' >busness</option>
                                                    <option value='Other' >Other</option>
                                                </select>
                                            </td>
                                            {/* TODO: if hr not responce user then button well be show (panding) */}
                                            <td>
                                                {/* low priority/ high priority */}
                                                <select {...register("tags")} className="select max-w-xs">
                                                    <option >Tags</option>
                                                    <option value='lowProirity' >low priority</option>
                                                    <option value='highPriority' >high priority</option>
                                                    <option value='medPriority' >Med Priority</option>
                                                </select>
                                            </td>
                                            <td>
                                                {/* 3h/3d */}
                                                <input type="number" name="number" id="number" {...register("number")} className="input input-bordered input-info w-20" />
                                            </td>
                                            <td>
                                                {/* social/blog/press */}
                                                <select {...register("channel")} className="select max-w-xs">
                                                    <option >Channel</option>
                                                    <option value='social'>social</option>
                                                    <option value='blog'>blog</option>
                                                    <option value='press'>press</option>
                                                    <option value='other'>other</option>
                                                </select>
                                            </td>
                                            <td>
                                                {/* low/medium/high */}
                                                <select {...register("effort")} className="select  max-w-xs">
                                                    <option >Effort</option>
                                                    <option value='low'>low</option>
                                                    <option value='medium'>medium</option>
                                                    <option value='high'>high</option>
                                                </select>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="grid grid-cols-3 max-w-4xl mx-auto text-white mt-20 bg-slate-500 p-10 rounded-2xl gap-5">
                                    <h1>{data.additem}</h1>
                                    <h1>{data.timeAndLocal}</h1>
                                    <h1>{data.audience}</h1>
                                    <h1>{data.tags}</h1>
                                    <h1>{data.number}</h1>
                                    <h1>{data.channel}</h1>
                                    <h1>{data.effort}</h1>
                                    <h1>{targetinfo.name}</h1>
                                    <h1>{targetinfo.email}</h1>
                                </div>
                            </form>
                            <button onClick={handeltaskPost} className="btn btn-neutral">Give His Task</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AllEmploye;