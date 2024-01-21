import { Link } from "react-router-dom";
import aboutCompanyImg from "../../../assets/1.webp";
import HeaderText from "./HeaderText";
import { FaAngleDoubleRight } from "react-icons/fa";

const ContactAbout = () => {
  return (
    <div className="container mx-auto mb-20">
      {/* Banner Section  */}
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/y4QZGGN/image.png)' }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-3 text-7xl text-white font-bold">Welcome </h1>
            <p className="mb-5 text-white">Our platform is a catalyst for innovation, collaboration, and growth in the ever-evolving tech landscape.</p>
           <div className="flex gap-3 jus items-center justify-center text-xl  text-blue-400">
              <Link to={'/'} className="">Home  </Link>
              <FaAngleDoubleRight />
              <Link className="text-white" to={'/aboutUs'}>About us</Link>
           </div>
          </div>
        </div>
      </div>
      {/* About Company Section  */}
      <div className="py-24 px-12 flex flex-col md:flex-row lg:flex-row justify-between space-y-6">
        {/* Image */}
        <div className="w-full md:w-[40%]">
          <img className="w-full " src={aboutCompanyImg} alt="" />
        </div>

        {/* Content */}
        <div className="w-full md:w-[40%] ">
          <HeaderText text={"ABOUT COMPANY"} />
          <h1
            className="text-2xl lg:text-5xl font-bold text-black lg:text-start md:text-start text-center"
            style={{ lineHeight: 1.2 }}
          >
            Discover all 
            <br /> <span className="text-yellow-400"> our features </span>
          
            
          </h1>
          <p className="font-medium text-sm text-slate-600 mt-6 mb-10 lg:ml-0 md:ml-0 lg:text-start text-center">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
          {/* Income increasing */}
          {/* Sales expansion */}
          <div className="stats lg:stats-horizontal ml-12 lg:ml-0 shadow-2xl">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value text-blue-500">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value text-yellow-500">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
