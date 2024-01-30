import SharedHeading from "../../shared/SharedHeading/SharedHeading";

const GlobalCollection = () => {
  return (
    <div className="mt-10 md:mt-32 lg:mt-40 px-4 2xl:px-0">
        <SharedHeading heading="INNOVATION UNLEASHED - TOGETHER WE THRIVE" />
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="space-y-2 text-neutral-500">
          <p className="mt-4">Our mission is to empower organizations with the tools they need to thrive in a dynamic business landscape. Through cutting-edge evaluation methods and a commitment to excellence, we aim to foster innovation, elevate performance, and drive success for our clients.</p> <p>At IONE, we are dedicated to revolutionizing the way businesses evaluate and evolve. Our platform serves as a catalyst for progress, providing comprehensive solutions for performance assessment and continuous improvement. </p><p>Discover a world-class evaluation platform designed to streamline your processes, uncover actionable insights, and propel your organization to new heights. Whether it's employee performance, project outcomes, or strategic initiatives, our platform offers a comprehensive suite of tools to assess, refine, and optimize.</p>
        </div>
        <div className="relative md:w-[330px]">
          <p className="w-56 border mt-10 md:mt-0 mr-36 px-9 py-14 bg-gradient-to-r from-[#007cc7] via-[#007bc7ce] to-[#007bc791] rounded-lg text-white font-medium">Empowering Growth through Insightful Evaluation</p>
          <span className="w-24 mt-5 md:mt-0 rounded-full p-5 absolute top-[-25px] right-11 bg-gradient-to-r from-[#007bc791] via-[#007bc7ce] to-[#007cc7] hover:shadow-[#007cc7] shadow-2xl text-white">Unlock Insights</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalCollection;




