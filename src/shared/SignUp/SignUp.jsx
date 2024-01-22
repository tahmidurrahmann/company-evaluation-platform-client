import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {

    const {createUser, googleSignIn}= useContext(AuthContext)
    const navigation = useNavigate()

    const handleSignUp=event=>{
        event.preventDefault()
        const from = event.target
        const name= from.name.value;
        const email = from.email.value;
        const password= from.password.value;

        console.log(name);
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(err=>console.log(err))

    }


    const handleGoogle =(media)=>{
      media()
      .then((res)=>{
          console.log(res);
          navigation("/")
      })
      .catch()
  }
    
   
    return (
        <div>
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mDDDHFQ/png-transparent-desktop-sky-blue-light-blue-blue-background-miscellaneous-blue-atmosphere.png)'}}>
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
          <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
      <div>
      <h1>or sign in using</h1>
    <button onClick={()=>handleGoogle(googleSignIn)} className=" btn btn-outline text-sky-500"><FaGoogle /></button>
   
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