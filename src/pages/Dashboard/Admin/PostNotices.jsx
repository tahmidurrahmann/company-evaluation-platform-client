import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";

const PostNotices = () => {

    const axiosSecure = useAxiosSecure();

    const handleSubmitNotice = async (e) => {
        e.preventDefault();
        const form = e.target;
        const topic = form.topic.value;
        const notice = form.notice.value;
        const date = new Date();
        const dateWithYear = date.toISOString().split('T')[0];
        const allNoticeData = { topic, notice, dateWithYear };
        const res = await axiosSecure.post("/noticeInfo", allNoticeData);
        if (res?.data?.insertedId) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            form.reset();
        }
    }

    return (
        <div className="px-8 md:px-20">
            <div className="pt-8">
                <SharedHeadingDashboard heading="Post Latest Notices & Info" />
            </div>
            <form onSubmit={handleSubmitNotice}>
                <div className="pt-20 lg:pt-32 flex flex-col space-y-12">
                    <div className="inputContainer w-full mt-6">
                        <input type="text" className="customInputu" name="topic" required />
                        <label className="inputLabelu">Enter Tour Topic</label>
                    </div>
                    <div className="inputContainer w-full mt-6">
                        <textarea className="customInputu" name="notice" cols="30" rows="10" required></textarea>
                        <label className="inputLabelu">Enter Your Notice</label>
                    </div>
                    <input className="font-semibold bg-[#007cc7] rounded-lg text-white hover:scale-105 transition flex justify-center py-2 font-raleway gap-1 items-center" type="submit" value="Make Notice" />
                </div>
            </form>
        </div>
    );
};

export default PostNotices;