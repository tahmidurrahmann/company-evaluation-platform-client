import bannerImage from "../../../assets/2.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import aboutCompanyImg from "../../../assets/1.webp";
import AboutTitle from "./AboutTitle";
import HeaderText from "./HeaderText";

const ContactAbout = () => {
  return (
    <div className="container mx-auto mb-80">
      {/* Banner Section  */}
      <div className="bg-sky-500 relative h-[450px] py-24 px-12 mb-[150px]">
        <div className="flex justify-between mt-[20px]">
          <div className="flex flex-col justify-between px-6">
            {/* Title  */}
            <div>
              <h3
                className="uppercase text-2xl font-bold mb-7 text-purple-800"
                style={{ letterSpacing: "2px" }}
              >
                About Us
              </h3>

              {/* About title component  */}
              <AboutTitle
                firstText={"We,r making "}
                secText={"a new way"}
                thirdText={" to do "}
                forthText={" business."}
                lineHeight={"1.2"}
              />
            </div>
            <div>
              <button className="btn bg-amber-700 text-white text-xl flex justify-center">
                Contact us
                <FaArrowCircleRight />
              </button>
            </div>
          </div>
          <div className="w-3/5">
            {/* image */}
            <img className="w-full" src={bannerImage} alt="" />
          </div>
        </div>
      </div>

      {/* About Company Section  */}
      <div className="py-24 px-12 flex justify-between">
        {/* Image  */}
        <div className="w-1/2">
          <img className="w-3/4" src={aboutCompanyImg} alt="" />
        </div>

        {/* content  */}

        <div className="w-1/2">
          <HeaderText text={"ABOUT COMPANY"} />
          <AboutTitle
            colr={"text-black"}
            firstText="Overview of your"
            secText={" progress and tasks"}
            thirdText={""}
            lineHeight={"1.2"}
          />
          <p className="font-medium text-sm text-slate-600 mt-6 mb-10 ">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
          <div>
            <div className="flex bg-white rounded-lg shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Income increasing</div>
                <div className="stat-value">31K</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Sales expansion</div>
                <div className="stat-value text-secondary">4,200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-900">
        <div className="">
          <h4
            className="text-white text-xl uppercase font-semibold mb-7"
            style={{ letterSpacing: "2px" }}
          >
            OUR TEM
          </h4>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
