import { useForm } from "react-hook-form";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import "../Home/Banner/custom.css";
import useAgreement from "../../hooks/useAgreement";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const ApplyForHr = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [, , refetch] = useAgreement();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
      },
    });
    const imageURL = uploadImage?.data?.data?.display_url;
    const formDetails = {
      company,
      imageURL,
      role,
      name,
      email,
      location,
      yearFounded,
      industrySector,
      companySize,
    };
    const res = await axiosSecure.post("/formDetails", formDetails);
    if (res?.data?.insertedId) {
      toast.success("Your Form Submitted");
      refetch();
      reset();
    } else {
      toast.error("You Cannot Post Twice");
      reset();
    }
  };

  return (
    <div>
      <SharedBanner
        bannerImg="https://i.ibb.co/589jCVQ/image.png"
        passage="Apply For Human Resource"
        heading="Apply For Human Resource"
      />

      <div className="px-6 mx-auto max-w-screen-2xl xl:px-0">
        <div className="my-6 md:my-8 lg:my-12">
          <SharedHeading heading="Apply For Human Resource" />
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
          <div className="flex flex-col items-center justify-between w-full gap-8 lg:flex-row">
            <div className="flex-1 w-full inputContainer">
              <input
                {...register("company", { required: true })}
                required
                className="py-3 customInput"
                type="name"
              />
              <label className="font-semibold inputLabel">COMPANY NAME</label>
              <div className="inputUnderline"></div>
            </div>
            {errors.company?.type === "required" && (
              <p className="text-left text-red-600">Name is required</p>
            )}
            <div className="flex-1 w-full inputContainer">
              <input
                {...register("location", { required: true })}
                required
                className="py-3 customInput"
                type="text"
              />
              <label className="font-semibold inputLabel">
                COMPANY LOCATION
              </label>
              <div className="inputUnderline"></div>
            </div>
            {errors.location?.type === "required" && (
              <p className="text-left text-red-600">Location is required</p>
            )}
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-8 lg:flex-row">
            <div className="flex-1 w-full inputContainer">
              <input
                {...register("industrySector", { required: true })}
                required
                className="py-3 customInput"
                type="text"
              />
              <label className="font-semibold inputLabel">
                Industry Sector
              </label>
              <div className="inputUnderline"></div>
            </div>
            {errors.industrySector?.type === "required" && (
              <p className="text-left text-red-600">
                Industry Sector is required
              </p>
            )}
            <div className="flex-1 w-full inputContainer">
              <input
                {...register("yearFounded", { required: true })}
                required
                className="py-3 customInput"
                type="month"
              />
              <label className="font-semibold inputLabel">Year Founded</label>
              <div className="inputUnderline"></div>
            </div>
            {errors.yearFounded?.type === "required" && (
              <p className="text-left text-red-600">Year Founded is required</p>
            )}
          </div>
          <div className="flex items-center justify-between w-full gap-2 md:gap-8">
            <div className="flex flex-col flex-1">
              <label className="font-semibold">Company Size</label>
              <select
                {...register("companySize", { required: true })}
                className="flex-1 w-full select select-bordered"
              >
                <option disabled selected>
                  Company Size
                </option>
                <option value="Less Than 10 Employee">
                  Less Than 10 Employee
                </option>
                <option value="10 ~ 50 Employee">10 ~ 50 Employee</option>
                <option value="50 ~ 200 Employee">50 ~ 200 Employee</option>
                <option value="200 ~ 500 Employee">200 ~ 500 Employee</option>
                <option value="500 ~ 2000 Employee">500 ~ 2000 Employee</option>
                <option value="More Than 2000 Employee">
                  More Than 2000 Employee
                </option>
              </select>
            </div>
            {errors.companySize?.type === "required" && (
              <p className="pt-1 text-left text-red-600">
                Company Size is required
              </p>
            )}
            <div className="flex flex-col flex-1 h-[72px]">
              <label className="font-semibold">Choose Company Photo</label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="flex-1 w-full file-input file-input-bordered"
              />
            </div>
            {errors.photo?.type === "required" && (
              <p className="pt-1 text-left text-red-600">Photo is required</p>
            )}
          </div>
          <br />
          <button type="submit" className="but">
            <div className="font-medium but-top">Submit</div>
            <div className="but-bottom"></div>
            <div className="but-base"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForHr;
