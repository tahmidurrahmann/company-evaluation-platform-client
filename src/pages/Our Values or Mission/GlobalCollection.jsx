import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import { FaUserCheck } from "react-icons/fa";
import { TbArrowRotaryLeft } from "react-icons/tb";
import "./Global.css"

const GlobalCollection = () => {
  
  return (
    <div className="mt-10 md:mt-32 lg:mt-40 px-4  2xl:px-0 max-w-screen-2xl mx-auto">
     <div className="">
        <SharedHeading heading="INNOVATION UNLEASHED - TOGETHER " /> 
        <SharedHeading heading="WE THRIVE " />
     </div>
    


      <div className="flex lg:flex-row flex-col gap-0  md:gap-10">
        <div className="">
          <p className="mt-6 pb-6">Our mission is to empower organizations with the tools they need to thrive in a dynamic<br /> business landscape. Through cutting-edge evaluation methods and a commitment to excellence,<br /> we aim to foster innovation, elevate performance, and drive success for our clients.</p>
          <div>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="mb-16 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Discover More</p>
            </button>

              {/* animation button  */}

            <div className="absolute lg:top-0 md:top-[780px] top-[680px] lg:-bottom-[320px] lg:left-[80px]">
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3"></span>
              </span>

              {/* animation button  close*/}
            </div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box font-bold space-y-3">
                <div className="flex justify-between">
                  <FaUserCheck className="text-4xl text-[#007cc7]" />
                  <TbArrowRotaryLeft className="text-4xl text-[#007cc7]" />
                </div>
                <p className="text-2xl text-[#007cc7] font-bold text-center">More Info</p>
                <p className="font-medium">At IONE, we are dedicated to revolutionizing the way businesses evaluate and evolve. Our platform serves as a catalyst for progress, providing comprehensive solutions for performance assessment and continuous improvement. </p>
                <p className="font-medium">Discover a world-class evaluation platform designed to streamline your processes, uncover actionable insights, and propel your organization to new heights. Whether it's employee performance, project outcomes, or strategic initiatives, our platform offers a comprehensive suite of tools to assess, refine, and optimize.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="close"><span className="x text-white pl-4 hover:text-[#e62222]">Close</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <div className="relative  mb-12">
            <img className=" md:ml-12 shadow-xl rounded-xl" src="https://i.ibb.co/Hg0vmBs/image.png" alt="" />
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




