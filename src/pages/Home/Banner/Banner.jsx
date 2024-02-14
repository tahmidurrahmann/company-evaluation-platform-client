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
                <div className='absolute space-y-1 lg:space-y-4 xl:space-y-5 top-[63px] md:top-[60px] lg:top-16 xl:top-[100px] 2xl:top-[330px] flex flex-col items-end left-1/2 xl:right-52 right-4'>
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
                                                <UserForm heading="EMPLOYEE" />
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
                </div>
            </div>
        </div>
    );
};

export default Banner;
