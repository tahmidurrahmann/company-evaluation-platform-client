import "./SignUp.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const SignUp = () => {

  const { createUser } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();

  const handleSignUp = async (event) => {
    event.preventDefault()
    const from = event.target
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value.split("\\");
    const fileName = photo[photo.length - 1];
    const photoObj = { image: fileName }
    const uploadImage = await axiosPublic.post(apiURL, photoObj, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    console.log(uploadImage, name);
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Helmet>
        <title>IONE | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mDDDHFQ/png-transparent-desktop-sky-blue-light-blue-blue-background-miscellaneous-blue-atmosphere.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">

            {/* from control start */}
            <div className="md:w-[400px] min-h-screen mt-24 ">
              <div className="">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-">
                  <form onSubmit={handleSignUp} className="card-body">

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="Name" className="input input-bordered text-black" required />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                    </div>
                    <div className="input-div mt-4 py-1">
                      <input className="inputu" name="photo" type="file" />
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