import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCompany from "../../../hooks/useCompany";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useRef, useState } from "react";
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";
import useMessage from "../../../hooks/useMessage";
import Message from "./Message";
import { io } from "socket.io-client";

const MessageHr = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [hrInfo, isHrPending] = useCompany();
    const [hr, setHr] = useState({});
    const [employeeRequestCheck, isEmployee] = useEmployeeProfile();
    const [message, isMessage, refetch] = useMessage();
    const [allMessage, setAllMessage] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
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
        if (receiveMessage !== null && hr?._id) {
            setAllMessage(prevMessages => [...prevMessages, receiveMessage]);
        }
    }, [receiveMessage, hr?._id]);


    useEffect(() => {
        // Connect to Socket.io server
        socket.current = io("http://localhost:8800"); // Use correct server URL
        socket.current.emit("new-user-add", employeeRequestCheck._id);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });

        return () => {
            // Disconnect from Socket.io when component unmounts
            socket.current.disconnect();
        };
    }, [employeeRequestCheck]);

    useEffect(() => {
        if (hrInfo?.length > 0) {
            const hr = hrInfo?.find(h => h?.company === employeeRequestCheck?.company)
            setHr(hr);
        }
    }, [employeeRequestCheck?.company, hrInfo])

    useEffect(() => {
        if (message?.length > 0) {
            const allMessage = message?.filter(m => (m?.senderEmail === user?.email && m?.receiverEmail === hr?.email) | (m?.receiverEmail === user?.email && m?.senderEmail === hr?.email));
            setAllMessage(allMessage);
        }
    }, [hr?.email, message, user?.email])

    if (isHrPending || isEmployee || isMessage) {
        return <Loading />
    }

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullMessage = form.message.value;
        const userEmail = user?.email;
        const hrEmail = hr?.email;
        const message = { message: fullMessage, senderEmail: userEmail, receiverEmail: hrEmail, image: user?.photoURL, name: user?.displayName };
        const res = await axiosSecure.post("/messages", message);
        if (res?.data?.insertedId) {
            form.reset();
            refetch();
            setSendMessage(message, hr?._id);
        }
    }

    console.log(employeeRequestCheck);

    return (
        <div>
            <SharedHeadingDashboard heading="Send Message" />
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
    );
};

export default MessageHr;