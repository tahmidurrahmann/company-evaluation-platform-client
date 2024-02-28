import { useEffect, useRef } from "react";
import "./message.css"

const Message = ({ message, own }) => {


    const scroll = useRef();
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    return (
        <div ref={scroll} className={own ? "message own" : "message"}>
            <div className="chat chat-start my-2">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img referrerPolicy="no-referrer" src={message?.image} />
                    </div>
                </div>
                <div className="chat-header">
                    {message?.name}
                </div>
                <div className={own ? "chat-bubble chat-bubble-info" : "chat-bubble"}>{message?.message}</div>
            </div>
        </div>
    );
};

export default Message;