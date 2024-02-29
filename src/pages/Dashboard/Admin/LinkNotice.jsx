import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useMeet from "../../../hooks/useMeet";
import Loading from "../../../shared/Loading/Loading";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import { MdOutlineAutoDelete } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

const LinkNotice = () => {
    const { user } = useAuth();
    const [notice, setNotice] = useState([]);
    const [meetLink, setMeetLink] = useState({})
    const axiosPublic = useAxiosPublic();
    const [allMeetLink, isMeetLink] = useMeet();

    useEffect(() => {
        axiosPublic?.get("/notice").then((res) => setNotice(res.data));
        allMeetLink?.map(element => element.email === user.email ? setMeetLink(element) : '')
    }, [axiosPublic, allMeetLink, user.email]);

    if (isMeetLink) {
        return <Loading />
    }

    const getMonthName = (dateString) => {
        const dateObj = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[dateObj.getMonth()];
    };

    console.log(meetLink);

    return (
        <div>
            <div className="flex justify-center lg:justify-end pt-6 md:pt-6">
                <div className="chat-header">
                    <a className="bg-[#007cc7] p-3 rounded-lg text-white" href={meetLink?.Link}>Join Meet</a>
                    <p className="">{meetLink?.Date?.split("-")[2]}, {getMonthName(meetLink?.Date)}, {meetLink?.Date?.split("-")[0]}</p>
                </div>
            </div>
            <div className="py-6">
                <SharedHeadingDashboard heading="Notices" />
                <hr />
                <div>
                    {/* notice card  */}
                    <div>
                        {/* <img src="https://i.ibb.co/1KgGNBb/yulk-idgl-140704.jpg" alt="" /> */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:ml-16">
                            {notice.map((item) => (
                                <div key={item._id} className="relative">
                                    <img
                                        src="https://i.ibb.co/SDTXMXQ/yulk-idgl-140704-removebg-preview.png"
                                        alt="Your Image"
                                        className="w-full"
                                    />
                                    <div className="absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md px-6 space-y-2 pt-10">
                                        <h2 className="text-xl font-semibold">{item.topic}</h2>
                                        <p className="text-sm leading-6">{item.notice}</p>
                                        <h4 className="text-sm font-extralight italic">
                                            {item.dateWithYear}
                                        </h4>
                                        <div className="flex justify-end ">
                                            <MdOutlineAutoDelete className="text-3xl font-bold cursor-pointer hover:text-red-600" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkNotice;