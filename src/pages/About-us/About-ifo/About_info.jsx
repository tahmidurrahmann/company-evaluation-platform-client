import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const About_info = () => {
  return (
    <div className="px-6 2xl:px-0">
      <div className="mb-12">
        <h1 className="font-bold text-2xl text-center mb-2 uppercase pt-16">
          Our Team
        </h1>
        <h1 className="text-5xl text-center font-bold">
          {" "}
          Meet the <span className="text-[#007cc7] "> Professionals</span>{" "}
        </h1>
      </div>
      <div className="mb-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1  gap-5 max-w-screen-2xl mx-auto">
        <div className="card h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="pt-16"
              src="https://i.ibb.co/yQHmvHb/269034815-4815092578569776-4099100454712139417-n-removebg-preview.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" font-bold text-xl text-[#007cc7]  italic text-center">
              Xunaiet faruk
            </h2>
            <p className="tex-xl font-semibold text-center text-[#007cc7] mb-2">
              Designer
            </p>
            <div className="flex justify-evenly items-center text-3xl">
              <FaLinkedin className="text-[#007cc7]" />
              <FaInstagram className="text-red-600" />
              <FaFacebook className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* card 2   ------------ */}

        <div className="card h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/chBXTPn/270224004-3140648616261730-993033304660391605-n-1-removebg-preview.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" font-bold text-xl text-[#007cc7] italic  text-center">
              Tahmidur Rahman
            </h2>
            <p className="tex-xl font-semibold text-center text-[#007cc7] mb-2">
              Developer
            </p>
            <div className="flex justify-evenly items-center text-3xl">
              <FaLinkedin className="text-[#007cc7]" />
              <FaInstagram className="text-red-600" />
              <FaFacebook className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* card 3 -------- */}

        <div className="card  h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[270px]"
              src="https://i.ibb.co/sgNvfhC/Whats-App-Image-2024-02-15-at-01-41-40-b00caa2a-removebg-preview.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" font-bold text-xl text-[#007cc7] italic text-center ">
              Maksudur Rahaman
            </h2>
            <p className="tex-xl font-semibold text-center text-[#007cc7] mb-2">
              Support specialist
            </p>
            <div className="flex justify-evenly items-center text-3xl">
              <FaLinkedin className="text-[#007cc7]" />
              <FaInstagram className="text-red-600" />
              <FaFacebook className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* card 4 -------- */}

        <div className="card  h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[270px]"
              src="https://i.ibb.co/BVMdpjy/308540762-1251268122080728-4126493506797164157-n-removebg-preview.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" font-bold text-xl text-[#007cc7] italic text-center ">
              Samrat Ahammed
            </h2>
            <p className="tex-xl font-semibold text-center text-[#007cc7] mb-2">
              Co-founder
            </p>

            <div className="flex justify-evenly items-center text-3xl">
              <FaLinkedin className="text-[#007cc7]" />
              <FaInstagram className="text-red-600" />
              <FaFacebook className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_info;
