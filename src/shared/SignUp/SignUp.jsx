import "./SignUp.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const SignUp = () => {

  const authInfo = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  let from = location.state?.from?.pathname || "/";

  const {
    register, handleSubmit, formState: { errors } } = useForm()

  if (!authInfo) {
    return [undefined, true];
  }

  const { createUser } = authInfo;

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

  return (
    <div>
      <Helmet>
        <title>IONE | SignUp</title>
      </Helmet>
      <div className=" min-h-screen" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" bg-black h-[100vh] text-center text-neutral-content">
          <div className="w-full mx-auto ">
            {/* from control start */}
            <div className="md:w-full h-[100vh]">
              <div className=" flex justify-center  items-center bg-container h-[100vh]">
                <div className="card bg-[#4a99ca2f] p-10 lg:fixed shrink-0 w-full max-w-lg shadow-2xl ">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                      <input {...register("name", { required: true })} type="text" required />
                      <label>
                        <span className="text-white" style={{ transitionDelay: '0ms' }}>Y</span>
                        <span className="text-white" style={{ transitionDelay: '50ms' }}>o</span>
                        <span className="text-white" style={{ transitionDelay: '100ms' }}>u</span>
                        <span className="text-white pr-2" style={{ transitionDelay: '150ms' }}>r</span>
                        <span className="text-white" style={{ transitionDelay: '200ms' }}>N</span>
                        <span className="text-white" style={{ transitionDelay: '250ms' }}>a</span>
                        <span className="text-white" style={{ transitionDelay: '300ms' }}>m</span>
                        <span className="text-white" style={{ transitionDelay: '350ms' }}>e</span>
                      </label>
                      {errors.name?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Name is required</p>
                      )}
                    </div>

                    <div className="form-control">
                      <input {...register("email", { required: true })} name="email" required />
                      <label>
                        <span style={{ transitionDelay: '0ms' }}>E</span>
                        <span style={{ transitionDelay: '50ms' }}>m</span>
                        <span style={{ transitionDelay: '100ms' }}>a</span>
                        <span style={{ transitionDelay: '150ms' }}>i</span>
                        <span className="pr-2" style={{ transitionDelay: '200ms' }}>l</span>
                        <span style={{ transitionDelay: '250ms' }}>A</span>
                        <span style={{ transitionDelay: '300ms' }}>d</span>
                        <span style={{ transitionDelay: '350ms' }}>d</span>
                        <span style={{ transitionDelay: '400ms' }}>r</span>
                        <span style={{ transitionDelay: '450ms' }}>e</span>
                        <span style={{ transitionDelay: '500ms' }}>s</span>
                        <span style={{ transitionDelay: '550ms' }}>s</span>
                      </label>
                      {errors.email?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Email is required</p>
                      )}
                    </div>

                    <div className="form-control">
                      <input {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&?])[a-zA-Z0-9!#$%&?]+$/ })} type="password" required />
                      <label>
                        <span style={{ transitionDelay: '0ms' }}>P</span>
                        <span style={{ transitionDelay: '50ms' }}>a</span>
                        <span style={{ transitionDelay: '100ms' }}>s</span>
                        <span style={{ transitionDelay: '150ms' }}>s</span>
                        <span style={{ transitionDelay: '200ms' }}>w</span>
                        <span style={{ transitionDelay: '250ms' }}>o</span>
                        <span style={{ transitionDelay: '300ms' }}>r</span>
                        <span style={{ transitionDelay: '350ms' }}>d</span>
                      </label>
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
                    <div className="mt-4 py-1">
                      <input {...register("photo", { required: true })} className="file-input w-full" type="file" />
                      {errors.photo?.type === "required" && (
                        <p className="text-red-600 text-left pt-1">Photo is required.</p>
                      )}
                    </div>
                    <div className="form-control">
                      <button className="py-2 bg-[#007cc7] rounded-full text-white font-medium hover:scale-105 transition">Sign Up</button>
                    </div>
                  </form>
                  <SocialLogin />
                  <p className="text-center my-6">Already have an account? <Link to={'/signIn'} className="underline font-semibold text-white">Please Login</Link></p>

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