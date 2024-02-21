import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import MultipleFileUploader from "../Dashboard/Hr/MultipleFileUploader";
import { useState } from "react";
import useAgreement from "../../hooks/useAgreement";

const ApplyForEmployee = () => {

    const axiosSecure = useAxiosSecure();
    const [file, setFile] = useState({});
    const { user } = useAuth();
    const [allAgreements, isAgreement] = useAgreement();

    const {
        register, handleSubmit, reset, formState: { errors } } = useForm()

    if (isAgreement) {
        return <Loading />
    }

    const onSubmit = async (data) => {
        const company = data?.company;
        const role = "user";
        const name = user?.displayName;
        const email = user?.email;
        const imageURL = user?.photoURL;
        const formDetails = { company, role, name, email, imageURL, file };
        const res = await axiosSecure.post("/employee", formDetails);
        if (res?.data?.insertedId) {
            toast.success("Your Form Submitted");
            reset();
        }
        else {
            toast.error("You Cannot Post Twice");
            reset();
        }
    }

    return (
        <div>
            <div className="pt-16">
                <div className="max-w-screen-2xl mx-auto px-6 xl:px-0">
                    <div className="my-6 md:my-8 lg:my-12">
                        <SharedHeading heading="Apply For Employee" />
                    </div>
                    <form className='flex flex-col justify-center items-center py-12 space-y-8' onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="flex items-center justify-between gap-8 w-full">
                            <div className="flex flex-col flex-1">
                                <label className="font-semibold">Select Your Company</label>
                                <select {...register("company", { required: true })} className="select select-bordered w-full flex-1">
                                    {
                                        allAgreements?.map((agreement, index) => <option key={index} value={agreement?.company}>{agreement?.company}</option>)
                                    }
                                </select>
                                {errors.company?.type === "required" && (
                                    <p className="text-red-600 text-left pt-1">Company is required</p>
                                )}
                            </div>
                            <div className="flex flex-col text-xl flex-1">
                                <label className="font-semibold">Upload Resume</label>
                                <MultipleFileUploader setFile={setFile} />
                            </div>
                        </div>
                        <button type="submit" className="but">
                            <div className="but-top font-medium">Submit</div>
                            <div className="but-bottom"></div>
                            <div className="but-base"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyForEmployee;