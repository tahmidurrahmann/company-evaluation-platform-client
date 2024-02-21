import { useForm } from "react-hook-form";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import "../Home/Banner/custom.css"
import useAgreement from "../../hooks/useAgreement";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const ApplyForHr = () => {

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [, , refetch] = useAgreement();

    const {
        register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const company = data?.company;
        const location = data?.location;
        const yearFounded = data?.yearFounded;
        const industrySector = data?.industrySector;
        const companySize = data?.companySize;
        const photo = data?.photo[0];
        const role = "hr";
        const name = user?.displayName;
        const email = user?.email;
        const photoObj = { image: photo };
        const uploadImage = await axiosPublic.post(apiURL, photoObj, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        const imageURL = uploadImage?.data?.data?.display_url;
        const formDetails = { company, imageURL, role, name, email, location, yearFounded, industrySector, companySize };
        const res = await axiosSecure.post("/formDetails", formDetails);
        if (res?.data?.insertedId) {
            toast.success("Your Form Submitted");
            refetch();
            reset()
        }
        else {
            toast.error("You Cannot Post Twice")
            reset();
        }
    }

    return (
        <div className="pt-16">
            <SharedBanner passage="Company Job Hub" heading="Company Job Hub" />
            <div className="max-w-screen-2xl mx-auto">
                <div className="my-6 md:my-8 lg:my-12">
                    <SharedHeading heading="Apply For Human Resource" />
                </div>
                <form className='flex flex-col justify-center items-center py-12 space-y-8 px-6 xl:px-0' onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                        <div className="inputContainer w-full flex-1">
                            <input defaultValue={user?.displayName} readOnly name="user_name" required className="customInput py-3" type="name" />
                            <label className="inputLabel font-semibold">NAME</label>
                            <div className="inputUnderline"></div>
                        </div>
                        <div className="inputContainer w-full flex-1">
                            <input defaultValue={user?.email} readOnly name="user_email" required className="customInput py-3" type="email" />
                            <label className="inputLabel font-semibold">EMAIL</label>
                            <div className="inputUnderline"></div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                        <div className="inputContainer w-full flex-1">
                            <input {...register("company", { required: true })} required className="customInput py-3" type="name" />
                            <label className="inputLabel font-semibold">COMPANY NAME</label>
                            <div className="inputUnderline"></div>
                        </div>
                        {errors.company?.type === "required" && (
                            <p className="text-red-600 text-left">Name is required</p>
                        )}
                        <div className="inputContainer w-full flex-1">
                            <input {...register("location", { required: true })} required className="customInput py-3" type="text" />
                            <label className="inputLabel font-semibold">COMPANY LOCATION</label>
                            <div className="inputUnderline"></div>
                        </div>
                        {errors.location?.type === "required" && (
                            <p className="text-red-600 text-left">Location is required</p>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                        <div className="inputContainer w-full flex-1">
                            <input {...register("industrySector", { required: true })} required className="customInput py-3" type="text" />
                            <label className="inputLabel font-semibold">Industry Sector</label>
                            <div className="inputUnderline"></div>
                        </div>
                        {errors.industrySector?.type === "required" && (
                            <p className="text-red-600 text-left">Industry Sector is required</p>
                        )}
                        <div className="inputContainer w-full flex-1">
                            <input {...register("yearFounded", { required: true })} required className="customInput py-3" type="month" />
                            <label className="inputLabel font-semibold">Year Founded</label>
                            <div className="inputUnderline"></div>
                        </div>
                        {errors.yearFounded?.type === "required" && (
                            <p className="text-red-600 text-left">Year Founded is required</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between gap-2 md:gap-8 w-full">
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold">Company Size</label>
                            <select {...register("companySize", { required: true })} className="select select-bordered w-full flex-1">
                                <option disabled selected>Company Size</option>
                                <option value="Less Than 10 Employee">Less Than 10 Employee</option>
                                <option value="10 ~ 50 Employee">10 ~ 50 Employee</option>
                                <option value="50 ~ 200 Employee">50 ~ 200 Employee</option>
                                <option value="200 ~ 500 Employee">200 ~ 500 Employee</option>
                                <option value="500 ~ 2000 Employee">500 ~ 2000 Employee</option>
                                <option value="More Than 2000 Employee">More Than 2000 Employee</option>
                            </select>
                        </div>
                        {errors.companySize?.type === "required" && (
                            <p className="text-red-600 text-left pt-1">Company Size is required</p>
                        )}
                        <div className="flex flex-col flex-1 h-[72px]">
                            <label className="font-semibold">Choose Company Photo</label>
                            <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full flex-1" />
                        </div>
                        {errors.photo?.type === "required" && (
                            <p className="text-red-600 text-left pt-1">Photo is required</p>
                        )}
                    </div>
                    <br />
                    <button type="submit" className="but">
                        <div className="but-top font-medium">Submit</div>
                        <div className="but-bottom"></div>
                        <div className="but-base"></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyForHr;