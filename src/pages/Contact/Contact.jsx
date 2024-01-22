import './Contact.css'

import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";

const Contact = () => {
    return (
        <div>
            <img className="w-full" src="https://i.ibb.co/7RCw46R/image.png" alt="" />
            {/* ------ first  section here ----- */}
            <div className='pt-20 mb-12 gap-12 p-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto'>
                <div className='bg-white border-2 shadow-2xl hover:bg-blue-300 rounded-xl relative pb-4'>
                    <FaLocationDot className='text-blue-400 text-7xl p-2 hover:bg-yellow-400 bg-gray-300 rounded-full absolute left-1/3 -top-10' />
                    <h1 className='text-2xl text-black text-center font-bold mb-1 pt-12'>Location</h1>
                    <p className='text-center text-gray-500'>3rd Avenue, 83 Manhattan <br /> Dhaka, Bangladesh</p>
                </div>
                {/* 2 --------- contact  */}
                <div className='bg-white border-2  shadow-2xl hover:bg-yellow-300   rounded-xl relative pb-4'>
                    <IoCallSharp className='text-yellow-300  text-7xl p-2 hover:bg-yellow-100 bg-gray-300 rounded-full absolute left-1/3 -top-10' />
                    <h1 className='text-2xl text-black text-center font-bold mb-1 pt-12'>Phones</h1>
                    <p className='text-center text-gray-500'>+8801882239828</p>
                    <p className='text-center text-gray-500'>+88017723527</p>
                </div>
                {/* 3 --------- contact  */}
                <div className='bg-white border-2 shadow-2xl hover:bg-orange-500  rounded-xl relative pb-4'>
                    <IoIosMailUnread className='text-orange-600  text-7xl p-3 hover:bg-yellow-400 bg-gray-300 rounded-full absolute left-1/3 -top-10' />
                    <h1 className='text-2xl text-black text-center font-bold mb-1 pt-12'>Email</h1>
                    <p className='text-center text-gray-500'>icon@gmail.com</p>
                    <p className='text-center text-gray-500'>xunaiet@gmail.com</p>
                </div>
            </div>
            {/* second section heree  */}
            <div className="flex lg:flex-row flex-col justify-center mb-12 gap-6 max-w-screen-2xl mx-auto">
                <div className='hover:border-blue-300  border-2' style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="550"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gulshan%202,%20dhaka+(iOne)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">Population calculator map</a>
                    </iframe>
                </div>
                <div className="bg-white  border-r-2 border-t-2 shadow-2xl hover:border-blue-400 lg:w-[950px]  h-[550px] rounded-lg">
                    <h1 className="text-3xl font-bold pt-8 text-center">Get In Touch</h1>
                    <div className="p-8">
                        <input type="email" name="" className="border  w-full p-4 hover:input-info rounded-xl mb-5 " placeholder="Your Email " id="" />
                        <input type="email" name="" className="border  w-full p-4 hover:input-info rounded-xl mb-5" placeholder="Your Name " id="" />
                        <textarea name="" placeholder="Enter your Text" className="w-full border mb-2 hover:input-info p-4 rounded-xl" id="" cols="20" rows="6"></textarea>
                        <button className="btn bn5 rounded-lg">
                            <img className="w-5" src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png" alt="" />Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;