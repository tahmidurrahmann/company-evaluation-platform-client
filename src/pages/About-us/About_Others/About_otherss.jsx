import { Link } from "react-router-dom";

const About_otherss = () => {

  return (
    <div className="mb-32 pt-12 max-w-screen-xl mx-auto">
      <div data-aos="fade-down"
        data-aos-duration="2000">
        <h1 className="text-5xl text-center font-bold">
          Keeping the principles to{" "}
        </h1>
        <p className="text-5xl text-center font-bold ">
          support your <span className="text-blue-500">enterprise</span>
        </p>
   </div>
      <div className="flex flex-col-reverse md:flex-row items-center px-6 justify-evenly mt-12">
        <div className="mt-20 space-y-5" data-aos="fade-down"
          data-aos-duration="2000">
          <h1 className="text-4xl font-bold text-blue-500">Team Work</h1>
          <p className="text-xl">
            Unified by expertise, our IT evaluation platform <br />
            thrives on seamless teamwork, transforming <br /> visions into
            impactful solutions with collaborative
            <br /> precision and shared dedication.
          </p>
          <div className="flex justify-start">
            <Link to={`/applyForEmployee`}><button className="but">
              <div className="but-top font-medium">Join</div>
              <div className="but-bottom"></div>
              <div className="but-base"></div>
            </button></Link>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="1000">
          <img
            className="w-[700px] shadow-2xl rounded-lg "
            src="https://i.ibb.co/PhbD5yC/image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About_otherss;
