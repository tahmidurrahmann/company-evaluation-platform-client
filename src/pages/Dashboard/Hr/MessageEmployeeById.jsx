import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useState } from "react";
import "./message.css"
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import { io } from "socket.io-client";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useHrMessages from "../../../hooks/useHrMessages";

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const MessageEmployeeById = () => {

    const { id } = useParams();
    const [employeeAgreements, isEmployee] = useEmployee();
    const { user } = useAuth();
    const [hrMessages, isMessages, refetch] = useHrMessages();
    const axiosSecure = useAxiosSecure();
    const [employee, setEmployee] = useState({});
    const [socketConnected, setSocketConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [employeeMessages, setEmployeeMessages] = useState([]);

    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const employeeDetails = employeeAgreements?.find(item => item?._id === id);
            setEmployee(employeeDetails);
        }
    }, [employeeAgreements, id])

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullMessage = form.message.value;
        const userEmail = user?.email;
        const employeeId = id;
        const message = { message: fullMessage, email: userEmail, employeeId };
        const res = await axiosSecure.post("/hrMessages", message);
        if (res?.data?.insertedId) {
            form.reset();
            refetch();
        }
    }

    useEffect(() => {
        if (employee) {
            socket = io(ENDPOINT);
            socket.emit("setup", employee)
            socket.on("connection", () => setSocketConnected(true))
        }
        else {
            // Object does not have a value
            console.log('Object does not have a value');
        }
    }, [employee])

    useEffect(() => {
        if (hrMessages?.length > 0) {
            const specificMessages = hrMessages?.filter(item => item?.email === user?.email);
            setMessages(specificMessages);
            const employeeMessages = hrMessages?.filter(item => item?.email === employee?.email);
            setEmployeeMessages(employeeMessages);
        }
    }, [hrMessages, user?.email, employee?.email]);

    if (isEmployee || isMessages) {
        return <Loading />
    }

    console.log(hrMessages, messages);

    return (
        <div className="px-6 2xl:px-0">
            <SharedHeadingDashboard heading="Send Message" />
            {
                employeeMessages?.map(item => <div key={item?._id}>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Chat bubble component's Sender photo" src={employee?.imageURL} />
                            </div>
                        </div>
                        <div className="chat-header">
                            {employee?.name}
                        </div>
                        <div className="chat-bubble">{item?.message}</div>
                    </div>
                </div>)
            }
            <div className="flex flex-col gap-6 mb-16">
                {
                    messages?.map(item => <div key={item?._id} className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img referrerPolicy="no-referrer" alt="Chat bubble component's Sender photo" src={user?.photoURL} />
                            </div>
                        </div>
                        <div className="chat-header">
                            {user?.displayName}
                        </div>
                        <div className="chat-bubble">{item?.message}</div>
                    </div>)
                }
            </div>
            <form onSubmit={handleSendMessage} className="fixed bottom-1 w-4/5 lg:w-3/4 mx-auto">
                <div className="messageBox">
                    <input className="w-4/5 mx-auto" required placeholder="Message..." type="text" name="message" id="messageInput" />
                    <button className="" id="sendButton">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                            <path
                                fill="none"
                                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                            ></path>
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="33.67"
                                stroke="#6c6c6c"
                                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                            ></path>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageEmployeeById;