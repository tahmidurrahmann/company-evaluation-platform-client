import aboutCompanyImg from "../../../assets/1.webp";
import HeaderText from "./HeaderText";
import SharedBanner from "../../../shared/SharedBanner/SharedBanner";

const ContactAbout = () => {
  return (
    <div>
      {/* Banner Section  */}

      <SharedBanner
        passage="About Us"
        heading="About Us"
        bannerImg="https://i.ibb.co/HHmxCL9/Untitled-design-1.png"
      />
      {/* About Company Section  */}
      <div className="container flex flex-col justify-between px-12 py-24 mx-auto space-y-6 md:flex-row lg:flex-row">
        {/* Image */}
        <div className="w-full md:w-[40%]">
          <img className="w-full " src={aboutCompanyImg} alt="" />
        </div>

        {/* Content */}
        <div className="w-full md:w-[40%] ">
          <HeaderText text={"ABOUT COMPANY"} />
          <h1
            className="text-2xl font-bold text-center text-black lg:text-5xl lg:text-start md:text-start"
            style={{ lineHeight: 1.2 }}
          >
            Discover all
            <br /> <span className="text-blue-500"> our features </span>
          </h1>
          <p className="mt-6 mb-10 text-sm font-medium text-center text-slate-600 lg:ml-0 md:ml-0 lg:text-start">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
          {/* Income increasing */}
          {/* Sales expansion */}
          <div className="ml-12 shadow-2xl stats lg:stats-horizontal lg:ml-0">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="text-blue-500 stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="text-orange-500 stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
