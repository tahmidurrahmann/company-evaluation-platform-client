import { useEffect, useState } from "react";

const OnlineOffline = () => {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            console.log("User Online");
            setStatus(true);
        };

        const handleOffline = () => {
            console.log("User Offline");
            setStatus(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <div>
            <div className="">
                {status ? (
                    <button className="border-2 border-green-500 px-5 btn-sm text-white rounded-xl">Online</button>
                ) : (
                    <button className="btn-sm border-2 border-red-400 rounded-xl line-through px-5">Offline</button>
                )}
            </div>
        </div>
    );
};

export default OnlineOffline;
