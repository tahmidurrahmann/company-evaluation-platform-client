import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";

const FeedbackHr = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const handleSubmitted = async (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const review = form?.review?.value;
        const userPicture = user.photoURL;
        const feedBackDetails = {userName, userEmail, review, userPicture };
        axiosSecure.post('/reviews', feedBackDetails)
            .then(res => {
                console.log("feedback data here", res.data);
                if (res.data.acknowledged)
                    Swal.fire({
                        title: "Thank you",
                        text: "Your feedback successfully send",
                        icon: "success"
                    }).then(() => {
                        form.reset();
                    }).catch(error => {
                        console.log(error);
                        Swal.fire({
                            title: "Sorry",
                            text: "Your feedback not  send",
                            icon: "error"
                        })

                    });
            })
    }

    return (
        <div className="px-8 md:px-20">
            <div className="pt-8">
                <SharedHeadingDashboard heading="Give Review About this Site" />
            </div>
            <form onSubmit={handleSubmitted}>
                <div className="pt-20 flex flex-col">
                    <div className="inputContainer w-full mt-6">
                        <textarea className="customInputu" name="review" cols="30" rows="10" required></textarea>
                        <label className="inputLabelu">Enter Your Notice</label>
                    </div>
                    <input className="font-semibold bg-[#007cc7] rounded-lg text-white hover:scale-105 transition flex justify-center py-2 font-raleway gap-1 items-center" type="submit" value="Make Notice" />
                </div>
            </form>
        </div>
    );
};

export default FeedbackHr;