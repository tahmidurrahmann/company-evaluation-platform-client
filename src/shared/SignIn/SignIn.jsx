import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// import animation from "../../assets/Animation - 1705910044429.json"
// import Lottie from "lottie-react";

const SignIn = () => {
  const { signIn, googleSignIn } = useContext(AuthContext)
  const location = useLocation()
  const navigation = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('Successfully toasted!')
        navigation(location?.state ? location.state : '/')
      })
      .catch(err => console.log(err))
  }
  const handleGoogle = (media) => {
    media()
      .then((res) => {
        console.log(res);
        navigation("/")
      })
      .catch()
  }
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mDDDHFQ/png-transparent-desktop-sky-blue-light-blue-blue-background-miscellaneous-blue-atmosphere.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* from control start */}
            <div className="md:w-[400px] min-h-screen mt-24">
              <div className="">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
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
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-white font-semibold">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                  <div>
                    <h1>or sign in using</h1>
                    <button onClick={() => handleGoogle(googleSignIn)} className=" btn btn-outline text-sky-500"><FaGoogle /></button>


                  </div>
                  <p className="text-center my-6">New To Doctors Cards <Link to={'/signUp'} className="underline text-orange-400 font-semibold">Sign Up</Link></p>
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
