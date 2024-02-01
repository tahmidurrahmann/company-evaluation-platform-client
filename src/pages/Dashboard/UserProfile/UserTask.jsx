import { useEffect, useState } from "react";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import Loading from "../../../shared/Loading/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UserTask = () => {

    const [allEmployee, isDrag, refetch] = useDragAndDrop();
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [selectedValue, setSelectedValue] = useState("");

    const handleMoveTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const status = form.status.value;
        console.log(status);
        const res = await axiosSecure.put(`/moveTask?task=${status}&id=${selectedValue}`)
        if (res.data?.modifiedCount) {
            toast.success(`Your task moved to ${status}`)
            refetch()
        }
    }

    useEffect(() => {
        if (allEmployee?.length > 0) {
            const todoTask = allEmployee?.filter(employee => employee?.status === "todo");
            setTodo(todoTask);
            const doingTask = allEmployee?.filter(employee => employee?.status === "doing");
            setDoing(doingTask);
            const completedTask = allEmployee?.filter(employee => employee?.status === "completed");
            setCompleted(completedTask);
        }
    }, [allEmployee])

    if (isDrag) {
        return <Loading />
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                    <h1>TO DO</h1>
                    <div>
                        {
                            todo?.map(item => <div key={item?._id}>
                                <h1>{item?.name}</h1>
                                <h1>{item?.email}</h1>
                                <h1>{item?.status}</h1>
                                <form onSubmit={handleMoveTask}>
                                    <select onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                        <option value="todo">TO DO</option>
                                        <option value="doing">DOING</option>
                                        <option value="completed">COMPLETED</option>
                                    </select>
                                    <input type="submit" value="move" />
                                </form>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <h1>DOING</h1>
                    <div>
                        {
                            doing?.map(item => <div key={item?._id}>
                                <h1>{item?.name}</h1>
                                <h1>{item?.email}</h1>
                                <h1>{item?.status}</h1>
                                <form onSubmit={handleMoveTask}>
                                    <select onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                        <option value="todo" selected>TO DO</option>
                                        <option value="doing">DOING</option>
                                        <option value="completed">COMPLETED</option>
                                    </select>
                                    <input type="submit" value="move" />
                                </form>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <h1>COMPLETED</h1>
                    <div>
                        {
                            completed?.map(item => <div key={item?._id}>
                                <h1>{item?.name}</h1>
                                <h1>{item?.email}</h1>
                                <h1>{item?.status}</h1>
                                <form onSubmit={handleMoveTask}>
                                    <select onClick={() => setSelectedValue(item?._id)} name="status" className="select select-bordered w-full max-w-xs">
                                        <option value="todo" selected>TO DO</option>
                                        <option value="doing">DOING</option>
                                        <option value="completed">COMPLETED</option>
                                    </select>
                                    <input type="submit" value="move" />
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