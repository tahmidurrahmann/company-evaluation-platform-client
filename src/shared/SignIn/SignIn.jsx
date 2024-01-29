import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SocialLogin from "../SocialLogin/SocialLogin";
// import animation from "../../assets/Animation - 1705910044429.json"
// import Lottie from "lottie-react";
import "./SignIn.css"

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
        <div className=" bg-black text-center text-black">
          <div className="w-full mx-auto ">

            {/* from control start */}
            <div className="md:w-full min-h-screen  ">
              <div className=" flex justify-center  items-center bg-container min-h-screen ">

                <div className="card bg-[#4a99ca2f] p-10 lg:fixed shrink-0 w-full max-w-lg shadow-2xl ">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        required
                        className="my-3"
                      />
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
                    </div>
                    <div className="form-control">
                      <input type="password" name="password" className="my-3" required />
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
                    </div>
                    <div className="form-control mt-6">
                      <button>Login</button>
                    </div>
                  </form>
                  <div className="flex justify-center gap-6 items-center">
                    <h1 className="text-white font-semibold">Or</h1>
                    <SocialLogin />
                  </div>
                  <p className="text-center my-6 text-white">New here? <Link to={'/signUp'} className="underline font-semibold text-white">Create a New Account</Link></p>
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
