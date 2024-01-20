import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";


const About_valus = () => {
    return (
        <div className="mb-20">
          <div className="">
                <h1 className="font-bold text-2xl lg:ml-2 lg:text-start text-center mb-2 uppercase">OUR VALUES</h1>
                <h1 className="text-5xl lg:ml-2 lg:text-start text-center mb-12 font-bold">Completely disintermediate <br /><span className="text-[#007cc7] ">excellent skills</span></h1>
          </div>
          <div className="grid mt-9 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto">
            <div>
                {/* 1 hellow */}
                <div className="bg-base-100 shadow-2xl hover:shadow-blue-500 lg:w-96 w-80 ml-12 lg:ml-0 h-80 rounded-xl">
                        <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/icon-6-3.png" alt="" />
                        <h1 className="text-[#007cc7] font-bold text-xl ml-8">Our mission</h1>
                        <p className="ml-8 text-gray-400">our vision is to cultivate a world where every individual and organization excels by embracing <br/>a culture of continuous improvement thank you so much</p>
                        <div className="flex items-center gap-2">
                            <Link to={'/'} className="text-red-600 italic underline ml-8 ">Learn More </Link>
                            <FaArrowRight  className="mt-1 text-red-600 underline"/>
                            

                        </div>
                </div>
            </div>

            <div>
                {/* 2 hellow */}
                    <div className="bg-base-100 shadow-2xl lg:w-96 w-80 ml-12 lg:ml-0 hover:shadow-blue-500 h-80 rounded-xl">
                        <img src="https://i.ibb.co/WHGTW4q/icon-7-1.webp" alt="" />
                        <h1 className="text-[#007cc7] font-bold text-xl ml-8">Our mission</h1>
                        <p className="ml-8 text-gray-400">our mission is to empower individuals and organizations to reach their fullest potential through comprehensive performance evaluation solutions.</p>
                        <div className="flex items-center gap-2">
                            <Link to={'/'} className="text-red-600 italic underline ml-8 ">Learn More </Link>
                            <FaArrowRight className="mt-1 text-red-600 underline" />

                        </div>
                    </div>

            </div>
                {/* 3 hellow  */}
            <div className=" ml-10">
               
                   <div className="flex gap-5">
                    <IoMdArrowDropright className="text-3xl mt-1 text-purple-600"/>
                        <p className="text-2xl font-bold">Fresh ideas</p>
                       
                   </div>
                    <p className="ml-12 mb-7">Temporibus autem quibusdam officiis <br/> debitis aut rerum necessitatibus.</p>
                  
                   <div className="flex gap-5">
                    <IoMdArrowDropright className="text-3xl mt-1 text-green-600"/>
                        <p className="text-2xl font-bold">Quality result</p>
                       
                   </div>
                    <p className="ml-12 mb-7">Our dedication to precision and innovation sets us apart, ensuring satisfaction and success for all our endeavors</p>
                  
                  
                   <div className="flex gap-5">
                    <IoMdArrowDropright className="text-3xl mt-1 text-orange-600"/>
                        <p className="text-2xl font-bold">Reliable support</p>
                       
                   </div>
                    <p className="ml-12">Your peace of mind is our priority, and we're here to deliver consistent and dependable support whenever you need it</p>

            </div>
          </div>
        </div>
    );
};

export default About_valus;