import toast from "react-hot-toast";
import useAgreement from "../../hooks/useAgreement";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import MultipleFileUploader from "../Dashboard/Hr/MultipleFileUploader";
import { useState } from "react";

const ApplyForEmployee = () => {

    const axiosSecure = useAxiosSecure();
    const [file, setFile] = useState({});
    const { user } = useAuth();

    const {
        register, handleSubmit, reset, formState: { errors } } = useForm()

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

    const [allAgreements, isAgreement] = useAgreement();

    if (isAgreement) {
        return <Loading />
    }

    return (
        <div>
            <div className="pt-16">
                <SharedBanner passage="Apply For Employee" heading="Apply For Human Employee" />
                <div className="max-w-screen-2xl mx-auto">
                    <div className="my-6 md:my-8 lg:my-12">
                        <SharedHeading heading="Apply For Human Employee" />
                    </div>
                    <form className='flex flex-col justify-center items-center py-12 space-y-8' onSubmit={handleSubmit(onSubmit)}>
                        <div className="inputContainer w-full">
                            <input defaultValue={user?.displayName} readOnly name="user_name" required className="customInput py-3" type="name" />
                            <label className="inputLabel font-semibold">NAME</label>
                            <div className="inputUnderline"></div>
                        </div>
                        <div className="inputContainer w-full">
                            <input defaultValue={user?.email} readOnly name="user_email" required className="customInput py-3" type="email" />
                            <label className="inputLabel font-semibold">EMAIL</label>
                            <div className="inputUnderline"></div>
                        </div>
                        <select {...register("company", { required: true })} className="select select-bordered w-full">
                            <option disabled selected>Select Your Company</option>
                            {
                                allAgreements?.map((agreement, index) => <option key={index} value={agreement?.company}>{agreement?.company}</option>)
                            }
                        </select>
                        {errors.company?.type === "required" && (
                            <p className="text-red-600 text-left pt-1">Company is required</p>
                        )}
                        <div className="flex flex-col text-xl">
                            <label className="font-semibold">Upload Resume </label>
                            <label className="font-semibold"> (File accepted: .pdf, .doc/docx - Max file size: 150KB for demo limit)</label>
                            <MultipleFileUploader setFile={setFile} />
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