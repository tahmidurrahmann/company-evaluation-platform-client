import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useHrMessages from "../../../hooks/useHrMessages";
import Loading from "../../../shared/Loading/Loading";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import useCompany from "../../../hooks/useCompany";
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";

const MessageHr = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [hrMessages, isMessages, refetch] = useHrMessages();
    const [messages, setMessages] = useState([]);
    const [hrMessage, setHrMessage] = useState([]);
    const [hr, setHr] = useState({});
    const [hrInfo, isHrPending] = useCompany();
    const [employeeRequestCheck, isEmployee] = useEmployeeProfile();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullMessage = form.message.value;
        const userEmail = user?.email;
        const message = { message: fullMessage, email: userEmail };
        const res = await axiosSecure.post("/hrMessages", message);
        if (res?.data?.insertedId) {
            form.reset();
            refetch();
        }
    }

    useEffect(() => {
        if (hrMessages?.length > 0) {
            const specificMessages = hrMessages?.filter(item => item?.email === user?.email);
            setMessages(specificMessages);
            const hrMessage = hrMessages?.filter(item => item?.email === hr?.email);
            setHrMessage(hrMessage);
        }
    }, [hrMessages, user?.email, hr?.email]);

    useEffect(() => {
        if (hrInfo?.length > 0 && employeeRequestCheck) {
            const hrInformation = hrInfo?.find(item => item?.company === employeeRequestCheck?.company)
            setHr(hrInformation);
        }
    }, [hrInfo, employeeRequestCheck])

    if (isMessages || isHrPending || isEmployee) {
        return <Loading />
    }

    console.log(hrMessage);

    return (
        <div>
            <SharedHeadingDashboard heading="Send Message" />
            {hrMessage?.map(item => <div key={item?._id}>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Chat bubble component's Sender photo" src={hr?.imageURL} />
                        </div>
                    </div>
                    <div className="chat-header">
                        {hr?.name}
                    </div>
                    <div className="chat-bubble">{item?.message}</div>
                </div>
            </div>)}
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

export default MessageHr;