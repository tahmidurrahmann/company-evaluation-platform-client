import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import { FaUserCheck } from "react-icons/fa";
import { TbArrowRotaryLeft } from "react-icons/tb";

const GlobalCollection = () => {
  return (
    <div className="mt-10 md:mt-32 lg:mt-40 px-4 2xl:px-0 max-w-screen-2xl mx-auto">
      <SharedHeading heading="INNOVATION UNLEASHED - TOGETHER " />
      <SharedHeading heading="WE THRIVE " />

      <div className="flex lg:flex-row flex-col gap-0 md:gap-10">
        <div className="">
          <p className="mt-6 pb-6">Our mission is to empower organizations with the tools they need to thrive in a dynamic<br /> business landscape. Through cutting-edge evaluation methods and a commitment to excellence,<br /> we aim to foster innovation, elevate performance, and drive success for our clients.</p>
          <div>
            <button className="px-8  mb-20" onClick={() => document.getElementById('my_modal_1').showModal()}>SEE more</button>

            {/* animation button  */}

            <div className="absolute lg:top-0 md:top-[780px] top-[680px] lg:-bottom-[320px] lg:left-[80px]">
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3"></span>
              </span>

              {/* animation button  close*/}
            </div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-blue-100 font-bold space-y-3">
                <div className="flex justify-between">
                  <FaUserCheck className="text-4xl text-orange-500 " />
                  <TbArrowRotaryLeft className="text-4xl text-orange-500 " />
                </div>
                <p className="text-2xl text-blue-500 font-bold text-center">More Info</p>
                <p className="">At IONE, we are dedicated to revolutionizing the way businesses evaluate and evolve. Our platform serves as a catalyst for progress, providing comprehensive solutions for performance assessment and continuous improvement. </p>
                <p>Discover a world-class evaluation platform designed to streamline your processes, uncover actionable insights, and propel your organization to new heights. Whether it's employee performance, project outcomes, or strategic initiatives, our platform offers a comprehensive suite of tools to assess, refine, and optimize.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="text-white">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <div className="relative  mb-12">
            <img className="bg-gray-200 md:ml-12 shadow-xl" src="https://i.ibb.co/X5b33fs/image-removebg-preview-36.png" alt="" />
          </div>
          {/* <div className="absolute lg:-bottom-[220px] md:-bottom-[990px] -bottom-[750px] left-[220px] md:left-[415px] lg:left-[1125px] shadow-xl lg:right-8">

            <div className="lg:bg-orange-300 bg-blue-300 lg:w-[250px]  md:w-[260px] w-[200px] h-[150px] rounded-xl">
              <h1 className="lg:text-xl text-sm font-bold text-white pl-4 lg:pt-2 md:pt-7 pt-5">Take Full Advantage Of The Digital Tools That Your Organization Is Already Using</h1>
              <div className="flex gap-2 text-orange-700 items-center pl-4 mt-1">
                <MdMarkEmailRead />
                <h1 className="text-sm text-orange-700 font-bold">ICON@gmail.com </h1>

              </div>

            </div>

          </div> */}
          {/* <div className="absolute lg:-bottom-[550px] md:-bottom-[620px]  -bottom-[490px] lg:left-[1125px] md:left-[415px]  lg:right-8">

            <img className="shadow-2xl lg:w-[250px] md:w-[260px]  w-[200px] rounded-xl" src="https://i.ibb.co/m8zg2x7/image.png" alt="" />



          </div> */}


        </div>
      </div>
    </div>
  );
};

export default GlobalCollection;




