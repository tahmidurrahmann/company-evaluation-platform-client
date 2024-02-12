import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useMeet from "../../../hooks/useMeet";
import Loading from "../../../shared/Loading/Loading";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";

const LinkNotice = () => {
    const [notice, setNotice] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [allMeetLink, isMeetLink] = useMeet();

    useEffect(() => {
        axiosPublic.get("/notice").then((res) => setNotice(res.data));
    }, [axiosPublic]);

    if (isMeetLink) {
        return <Loading />
    }

    return (
        <div>
            <div className="flex justify-end pt-2 md:pt-6">
                {
                    allMeetLink?.map(meet => <div key={meet?._id}>
                        <a className="bg-[#007cc7] p-3 rounded-lg text-white" href={meet?.Link}>Join Meet</a>
                    </div>)
                }
            </div>
            <div className="py-6">
                <SharedHeadingDashboard heading="Notices" />
            </div>
            <hr />
            <div>
                {/* notice card  */}
                <div>
                    {/* <img src="https://i.ibb.co/1KgGNBb/yulk-idgl-140704.jpg" alt="" /> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {notice.map((item) => (
                            <div key={item._id} className="relative">
                                <img
                                    src="https://i.ibb.co/1KgGNBb/yulk-idgl-140704.jpg"
                                    alt="Your Image"
                                    className="w-full"
                                />
                                <div className="absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md px-6 space-y-2 pt-10">
                                    <h2 className="text-xl font-semibold">{item.topic}</h2>
                                    <p className="text-sm leading-6">{item.notice}</p>
                                    <h4 className="text-sm font-extralight italic">
                                        {item.dateWithYear}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkNotice;