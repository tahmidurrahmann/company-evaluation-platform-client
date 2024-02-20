import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import HrForm from "./HrForm";
import UserForm from "./UserForm";
import banner from "../../../assets/184941 (Original).mp4";
import { GiJourney } from "react-icons/gi";

const Banner: React.FC = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <video className="w-full" autoPlay loop muted src={banner}></video>
      <div className="absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full">
        <div className="absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full">
          <div className="absolute flex flex-col items-center justify-center space-y-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:space-y-4 xl:space-y-10">
            <h1
              className="font-semibold text-center text-white md:text-4xl"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 0, 0.5)" }}
            >
              Boost Your IT <span className="text-[#F72798]">Skills</span> with
              Accurate <span className="text-[#F72798]">Assessments</span>
            </h1>

            <p className="text-sm text-center text-white">
              Empower your IT career with our all-in-one platform! Streamline
              assessments, track progress, and set meaningful goals. Elevate
              your skills with precision evaluations and receive continuous
              feedback. Designed for excellence and growth – your key to success
              in IT!
            </p>
            <div className="flex items-center justify-center">
              <span
                onClick={openModal}
                className="font-semibold bg-[#007cc7] px-4 md:px-5 py-2 rounded-md text-xs md:text-base text-white hover:scale-105 transition flex justify-center items-center gap-4"
              >
                <GiJourney className="text-2xl" />
                Start Your IT Journey
              </span>
            </div>
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
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <h1 className="py-6 mt-4 text-2xl font-semibold text-center text-black">
                        What would you like to be our{" "}
                        <span className="text-[#007cc7]">IONE?</span>
                      </h1>
                      <div className="flex items-center justify-evenly">
                        <HrForm />
                        <UserForm heading="EMPLOYEE" />
                      </div>
                      <div className="mt-4">
                        <span
                          onClick={closeModal}
                          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 hover:bg-red-600 hover:text-white"
                        >
                          ✕
                        </span>
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
