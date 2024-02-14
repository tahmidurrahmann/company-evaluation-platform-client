import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const FeedbackHr = () => {
    const axiosSecure =useAxiosSecure()
    const { user } = useAuth()
    console.log(user);
    const handleSubmited = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const textArea = form.details.value;
        const Image = user.photoURL;
        const feedBackDetails ={name,email,textArea,Image}
        axiosSecure.post('/reviews',feedBackDetails)
        .then(res =>{
            console.log("feedback data here",res.data);
            if (res.data.acknowledged)
                Swal.fire({
                    title: "Thank you",
                    text: "Your feedback sucessfully send",
                    icon: "success"
                }).then(() =>{
                    form.reset()
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
        <div className="ml-20">
            <h1 className="text-4xl font-bold text-center pt-10">Give the feedback for this plateform</h1>
            <div className="p-8 m-12">
                <form onSubmit={handleSubmited}>
                    <input type="text" placeholder="Type Name" defaultValue={user?.displayName} name="name" className="input mb-8  bg-black input-bordered input-info w-full " />
                    <input type="text" placeholder="Type Email" defaultValue={user?.email} name="email" className="input mb-8 bg-black  input-bordered input-info w-full " />

                    <textarea className="textarea textarea-info w-full bg-black mb-8 " name="details" placeholder="Type Review details " ></textarea>
                
                    <input type="submit" value="Send" className="btn w-full bg-black shadow-lg shadow-blue-400 border-dotted border-2 border-info hover:bg-info  font-bold text-white" />
                </form>

            </div>
        </div>
    );
};

export default FeedbackHr;