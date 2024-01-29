import aboutCompanyImg from "../../../assets/1.webp";
import HeaderText from "./HeaderText";
import SharedBanner from "../../../shared/SharedBanner/SharedBanner";

const ContactAbout = () => {
  return (
    <div>
      {/* Banner Section  */}
      <SharedBanner  passage="About Us" heading="About Us"/>
      {/* About Company Section  */}
      <div className="container mx-auto py-24 px-12 flex flex-col md:flex-row lg:flex-row justify-between space-y-6">
        {/* Image */}
        <div className="w-full md:w-[40%]">
          <img className="w-full" src={aboutCompanyImg} alt="" />
        </div>

        {/* Content */}
        <div className="w-full md:w-[40%] ">
          <HeaderText text={"ABOUT COMPANY"} />
          <h1
            className="text-2xl lg:text-5xl font-bold text-black lg:text-start md:text-start text-center"
            style={{ lineHeight: 1.2 }}
          >
            We,r making
            <br /> <span className="text-amber-700">a new way </span>
            to do
            <br />
            business.
          </h1>
          <p className="font-medium text-sm text-slate-600 mt-6 mb-10 lg:ml-0 md:ml-0 lg:text-start text-center">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p>
          {/* Income increasing */}
          {/* Sales expansion */}
          <div className="stats lg:stats-horizontal shadow ml-12 lg:ml-0 ">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value text-primary">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value text-secondary">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
