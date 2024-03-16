import { Link, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Message from "./Message";
import useMessage from "../../../hooks/useMessage";
import io from "socket.io-client";
import { CgMail } from "react-icons/cg";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const ENDPOINT = "http://localhost:5000";

const MessageEmployeeById = () => {

    const { id } = useParams();
    const [employeeAgreements, isEmployee] = useEmployee();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [employee, setEmployee] = useState({});
    const [message, isMessage, refetch] = useMessage();
    const [allMessage, setAllMessage] = useState([]);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const socket = useRef();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullMessage = form.message.value;
        const userEmail = user?.email;
        const message = { message: fullMessage, senderEmail: userEmail, receiverEmail: employee?.email, image: user?.photoURL, name: user?.displayName };
        const res = await axiosSecure.post("/messages", message);
        socket.current.emit("send-message", message)
        if (res?.data?.insertedId) {
            form.reset();
            refetch();
        }
    }

    useEffect(() => {
        socket.current = io(ENDPOINT);
        socket.current?.on("receive-message", (data) => {
            setReceiveMessage(data);
        })
    }, [])

    useEffect(() => {
        if (receiveMessage === null) {
            refetch();
        }
        if (receiveMessage !== null && id) {
            setAllMessage(prevMessages => [...prevMessages, receiveMessage]);
        }
    }, [id, receiveMessage, refetch]);
    
    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const employeeDetails = employeeAgreements?.find(item => item?._id === id);
            setEmployee(employeeDetails);
        }
    }, [employeeAgreements, id])

    useEffect(() => {  
        if (message?.length > 0) {
            const allMessage = message?.filter(m => (m?.senderEmail === user?.email && m?.receiverEmail === employee?.email) | (m?.senderEmail === employee?.email && m?.receiverEmail === user?.email));
            setAllMessage(allMessage)
        }
    }, [employee?.email, message, user?.email])

    if (isEmployee || isMessage) {
        return <Loading />
    }

    return (
        <div className="px-6 2xl:px-0">
            <div className="object-cover bg-glass text-white shadow-xl flex mx-4 xl:mx-0 rounded-xl gap-6 lg:gap-12 items-center justify-center py-3">
                <img src={employee?.imageURL} alt="Shoes" className='w-12 rounded-full' />
                <div>
                    <h1 className="text-xs lg:text-xl font-semibold flex items-center gap-2"><FaRegUser />{employee?.name}</h1>
                    <h1 className="text-xs lg:text-xl font-semibold flex items-center gap-2"><PiMediumLogoFill /> {employee?.company}</h1>
                    <h2 className="text-xs lg:text-xl font-medium text-neutral-400 flex items-center gap-2"><CgMail />{employee?.email}</h2>
                </div>
            </div>
            <Link to="/dashboard/messageEmployee"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg">✕</button></Link>
            <div>
                <div>
                    {
                        allMessage?.length > 0 ? <div className="max-h-[calc(100vh-280px)] overflow-y-scroll">
                            {allMessage?.map((m) => (
                                <Message key={m?._id} message={m} own={m.senderEmail === user?.email} />
                            ))}
                        </div> : <div className="flex justify-center items-center">
                            <h1 className="py-6">Start a conversation! Say hello to get things rolling.</h1>
                        </div>
                    }
                </div>
                <form onSubmit={handleSendMessage} className="fixed bottom-4 w-full mx-6">
                    <div className="flex justify-start items-center gap-2 md:gap-4">
                        <textarea placeholder="Write your message..." className="p-4 rounded-lg w-3/4 lg:w-1/2 chat-bubble" name="message" rows="4" required></textarea>
                        <input type="submit" className="md:px-6 px-2 py-1 md:py-2 bg-[#007cc7] rounded-lg hover:scale-105 transition" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MessageEmployeeById;