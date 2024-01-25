import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SocialLogin from "../SocialLogin/SocialLogin";
// import animation from "../../assets/Animation - 1705910044429.json"
// import Lottie from "lottie-react";

const SignIn = () => {

  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault()
    const fromi = e.target;
    const email = fromi.email.value;
    const password = fromi.password.value;
    signIn(email, password)
      .then(() => {
        toast.success('Your Login Successful')
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error?.message)
      })
  }

  return (
    <div>
      <Helmet>
        <title>IONE | SignIn</title>
      </Helmet>
      <div className=" min-h-screen" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" bg-black text-center text-neutral-content">
          <div className="w-full mx-auto ">

            {/* from control start */}
            <div className="md:w-full min-h-screen  ">
              <div className=" flex justify-center  items-center bg-container min-h-screen ">
                <div className="w-full min-h-screen hidden lg:flex lg:flex-wrap  h-[100vh] ">
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

                <div className="card bg-[#4a99ca2f] p-10 lg:fixed shrink-0 w-full max-w-sm shadow-2xl ">
                  <form onSubmit={handleLogin} className="card-body">



                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white font-semibold">Email</span>
                      </label>
                      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white font-semibold">Password</span>
                      </label>
                      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                  <div>
                    <h1>or sign in using</h1>
                    <SocialLogin />
                  </div>
                  <p className="text-center my-6">New To IONE <Link to={'/signUp'} className="underline text-orange-400 font-semibold">Sign Up</Link></p>
                </div>
              </div>
            </div>
            {/* from control end  */}
          </div>
        </div>
      </div>
      {/* <Lottie animationData={animation} loop={true} /> */}
    </div>
  );
}
export default SignIn;
