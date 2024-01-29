import './Contact.css'
import emailjs from '@emailjs/browser';
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useRef } from 'react';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1g9pr3n', 'template_sbprd1h', form.current, 'kM2ZZ-I4QiQPp3W81')
            .then((result) => {
                if (result.text) {
                    toast.success('Successfully sended your message!')
                }
            }, (error) => {
                toast.error(error.text);
            });
    };

    return (
        <div>
            <Helmet>
                <title>IONE | Contact</title>
            </Helmet>
            <SharedBanner heading="Contact Us" passage="Contact Us"/>
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
            <div className="flex lg:flex-row flex-col-reverse justify-center mb-12 gap-6 max-w-screen-2xl mx-auto">

                <div className='flex-1' style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Level-4,%2034,%20Awal%20Centre,%20Banani,%20Dhaka+(IONE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">Calculate population in area</a>
                    </iframe>
                </div>

                <form ref={form} onSubmit={sendEmail} className="mt-4 p-6 form-container rounded-lg flex-1 mx-4 2xl:mx-0">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="input-container flex-1 w-full">
                            <input className="py-1.5" required id="input" type="text" name="user_name" />
                            <label className="label -my-2" htmlFor="input">Your Name</label>
                            <div className="underline"></div>
                        </div>
                        <div className="input-container flex-1 w-full">
                            <input className="py-1.5" required id="input" type="email" name="user_email" />
                            <label className="label -my-2" htmlFor="input">Your Email Address</label>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="input-container flex-1 w-full">
                            <input className="py-1.5" required id="input" type="text" name="subject" />
                            <label className="label -my-2" htmlFor="input">Subject Field</label>
                            <div className="underline"></div>
                        </div>
                        <div className="input-container flex-1 w-full">
                            <input className="py-1.5" required id="input" type="number" name="phoneNumber" />
                            <label className="label -my-2" htmlFor="input">Phone Number</label>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <textarea placeholder="Your Message" className="w-full p-4 border-2 border-gray-200 rounded-lg mt-6 hover:border-[#0098dc]" name="message" id="input" cols="30" rows="10" required></textarea>
                    <div className="flex justify-center items-center">
                        <button className=" flex justify-center items-center gap-1">Send Message<FaMessage /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;