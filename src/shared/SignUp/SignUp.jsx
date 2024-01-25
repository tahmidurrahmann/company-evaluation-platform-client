import "./SignUp.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const SignUp = () => {

  const { createUser } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const {
    register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo[0];
    const photoObj = { image: photo }
    const uploadImage = await axiosPublic.post(apiURL, photoObj, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    const imageURL = uploadImage?.data?.data?.display_url;
    createUser(email, password)
      .then(result => {
        const user = result?.user;
        updateProfile(user, {
          displayName: name, photoURL: imageURL,
        }).then(async () => {
          toast.success("Your Registration Successful");
          const email = user?.email;
          const name = user?.displayName;
          const role = "user";
          const image = imageURL;
          const registerInfo = { email, name, role, image };
          const res = await axiosSecure.post("/user", registerInfo);
          console.log(res?.data);
          navigate(from, { replace: true });
        })
          .catch((error) => {
            toast.error(error?.message)
          })
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }

  // const handleSignUp = async (event) => {
  //   event.preventDefault()
  //   const from = event.target
  //   const name = from.name.value;
  //   const email = from.email.value;
  //   const password = from.password.value;
  //   const photo = from.photo.value.split("\\");
  //   const fileName = photo[photo.length - 1];
  // const photoObj = { image: fileName }
  // const uploadImage = await axiosPublic.post(apiURL, photoObj, {
  //   headers: {
  //     "content-type": "multipart/form-data",
  //   }
  // })
  //   console.log(uploadImage, name);
  //   createUser(email, password)
  //     .then(result => {
  //       console.log(result.user);
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <div>
      <Helmet>
        <title>IONE | SignUp</title>
      </Helmet>
      <div className=" min-h-screen" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" bg-black text-center text-neutral-content">
          <div className="w-full mx-auto">

            {/* from control start */}
            <div className="md:w-full min-h-screen ">
              <div className=" flex justify-center items-center bg-container min-h-screen ">
                <div className="w-full h-full  flex flex-wrap ">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>

                <div className="card fixed shrink-0 w-full max-w-sm shadow-2xl ">
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input {...register("name", { required: true })} type="text" placeholder="Your Full Name" className="input input-bordered text-black" />
                      {errors.name?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Name is required</p>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input {...register("email", { required: true })} type="email" placeholder="Your Email Address" className="input input-bordered" />
                      {errors.email?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Email is required</p>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&?])[a-zA-Z0-9!#$%&?]+$/ })} type="password" placeholder="Your Password" className="input input-bordered text-black" />
                      {errors.password?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Password is required</p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="text-red-600 text-left pt-1">Your Password should not more than 20 Characters.</p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600 text-left pt-1">Your Password should have more than 7 Characters.</p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600 text-left pt-1">Your Password should have one uppercase, one lowercase, one special character and one digit.</p>
                      )}
                    </div>
                    <div className="input-div mt-4 py-1">
                      <input {...register("photo", { required: true })} className="inputu" type="file" />
                      {errors.photo?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Photo is required.</p>
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                        className="icon"
                      >
                        <polyline points="16 16 12 12 8 16"></polyline>
                        <line y2="21" x2="12" y1="12" x1="12"></line>
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                        <polyline points="16 16 12 12 8 16"></polyline>
                      </svg>
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary">SignUp</button>
                    </div>
                  </form>
                  <div>
                    <h1>or sign in using</h1>
                    <SocialLogin />
                  </div>
                  <p className="text-center my-6">Already have an account <Link to={'/signIn'} className="underline text-orange-400 font-semibold">Please Login</Link></p>

                </div>
              </div>
            </div>
            {/* from control end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;