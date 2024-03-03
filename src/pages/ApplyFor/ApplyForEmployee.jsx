import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import MultipleFileUploader from "../Dashboard/Hr/MultipleFileUploader";
import { useState } from "react";
import useAgreement from "../../hooks/useAgreement";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";

const ApplyForEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const [file, setFile] = useState({});
  const { user } = useAuth();
  const [allAgreements, isAgreement] = useAgreement();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (isAgreement) {
    return <Loading />;
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
    } else {
      toast.error("You Cannot Post Twice");
      reset();
    }
  };

  const checkedAgreements = allAgreements.filter(
    (agreement) => agreement.status === "checked"
  );

  return (
    <div className="">
      <SharedBanner
        bannerImg="https://i.ibb.co/dKphgbm/image.png"
        passage="Apply For Employee"
        heading="Apply For Employee"
      />
      <div className="pt-16">
        <div className="px-6 mx-auto max-w-screen-xl xl:px-0">
          <div className="my-6 md:my-8 lg:my-12">
            <SharedHeading heading="Apply For Employee" />
          </div>
          <form
            className="flex flex-col items-center justify-center py-12 space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-center justify-between w-full gap-8 lg:flex-row">
              <div className="flex-1 w-full inputContainer">
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  name="user_name"
                  required
                  className="py-3 customInput"
                  type="name"
                />
                <label className="font-semibold inputLabel">NAME</label>
                <div className="inputUnderline"></div>
              </div>
              <div className="flex-1 w-full inputContainer">
                <input
                  defaultValue={user?.email}
                  readOnly
                  name="user_email"
                  required
                  className="py-3 customInput"
                  type="email"
                />
                <label className="font-semibold inputLabel">EMAIL</label>
                <div className="inputUnderline"></div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-8">
              <div className="flex flex-col flex-1">
                <label className="font-semibold">Select Your Company</label>
                <select
                  {...register("company", { required: true })}
                  className="flex-1 w-full select select-bordered"
                >
                  {checkedAgreements?.map((agreement, index) => (
                    <option key={index} value={agreement?.company}>
                      {agreement?.company}
                    </option>
                  ))}
                </select>
                {errors.company?.type === "required" && (
                  <p className="pt-1 text-left text-red-600">
                    Company is required
                  </p>
                )}
              </div>
              <div className="flex flex-col flex-1 text-xl">
                <label className="font-semibold">Upload Resume</label>
                <MultipleFileUploader setFile={setFile} />
              </div>
            </div>
            <button type="submit" className="but">
              <div className="font-medium but-top">Submit</div>
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
