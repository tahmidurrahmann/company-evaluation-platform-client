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
      <div className="mb-10 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  gap-5 max-w-screen-2xl mx-auto">
        <div className="card h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="pt-16"
              src="https://i.ibb.co/qBwTVmg/image.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
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

        <div className="card  h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[280px]"
              src="https://i.ibb.co/5jMbfRd/image.png"
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
              src="https://i.ibb.co/7WLmbG0/image.png"
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
              src="https://i.ibb.co/c1N6Grn/image.png"
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
        {/* card 5 -------- */}

        <div className="card  h-[500px] border-2 border-blue-500 hover:shadow-blue-600 card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[270px]"
              src="https://i.ibb.co/cbvnv9v/image.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className=" font-bold text-xl text-[#007cc7] italic text-center ">
              Akter Hossen
            </h2>
            <p className="tex-xl font-semibold text-center text-[#007cc7] mb-2">
              System architect
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
