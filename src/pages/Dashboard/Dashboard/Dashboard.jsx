import { Link, NavLink, Outlet } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaUser, FaVideo } from "react-icons/fa";
import { MdOutlineAdminPanelSettings, MdOutlineLogout } from "react-icons/md";
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../shared/Loading/Loading';
import useHr from '../../../hooks/useHr';
import { FaCodePullRequest } from "react-icons/fa6";
import { GoTasklist } from "react-icons/go";
import { BsListTask } from "react-icons/bs";
import { SiSoundcharts } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import useAuth from '../../../hooks/useAuth';
import Drawer from '../../../shared/NavBar/Drawer';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io';
import { GiNotebook } from "react-icons/gi";
import useEmployeeProfile from '../../../hooks/useEmployeeProfile';
import { FaAmazonPay } from "react-icons/fa";
import { TbCoinTaka } from "react-icons/tb";
import { Badge } from '@mui/material';
import usePayment from '../../../hooks/usePayment';
import { FaMessage } from "react-icons/fa6";

const Dashboard = () => {

    const [allPayments, isPayment] = usePayment();
    const { user, logOut } = useAuth();
    const [isAdmin, pending] = useAdmin();
    const [isHr, isPending] = useHr();
    const [isOpen, setIsOpen] = useState(false);
    const [employeeRequestCheck, isEmployee] = useEmployeeProfile();

    if (pending || isPending || isEmployee) {
        return <Loading />
    }

    const handleLogeOut = () => {
        logOut().then().catch();
    };

    if (isPayment) {
        return <Loading />
    }

    const userEmail = user ? user.email : "";

    const filteredPayments = allPayments?.filter(item => item.employeeInfo.email === userEmail);

    const navItems = <div className='flex flex-col items-center gap-4 px-10 justify-center pt-6'>
        <Link to="/"><div className="flex justify-center items-center gap-3">
            <img
                className="w-[30px] h-[30px]"
                src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png"
                alt=""
            />
            <h1 className="font-semibold text-2xl text-black lg:text-white">IONE</h1>
        </div></Link>
        <div className="avatar placeholder mt-6">
            <div className="bg-neutral text-neutral-content rounded-lg w-24">
                <img referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
            </div>
        </div>
        <h1 className='font-semibold text-black lg:text-white'>{user?.displayName}</h1>
        {/* employee Dashboard */}
        {user?.email && !isAdmin && !isHr && employeeRequestCheck?.status === "checked" &&
            <div className='flex flex-col justify-center gap-2 items-center space-y-3 mt-3 mb-5  text-center'>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/userProfile"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><FaUser />Employee Profile</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/userTask"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><GoTasklist className='text-xl' />Employee Tasks</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/userPerformance"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><GoTasklist className='text-xl' />Your Performance</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/messageHr"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><FaMessage className='font-bold text-[16px]' />Message HR</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/paymentHistory"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><TbCoinTaka className='text-2xl' />Salary History <p className='text-sm  text-white'>
                        <Badge badgeContent={filteredPayments.length} color="warning" className="px-2 py-2">

                        </Badge>
                    </p></div>
                </NavLink>

                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/linkNotice"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><TfiAnnouncement />Notices & Link</div>
                </NavLink>


                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/feedback"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><GiNotebook className='font-bold text-[24px]' />Give Feedback</div>
                </NavLink>
            </div>
        }
        {/* hr dashboard */}
        {user?.email && !isAdmin && isHr && <div className='flex flex-col justify-center gap-2 items-center space-y-3 mt-3 mb-5  text-center'>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/hrProfile"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><FaUser />Hr Profile</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/employeTask"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><BsListTask className='font-bold text-[24px]' />All Tasks</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/allEmploye"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><MdOutlineAdd className='text-[24px]' />Add Task</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/employeeRequest"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><FaUserGear className='font-bold text-[24px]' />Employee Request</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/messageEmployee"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><FaMessage className='font-bold text-[16px]' />Message Employee</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/payEmployee"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><FaAmazonPay className='font-bold text-[24px]' />Pay Employee</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/meet"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >

                <div className='flex items-center gap-2'><FaVideo />Contact Employee</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/employeTeamPearformence"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><SiSoundcharts className='font-bold text-[24px]' />Team performance</div>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}
                to="/dashboard/feedback"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><GiNotebook className='font-bold text-[24px]' />Give Feedback</div>
            </NavLink>
        </div>}
        {/* admin dashboard */}
        {
            user?.email && isAdmin && <div className='flex flex-col gap-3 justify-center space-y-2 mt-7 items-center'>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/adminProfile"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><MdOutlineAdminPanelSettings /> Admin Profile</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/agreementRequest"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><FaCodePullRequest /> Agreement Request</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/notices"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><FaNewspaper />Post Notices & Info</div>
                </NavLink>
                <NavLink onClick={() => setIsOpen(false)}
                    to="/dashboard/companyInfo"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-semibold md:text-lg text-white p-2 rounded-lg bg-[#007cc7]  flex justify-center" : "font-semibold md:text-lg text-black lg:text-white hover:bg-[#007cc7] p-2 rounded-lg"
                    }
                >
                    <div className='flex items-center gap-2'><ImOffice />Company Info</div>
                </NavLink>
            </div>
        }
        <div className='h-[0.5px] w-full px-6 bg-white'></div>
        <div className='flex justify-center items-center gap-6'>
            <NavLink onClick={() => setIsOpen(false)}
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#007cc7] bg-white p-2 rounded-lg  flex justify-center" : "font-semibold md:text-lg text-black lg:text-[#007cc7] bg-white hover:bg-[#007cc7] hover:text-white p-2 rounded-lg"
                }
            >
                <div className='flex items-center gap-2'><IoHomeOutline /></div>
            </NavLink>
            <div className="navbar-end">
                {user ? (
                    <button onClick={handleLogeOut} className="Btnuu">
                        <MdOutlineLogout size={34} className="pl-3 text-white" />
                        <div className="text">LOGOUT</div>
                    </button>
                ) : (
                    <Link to={"/signIn"}>
                        <button className="Btnu">
                            <MdOutlineLogout size={34} className="pl-3 text-white" />
                            <div className="text">Login</div>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    </div>

    return (
        <div style={{
            backgroundImage: "url(https://i.ibb.co/0JhhR4N/light-blue-3d-abstract-wave-pattern-1.jpg)"
        }} className='grid grid-cols-1 lg:grid-cols-12 bg-cover bg-fixed bg-center bg-no-repeat'>
            <div className="grid-cols-1 lg:col-span-3 2xl:col-span-2">
                <div className='hidden lg:flex max-h-screen min-h-screen fixed z-10 overflow-y-scroll justify-center bg-[#0D0F11CC] border-r'>
                    <div>{navItems}</div>
                </div>
            </div>
            <div className='fixed z-10 bottom-40 left-4'>
                <div
                    className="flex lg:hidden"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='bg-gray-300 p-2 rounded-lg'>
                        <GiHamburgerMenu className='text-3xl text-white' />
                    </div>
                </div>
            </div>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                position="left"
            >
                <div className="demo-content w-screen">
                    <span
                        type="button"
                        className="hover:scale-105 hover:bg-gray-400 rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoMdClose size={30} />
                    </span>
                    {navItems}
                </div>
            </Drawer>
            <div className='w-full min-h-screen text-white max-w-screen-xl mx-auto font-raleway grid-cols-1 lg:col-span-9 2xl:col-span-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;