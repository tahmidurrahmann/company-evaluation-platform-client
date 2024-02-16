import { useContext, useEffect, useState } from "react";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import Loading from "../../../shared/Loading/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { SiPoly } from "react-icons/si";
import { RiLoaderFill } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const UserTask = () => {

    const [specificEmployee, isDrag, refetch] = useDragAndDrop();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [selectedValue, setSelectedValue] = useState("");
    const { user } = useContext(AuthContext)

    const handleMoveTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const status = form.status.value;
        const res = await axiosSecure.put(`/moveTask?task=${status}&id=${selectedValue}`)
        if (res.data?.modifiedCount) {
            toast.success(`Your task moved to ${status}`)
            refetch()
        }
    }

    useEffect(() => {
        if (specificEmployee?.length > 0) {
            const todoTask = specificEmployee?.filter(employee => employee?.status === "todo" && employee.email === user.email);
            setTodo(todoTask);
            const doingTask = specificEmployee?.filter(employee => employee?.status === "doing" && employee.email === user.email);
            setDoing(doingTask);
            const completedTask = specificEmployee?.filter(employee => employee?.status === "completed" && employee.email === user.email);
            setCompleted(completedTask);
        }
    }, [specificEmployee, hrRequestCheck, user.email])

    if (isDrag) {
        return <Loading />
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mr-2 mt-8 px-4 2xl:px-0">
                <div>
                    <h1 className="font-bold text-center text-xl">TO DO ({todo.length})</h1>
                    <div className="flex justify-center">
                        <hr className="border-2  border-blue-400 w-60" />
                    </div>
                    <div >
                        {
                            todo?.map(item => <>
                                <div key={item?._id} className=" border-blue-400  border-l-4 hover:border mt-5 shadow-blue-200 hover:shadow-blue-500 p-4 shadow-xl rounded-lg" draggable>
                                    <div className="flex  justify-end">
                                        <SiPoly className="text-3xl text-blue-400  " />
                                    </div>
                                    <h1 className="text-xl font-bold">{item?.company}</h1>
                                    <h1 className="text-blue-400">{item?.email}</h1>

                                    <h1 className="text-sm mt-2 font-bold mb-2">Tags :{item?.tags}</h1>



                                    <div className="flex justify-between ">
                                        <Link className="border-2 hover:bg-blue-300  mb-3 mt-1 rounded-lg p-1 " onClick={() => document.getElementById('my_modal_3').showModal()}>See Task</Link>
                                        <dialog id="my_modal_3" className="modal h-[80vh]">
                                            <div className="modal-box bg-blue-100 ">
                                                <form method="dialog" className="p-5 ">
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <div className="flex justify-between">
                                                    <h1 className="text-sm font-bold text-gray-500">Start : {item?.startTime}</h1>
                                                    <h1 className="text-sm font-bold text-gray-500">End : {item?.timeAndLocal}</h1>
                                                   

                                                </div>
                                                <div className="mt-2">
                                                    <h3 className="font-bold text-lg">{item?.additem}</h3>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                    
                                    <a href={item?.file} download={item?.file}>
                                        <button className="btn btn-outline btn-info mb-2">Show Task File</button>
                                    </a>

                                    <form className="" onSubmit={handleMoveTask}>
                                        <div className="flex gap-3  text-black font-bold ">
                                            <select defaultValue="todo" onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full  max-w-xs">
                                                <option value="todo ">TO DO</option>
                                                <option value="doing">DOING</option>
                                                <option value="completed">COMPLETED</option>
                                            </select>
                                            <input type="submit" value="Move" className="btn rounded-xl hover:bg-blue-500 hover:text-white border-blue-400 border-2" />


                                        </div>

                                    </form>
                                </div>
                            </>)
                        }
                    </div>
                </div >
                <div draggable>
                    <div >
                        <h1 className="font-bold text-center text-xl">DOING ({doing.length})</h1>
                        <div className="flex  justify-center ">
                            <hr className="border-2  border-orange-500 w-60" />
                        </div>
                        <div draggable>
                            {
                                doing?.map(item => <div key={item?._id} className="mt-5 border-orange-500 border-l-4 hover:border shadow-orange-200 hover:shadow-orange-500 p-4 shadow-xl rounded-lg" draggable>
                                    <div className="flex  justify-end">
                                        <RiLoaderFill className="text-3xl text-orange-500 6s animate-spin" />
                                    </div>
                                    <h1 className="text-xl font-bold">{item?.company}</h1>
                                    <h1 className="text-orange-500">{item?.email}</h1>
                                    <h1 className="text-sm mt-2 font-bold mb-2">Tags :{item?.tags}</h1>
                                    <div className="flex justify-between ">
                                        <Link className="border-2 hover:bg-orange-300 mb-3 mt-1 rounded-lg p-1 " onClick={() => document.getElementById('my_modal_3').showModal()}>See Task</Link>
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    <button className="bg-red-700 rounded-full text-white px-2 py-1 absolute right-2 top-2 transition hover:scale-105">✕</button>
                                                </form>
                                                <div className="flex justify-between mt-6">
                                                    <h1 className="text-sm font-bold text-gray-500">Start : {item?.startTime}</h1>
                                                    <h1 className="text-sm font-bold text-gray-500">End : {item?.timeAndLocal}</h1>

                                                </div>
                                                <h3 className="">{item?.additem}</h3>
                                            </div>
                                        </dialog>
                                    </div>
                                    <form onSubmit={handleMoveTask}>
                                        <div className="flex gap-3 text-black font-bold ">
                                            <select defaultValue="doing" onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                                <option value="todo">TO DO</option>
                                                <option value="doing">DOING</option>
                                                <option value="completed">COMPLETED</option>
                                            </select>
                                            <input type="submit" value="Move" className="btn rounded-xl hover:bg-orange-300 hover:text-white border-orange-400 border-2" />
                                        </div>
                                    </form>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-center text-xl">COMPLETED ({completed.length})</h1>
                    <div className="flex justify-center ">
                        <hr className="border-2  border-green-500 w-60" />
                    </div>
                    <div draggable>
                        {
                            completed?.map(item => <div key={item?._id} className="mt-5 border-green-500 border-l-4 hover:border shadow-green-100 hover:shadow-green-500 p-4 shadow-xl rounded-lg" draggable>
                                <div className="flex  justify-end">
                                    <RiVerifiedBadgeFill className="text-3xl text-green-500" />
                                </div>
                                <h1 className="text-xl font-bold">{item?.company}</h1>
                                <h1 className="text-green-500">{item?.email}</h1>
                                <h1 className="text-sm mt-2 font-bold mb-2">Tags :{item?.tags}</h1>
                                <div className="flex justify-between ">

                                    <Link className="border-2 hover:bg-green-300 mb-3 mt-1 rounded-lg p-1 " onClick={() => document.getElementById('my_modal_3').showModal()}>See Task</Link>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">

                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <div className="flex justify-between">
                                                <h1 className="text-sm font-bold text-gray-500">Start : {item?.startTime}</h1>
                                                <h1 className="text-sm font-bold text-gray-500">End : {item?.timeAndLocal}</h1>

                                            </div>
                                            <h3 className="font-bold  text-lg">{item?.additem}</h3>

                                        </div>
                                    </dialog>

                                </div>
                                <form onSubmit={handleMoveTask}>
                                    <div className="flex gap-3 text-black font-bold ">
                                        <select defaultValue="completed" onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                            <option value="todo">TO DO</option>
                                            <option value="doing">DOING</option>
                                            <option value="completed">COMPLETED</option>
                                        </select>
                                        <input type="submit" value="Move" className="btn rounded-xl hover:bg-green-500 hover:text-white border-green-400 border-2" />
                                    </div>
                                </form>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserTask;