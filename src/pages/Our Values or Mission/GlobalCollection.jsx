import { Link } from "react-router-dom";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import { FaUserCheck } from "react-icons/fa";
import { TbArrowRotaryLeft } from "react-icons/tb";
import { MdMarkEmailRead } from "react-icons/md";

const GlobalCollection = () => {
  return (
    <div className="mt-10 md:mt-32 lg:mt-40 px-4 2xl:px-0">
        <SharedHeading heading="INNOVATION UNLEASHED - TOGETHER " />
      <SharedHeading heading="WE THRIVE " />
      {/* <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="space-y-2 text-neutral-500">
          <p className="mt-4">Our mission is to empower organizations with the tools they need to thrive in a dynamic business landscape. Through cutting-edge evaluation methods and a commitment to excellence, we aim to foster innovation, elevate performance, and drive success for our clients.</p> <p>At IONE, we are dedicated to revolutionizing the way businesses evaluate and evolve. Our platform serves as a catalyst for progress, providing comprehensive solutions for performance assessment and continuous improvement. </p><p>Discover a world-class evaluation platform designed to streamline your processes, uncover actionable insights, and propel your organization to new heights. Whether it's employee performance, project outcomes, or strategic initiatives, our platform offers a comprehensive suite of tools to assess, refine, and optimize.</p>
        </div>
        <div className=" ">
          <img className="border w-[500px] mt-10 md:mt-0 mr-36 px-9 py-14 bg-orange-500  rounded-lg text-white font-medium" src="https://i.ibb.co/X5b33fs/image-removebg-preview-36.png" alt="" /> 
        </div>
      </div> */}

      <div className="flex gap-10 ">
        <div className="">
          <p className="mt-6 pb-6">Our mission is to empower organizations with the tools they need to thrive in a dynamic<br/> business landscape. Through cutting-edge evaluation methods and a commitment to excellence,<br/> we aim to foster innovation, elevate performance, and drive success for our clients.</p>
           
       
         

          <div>


          
              <Link className="btn px-8 hover:bg-blue-300" onClick={() => document.getElementById('my_modal_1').showModal()}>Lets more</Link>
             <div className="absolute -bottom-[320px] left-[80px]">
              <span className="relative flex h-7 w-7">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
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
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-white">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
          </div>
    
        </div>

        <div>
        <div className="relative">

            <img className="bg-gray-200 shadow-xl" src="https://i.ibb.co/X5b33fs/image-removebg-preview-36.png" alt="" />



        </div>   

          <div className="absolute -bottom-[250px] right-8">
          
          <div className="bg-orange-300 w-[250px] h-[150px] rounded-xl">
              <h1 className="text-xl font-bold text-white pl-4 pt-2 ">Take Full Advantage Of The Digital Tools That Your Organization Is Already Using</h1>
            <div className="flex gap-2 text-orange-700 items-center pl-4 mt-1">
                <MdMarkEmailRead />
                 <h1 className="text-sm text-orange-700 font-bold">ICON@gmail.com </h1>

              </div>
           
          </div>
          
          </div>   
          <div className="absolute -bottom-[550px]  right-8">
          
            <img className="w-60 rounded-xl" src="https://i.ibb.co/m8zg2x7/image.png" alt="" />
           

          
          </div>   


        </div>
      </div>
    </div>
  );
};

export default GlobalCollection;




