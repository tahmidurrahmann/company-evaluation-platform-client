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

    const [allEmployee, isDrag, refetch] = useDragAndDrop();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [selectedValue, setSelectedValue] = useState("");
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const handleMoveTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const status = form.status.value;
        // console.log(status);
        const res = await axiosSecure.put(`/moveTask?task=${status}&id=${selectedValue}`)
        if (res.data?.modifiedCount) {
            toast.success(`Your task moved to ${status}`)
            refetch()
        }
    }

    console.log(allEmployee)
    console.log(todo)


    useEffect(() => {
        if (allEmployee?.length > 0) {
            const todoTask = allEmployee?.filter(employee => employee?.status === "todo" && employee.email === user.email);
            setTodo(todoTask);
            const doingTask = allEmployee?.filter(employee => employee?.status === "doing" && employee.email === user.email);
            setDoing(doingTask);
            const completedTask = allEmployee?.filter(employee => employee?.status === "completed" && employee.email === user.email);
            setCompleted(completedTask);
        }
    }, [allEmployee, hrRequestCheck, user.email])

    if (isDrag) {
        return <Loading />
    }



    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                <div className="">
                    <h1 className="font-bold text-center text-xl">TO DO {todo.length}</h1>

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
                                        <dialog id="my_modal_3" className="modal ">
                                            <div className="modal-box">
                                                <form method="dialog" className="p-5">

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

                                    <h1 className="text-sm text-blue-400 mb-2">Tags :{item?.tags}</h1>
                                </div>


                                <form className="" onSubmit={handleMoveTask}>
                                    <div className="flex gap-3 ">
                                        <select onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                            <option value="todo">TO DO</option>
                                            <option value="doing">DOING</option>
                                            <option value="completed">COMPLETED</option>
                                        </select>
                                        <input type="submit" value="Move" className="btn rounded-xl hover:bg-blue-500 hover:text-white border-blue-400 border-2" />


                                    </div>

                                </form>
                            </>)
                        }

                    </div>



                </div >
                <div >
                    <h1 className="font-bold text-center text-xl">DOING {doing.length}</h1>
                    <div className="flex justify-center ">
                        <hr className="border-2  border-orange-500 w-60" />
                    </div>
                    <div draggable>
                        <div >
                            <h1 className="font-bold text-center text-xl">DOING {doing.length}</h1>
                            <div className="flex justify-center ">
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

                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>

                                                    <div className="flex justify-between">
                                                        <h1 className="text-sm font-bold text-gray-500">Start : {item?.startTime}</h1>
                                                        <h1 className="text-sm font-bold text-gray-500">End : {item?.timeAndLocal}</h1>

                                                    </div>
                                                    <h3 className="">{item?.additem}</h3>

                                                </div>
                                            </dialog>

                                        </div>


                                        <form onSubmit={handleMoveTask}>
                                            <div className="flex gap-3">
                                                <select onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                                    <option value="todo" selected>TO DO</option>
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
                        <h1 className="font-bold text-center text-xl">COMPLETED {completed.length}</h1>
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

                                        <h1 className="text-sm font-bold text-green-500 mb-2">Tags :{item?.tags}</h1>
                                    </div>
                                    <form onSubmit={handleMoveTask}>
                                        <div className="flex gap-3">

                                            <select onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                                <option value="todo" selected>TO DO</option>
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
        </div>

    );
};

export default UserTask;