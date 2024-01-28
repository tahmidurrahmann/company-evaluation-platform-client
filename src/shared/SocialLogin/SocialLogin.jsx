import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleGoogle = (media) => {
        media()
        .then(async (result) => {
          const user = result?.user;
          const email = user?.email;
          const name = user?.displayName;
          const role = "user";
          const image = user?.photoURL;
          const userInfo = { email, name, role, image }
          const res = await axiosPublic.post("/user", userInfo);
          console.log(res?.data);
          toast.success("Google Log in Successful");
          navigate(from, { replace: true });
      })
      .catch(error => {
          toast.error(error?.message);
      })
      }

    return (
        <div>
            <button onClick={() => handleGoogle(googleSignIn)} className="flex justify-center items-center gap-2">SIGN IN WITH <FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;