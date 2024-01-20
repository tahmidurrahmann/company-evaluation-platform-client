import { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import "./styles.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RxValue } from "react-icons/rx";
import { MdAssessment } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
// hegghdfisdfghihofodfodfg
 // hellowwwwww  

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = <div className="flex flex-col lg:flex-row items-center my-6 lg:my-0 gap-8 py-24 md:py-0 ml-28 md:ml-0">
        <NavLink onClick={() => setIsOpen(false)}
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            <span className="flex gap-2 items-center"><FaHome className="text-[#007cc7]" />Home</span>
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)}
            to="/aboutUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            <span className="flex gap-2 items-center"><FcAbout className="text-[#007cc7]" />About Us</span>
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)}
            to="/ourValuesOrMission"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >

            <span className="flex gap-2 items-center"><RxValue className="text-[#007cc7]" />Missions</span>
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)}
            to="/assessments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            <span className="flex gap-2 items-center"><MdAssessment className="text-[#007cc7]" />Assessments</span>
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)}
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            <span className="flex gap-2 items-center"><MdOutlineContacts className="text-[#007cc7]" />Contact</span>
        </NavLink>
    </div>

    return (
        <div className="fixed z-10 bg-white container">
            <div className="py-3">
                <div className="flex justify-between items-center px-4 xl:px-0">
                    <div className="flex gap-1">
                        <img className="w-[30px] md:w-[40px]" src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png" alt="" />
                        <h1 className="text-2xl md:text-4xl font-semibold">iONE</h1>
                    </div>
                    <div className="hidden lg:flex gap-4">
                        {navItems}
                    </div>
                    <div className="flex gap-2">
                        <button className="font-semibold border border-[#007cc7] px-3 py-1 rounded-lg text-[#007cc7] hover:scale-105 transition">Log In</button>
                        <button className="font-semibold bg-[#007cc7] px-3 py-1 rounded-lg text-white hover:scale-105 transition">Sign Up</button>
                    </div>
                    <button className="flex lg:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <CiMenuFries />
                    </button>
                    <Drawer
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        position="right"
                    >
                        <div className="demo-content">
                            <button type="button" className="hover:scale-105 hover:bg-gray-400 rounded-lg" onClick={() => setIsOpen(false)}>
                                <IoMdClose size={30} />
                            </button>
                            {navItems}
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default NavBar;