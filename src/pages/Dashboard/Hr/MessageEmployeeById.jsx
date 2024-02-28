import { Link, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useRef, useState } from "react";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Message from "./Message";
import useMessage from "../../../hooks/useMessage";
import io from "socket.io-client";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";

const MessageEmployeeById = () => {

    const { id } = useParams();
    const [employeeAgreements, isEmployee] = useEmployee();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [employee, setEmployee] = useState({});
    const [message, isMessage, refetch] = useMessage();
    const [allMessage, setAllMessage] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const [hrRequestCheck, isHr] = useHrRequestCheckedOrNot();
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();

    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage)
        }
    }, [sendMessage])

    useEffect(() => {
        socket.current?.on("receive-message", (data) => {
            setReceiveMessage(data);
        })
    }, [])

    useEffect(() => {
        if (receiveMessage !== null && id) {
            setAllMessage(prevMessages => [...prevMessages, receiveMessage]);
        }
    }, [id, receiveMessage]);


    useEffect(() => {
        // Connect to Socket.io server
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", hrRequestCheck?._id);
        socket.current?.on("get-users", (users) => {
            setOnlineUsers(users);
        });

        return () => {
            // Disconnect from Socket.io when component unmounts
            socket.current.disconnect();
        };
    }, [hrRequestCheck]);

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

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullMessage = form.message.value;
        const userEmail = user?.email;
        const message = { message: fullMessage, senderEmail: userEmail, receiverEmail: employee?.email, image: user?.photoURL, name: user?.displayName };
        const res = await axiosSecure.post("/messages", message);
        if (res?.data?.insertedId) {
            form.reset();
            refetch();
            setSendMessage(...message, id);
        }
    }

    if (isEmployee || isMessage || isHr) {
        return <Loading />
    }

    refetch();

    console.log(hrRequestCheck);

    return (
        <div>
            <SharedHeadingDashboard heading="Send Message" />
            <Link to="/dashboard/messageEmployee"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg">✕</button></Link>
            <div className="">
                <div className="max-h-[calc(100vh-280px)] overflow-y-scroll">
                    {allMessage?.map((m) => (
                        <Message key={m?._id} message={m} own={m.senderEmail === user?.email} />
                    ))}
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