import "./message.css"

const Message = ({ message, own }) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="chat chat-start my-2">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Chat bubble component's Sender photo" src="https://i.ibb.co/cxbG8jy/Screenshot-2023-08-10-170017.png" />
                    </div>
                </div>
                <div className="chat-header">
                    Jane
                </div>
                <div className="chat-bubble">{message?.message}</div>
            </div>
        </div>
    );
};

export default Message;