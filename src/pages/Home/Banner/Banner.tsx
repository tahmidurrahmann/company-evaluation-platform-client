import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import banner from "../../../assets/65c3b693213374e97534bfdb_Video 1_hero image_v6_min-transcode (2).mp4";
import { GiJourney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Banner: React.FC = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 pt-20 lg:pt-52 px-6 md:px-12 2xl:px-0">
      <div className="2xl:w-1/3 space-y-3 lg:space-y-6 lg:-mt-16 2xl:-mt-4" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <TypeAnimation
          sequence={[
            'Achieve Your High Performance Culture',
            1000,
            'Achieve Peak Performance',
            1000,
            'Cultivate High Performance',
            1000,
            'Foster a Culture of Excellence',
            1000
          ]}
          wrapper="span"
          className="text-[#151746] text-[40px] lg:text-5xl font-bold w-full text-center lg:text-left"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
        <p className="text-[#737490] w-full text-center lg:text-left font-medium">One platform to streamline and formalize your process for performance reviews, goals, and continuous feedback.</p>
        <div className="flex items-center justify-center lg:justify-start">
          <span
            onClick={openModal}
            className="font-semibold bg-[#007cc7] px-[20px] py-[10px] rounded-md text-white hover:scale-105 transition flex justify-center items-center gap-4"
          >
            <GiJourney className="text-2xl" />
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
                    <h1 className="py-6 mt-4 text-xl font-semibold text-center text-black">
                      What would you like to be our{" "}
                      <span className="text-[#007cc7]">IONE?</span>
                    </h1>
                    <div className="flex items-center justify-evenly">
                      <Link to={`/applyForHr`}>
                        <button className="but">
                          <div className="font-medium but-top">HR</div>
                          <div className="but-bottom"></div>
                          <div className="but-base"></div>
                        </button>
                      </Link>
                      <Link to={`/applyForEmployee`}>
                        <button className="but">
                          <div className="font-medium but-top">Employee</div>
                          <div className="but-bottom"></div>
                          <div className="but-base"></div>
                        </button>
                      </Link>

                    </div>
                    <div className="mt-4">
                      <span
                        onClick={closeModal}
                        className="absolute btn btn-sm btn-circle btn-ghost-auto-2 top-2 hover:bg-red-600 hover:text-white"
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
        <div className="flex flex-col items-center lg:items-start  justify-center">
          <p className="text-[#737490] font-medium">From 700+ Reviews on</p>
          <div className="flex items-center  gap-4 lg:gap-6">
            <img className="w-16 lg:w-20" src="https://assets-global.website-files.com/5ec8332c2b50b6c3e1066975/63ddb709c6567a07bd269885_g2crowd-2_min.webp" alt="" />
            <img className="w-16 lg:w-20" src="https://assets-global.website-files.com/5ec8332c2b50b6c3e1066975/63eac554f001b87191f60c7b_capterra2x_min.webp" alt="" />
            <img className="w-16 lg:w-20" src="https://assets-global.website-files.com/5ec8332c2b50b6c3e1066975/63eac554b9631f23a2e28eaa_trust-radius2x_min.webp" alt="" />
          </div>
        </div>
      </div>
      <div>
        <video className="2xl:w-4/5 mx-auto" autoPlay loop muted src={banner}></video>
      </div>
    </div>
  );
};

export default Banner;