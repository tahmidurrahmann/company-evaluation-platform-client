import { PopupButton } from "react-calendly";
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";
import Loading from "../../../shared/Loading/Loading";
import { CgMail } from "react-icons/cg";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import UserAnalysis from "./UserAnalysis";
import { BiSolidLike } from "react-icons/bi";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { Badge } from "@mui/material";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineTaskAlt } from "react-icons/md";

const UserProfile = () => {

    const [employeeRequestCheck, isEmployee] = useEmployeeProfile();
    const [specificEmployee, isDrag] = useDragAndDrop();
    const [completedTask, setCompletedTask] = useState([]);

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    ///////

    useEffect(() => {
        if (specificEmployee?.length > 0) {
            const isTaskCompleted = specificEmployee?.filter(employee => employee?.liked === true);
            setCompletedTask(isTaskCompleted)
        }
    }, [specificEmployee]);

    if (isEmployee || isDrag) {
        return <Loading />
    }

    return (
        <div>
            <div className="overflow-x-auto">
                    {employeeRequestCheck?.status === "checked" ?
                        // <div className="object-cover shadow-black bg-red-500 text-white shadow-xl flex flex-col md:flex-row p-6 md:p-8 mx-4 xl:mx-0 rounded-xl gap-12 items-center justify-between my-10">
                        //     <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        //     <img src={employeeRequestCheck?.imageURL} alt="Shoes" className='aspect-square h-full w-40 object-cover' />
                        //         <div>
                        //             <h1 className="text-xl font-semibold flex items-center gap-2"><FaRegUser />{employeeRequestCheck?.name}</h1>
                        //             <h1 className="text-xl font-semibold flex items-center gap-2"><PiMediumLogoFill /> {employeeRequestCheck?.company}</h1>
                        //             <h2 className="font-medium text-neutral-400 flex items-center gap-2"><CgMail />{employeeRequestCheck?.email}</h2>
                        //         </div>
                        //     </div>
                        //     <div className="flex items-center justify-center">
                        //         <button
                        //             type="button"
                        //             onClick={openModal}
                        //             className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        //         >
                        //             <Badge badgeContent={completedTask?.length} color="primary" className="py-3">
                        //                 <BiSolidLike className="text-2xl text-white  hover:text-red-500" />
                        //             </Badge>
                        //         </button>
                        //         <Transition appear show={isOpen} as={Fragment}>
                        //             <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        //                 <Transition.Child
                        //                     as={Fragment}
                        //                     enter="ease-out duration-300"
                        //                     enterFrom="opacity-0"
                        //                     enterTo="opacity-100"
                        //                     leave="ease-in duration-200"
                        //                     leaveFrom="opacity-100"
                        //                     leaveTo="opacity-0"
                        //                 >
                        //                     <div className="fixed inset-0 bg-black/25" />
                        //                 </Transition.Child>

                        //                 <div className="fixed inset-0 overflow-y-auto">
                        //                     <div className="flex min-h-full items-center justify-center p-4 text-center">
                        //                         <Transition.Child
                        //                             as={Fragment}
                        //                             enter="ease-out duration-300"
                        //                             enterFrom="opacity-0 scale-95"
                        //                             enterTo="opacity-100 scale-100"
                        //                             leave="ease-in duration-200"
                        //                             leaveFrom="opacity-100 scale-100"
                        //                             leaveTo="opacity-0 scale-95"
                        //                         >
                        //                             <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        //                                 <div className="mt-2">
                        //                                     <h1 className="text-center font-semibold">All tasks liked by your HR</h1>
                        //                                     {
                        //                                         completedTask?.map(task => <div className="border p-4 mt-6 rounded-lg text-sm flex justify-between items-center gap-12" key={task?._id}>
                        //                                             <h1 className="flex items-center gap-1"><HiOutlineOfficeBuilding />{task?.company}</h1>
                        //                                             <h1 className="flex items-center gap-1"><MdOutlineTaskAlt />{task?.addItem}</h1>
                        //                                         </div>)
                        //                                     }
                        //                                 </div>
                        //                                 <div className="mt-4">
                        //                                     <button onClick={closeModal} className="px-2 py-1 rounded-full hover:scale-110 transition bg-red-600 text-white absolute right-2 top-2">✕</button>
                        //                                 </div>
                        //                             </Dialog.Panel>
                        //                         </Transition.Child>
                        //                     </div>
                        //                 </div>
                        //             </Dialog>
                        //         </Transition>
                        //     </div>
                        // </div>

                    <div className="card mt-12 h-[300px] card-side bg-black shadow-xl">
                        <figure>
                        <img src={employeeRequestCheck?.imageURL} alt="Shoes" className='aspect-square h-full w-40 object-cover' />
                            </figure>
                        <div className="card-body">
                          <div className="flex justify-between">
                                <div className="space-y-3">
                                    <h1 className="text-xl font-semibold flex items-center gap-2"><FaRegUser />{employeeRequestCheck?.name}</h1>
                                    <h1 className="text-xl font-semibold flex items-center gap-2"><PiMediumLogoFill /> {employeeRequestCheck?.company}</h1>
                                    <h2 className="font-medium text-neutral-400 flex items-center gap-2"><CgMail />{employeeRequestCheck?.email}</h2>
                                </div>

                                <div>
                                    
                    <div className="flex items-center justify-center">
                                 <button
                                    type="button"
                                     onClick={openModal}
                                     className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                 >
                                    <Badge badgeContent={completedTask?.length} color="primary" className="py-3">
                                        <BiSolidLike className="text-2xl text-white  hover:text-red-500" />
                                 </Badge>
                             </button>
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
                                                    <div className="mt-2">
                                                            <h1 className="text-center font-semibold">All tasks liked by your HR</h1>
                                                          {
                                                              completedTask?.map(task => <div className="border p-4 mt-6 rounded-lg text-sm flex justify-between items-center gap-12" key={task?._id}>
                                                                  <h1 className="flex items-center gap-1"><HiOutlineOfficeBuilding />{task?.company}</h1>
                                                                  <h1 className="flex items-center gap-1"><MdOutlineTaskAlt />{task?.addItem}</h1>
                                                               </div>)
                                                         }
                                                      </div>
                                                        <div className="mt-4">
                                                          <button onClick={closeModal} className="px-2 py-1 rounded-full hover:scale-110 transition bg-red-600 text-white absolute right-2 top-2">✕</button>
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

                            <div className="App flex  items-center pt-12 justify-end">
                                <PopupButton
                                    url="https://calendly.com/tahmidurrahman/30min"
                                    className="bg-black hover:bg-blue-500 border-b-2  py-3 px-6 rounded-s-lg rounded-t-sm transition hover:scale-105 text-white font-medium"
                                    rootElement={document.getElementById("root")}
                                    text="Click here to schedule!"
                                />
                            </div>
                        </div>
                    </div>
                 
                        : <div className="min-h-[80vh] flex justify-center items-center font-semibold text-xl">Please Request for Employee or wait for Accept your request</div>}
             
                <UserAnalysis />
            </div>
        </div>
    );
};

export default UserProfile;