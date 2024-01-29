import Rating from "react-rating";
import banner from "../../../assets/184941 (Original).mp4"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import HrForm from "./HrForm";
import UserForm from "./UserForm";

const Banner = () => {

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='relative'>
            <video className='w-full' autoPlay loop muted src={banner}></video>
            <div className='absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full'>
                <div className='absolute space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 top-[63px] md:top-[100px] lg:top-16 xl:top-[220px] flex flex-col items-end left-1/3 lg:left-3/4 xl:right-28 right-4'>
                    <h1 className="text-white md:text-4xl text-right font-semibold pt-6">Boost Your IT Skills with Accurate Assessments</h1>
                    <p className="text-white text-right hidden md:flex">Empower your IT career with our all-in-one platform! Streamline assessments, track progress, and set meaningful goals. Elevate your skills with precision evaluations and receive continuous feedback. Designed for excellence and growth – your key to success in IT!</p>
                    {/* ------ modal starts here ----- */}
                    <div className="inset-0 flex items-center justify-center">
                        <span
                            type="button"
                            onClick={openModal}
                            className="font-semibold bg-[#007cc7] px-4 md:px-5 py-2 rounded-md text-xs md:text-base text-white hover:scale-105 transition"
                        >
                            Start Your IT Journey
                        </span>
                    </div>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <h1 className="text-center mt-4 text-black font-semibold text-2xl py-6">What would you like to be our <span className="text-[#007cc7]">IONE?</span></h1>
                                            <div className="flex justify-evenly items-center">
                                                <HrForm />
                                                <UserForm />
                                            </div>
                                            <div className="mt-4">
                                                <span onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-600 hover:text-white">✕</span>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    <div className="hidden md:flex items-center gap-1">
                        <Rating
                            initialRating="4.6"
                            emptySymbol={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3 md:w-5 md:h-5 lg:w-3 lg:h-3 xl:w-5 xl:h-5 text-yellow-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>}
                            fullSymbol={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-3 h-3 md:w-5 md:h-5 lg:w-3 lg:h-3 xl:w-5 xl:h-5 text-yellow-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>}
                            readonly
                        />
                        <p className="text-white text-xs md:text-base">From 700+ Reviews on</p>
                        <img className="w-[60px] md:w-[80px]" src="https://i.ibb.co/T07sN2C/Cisco-Logo-Design-min-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
