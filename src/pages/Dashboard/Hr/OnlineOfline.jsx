import { useEffect, useState } from "react";


const OnlineOfline = () => {
    const [status,setStatus]=useState(false)

    useEffect(()=>{

            const handleOnline =() =>{
                console.log("user Online");
                setStatus(true)
            }
            const handleOffline =() =>{
                console.log("user Offline");
                setStatus(false)
            }

            window.addEventListener("online",handleOnline)
            window.addEventListener("offline",handleOffline);

            return () =>{

                window.addEventListener("online", handleOnline)
                window.addEventListener("offline", handleOffline);
            }


    },[])
    return (
        <div>
            <div className="">
           {status ? <button className="border-2 border-green-500  px-5 btn-sm text-white rounded-xl">Online</button>
           :
                    <button className=" btn-sm border-2 border-red-400 rounded-xl line-through px-5">Offline</button>}
            </div>
        </div>
    );
};

export default OnlineOfline;