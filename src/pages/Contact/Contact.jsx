import './Contact.css'
import emailjs from '@emailjs/browser';
import { FaLocationDot } from "react-icons/fa6";
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
            <SharedBanner heading="Contact Us" passage="Contact Us" />
            {/* ------ first  section here ----- */}
            <div className='pt-16 md:pt-28 md:pb-20 mb-12 gap-20 md:gap-12 px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto'>
                <div className='bg-white border-2 shadow-2xl rounded-xl pb-4'>
                    <div className='flex justify-center items-center -mt-10'>
                        <FaLocationDot className='text-blue-400 text-7xl p-2 bg-gray-300 rounded-full' />
                    </div>
                    <h1 className='text-2xl text-black text-center font-bold mb-1 pt-8'>Location</h1>
                    <p className='text-center text-gray-500'>Level 4, 34, Awal Centre, Kemal Ataturk Ave,<br /> Dhaka - 1213, Bangladesh</p>
                </div>
                {/* 2 --------- contact  */}
                <div className='bg-white border-2  shadow-2xl rounded-xl pb-4'>
                    <div className='flex justify-center items-center -mt-10'>
                        <IoCallSharp className='text-yellow-300  text-7xl p-2  bg-gray-300 rounded-full' />
                    </div>
                    <h1 className='text-2xl text-black text-center font-bold mb-1 pt-8'>Phones</h1>
                    <p className='text-center text-gray-500'>+8801882239828</p>
                    <p className='text-center text-gray-500'>+8801772352777</p>
                </div>
                {/* 3 --------- contact  */}
                <div className='bg-white border-2 shadow-2xl  rounded-xl pb-4'>
                    <div className='flex justify-center items-center -mt-10'>
                        <IoIosMailUnread className='text-orange-600  text-7xl p-3  bg-gray-300 rounded-full' />
                    </div>
                    <h1 className='text-2xl text-black text-center font-bold mb-1 pt-8'>Email</h1>
                    <p className='text-center text-gray-500'>ione@gmail.com</p>
                    <p className='text-center text-gray-500'>evaluation@platform.com</p>
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
                        <button className="button" style={{ "--clr": "#007cc7" }}>
                            <span className="button-decor"></span>
                            <div className="button-content">
                                <div className="button__icon">
                                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="24">
                                        <circle opacity="0.5" cx="25" cy="25" r="23" fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)"></circle>
                                        <mask id="icon-payments-cat_svg__a" fill="#fff">
                                            <path d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z">
                                            </path>
                                        </mask>
                                        <path d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z" fill="#fff"></path>
                                        <path d="M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z" fill="#fff" mask="url(#icon-payments-cat_svg__a)"></path>
                                        <defs>
                                            <linearGradient id="icon-payments-cat_svg__paint0_linear_1141_21101" x1="25" y1="2" x2="25" y2="48" gradientUnits="userSpaceOnUse">
                                                <stop></stop>
                                                <stop offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="button__text">Send Message</span>
                            </div>
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;