import { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import "./styles.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

    const navItems = <div className="flex flex-wrap justify-center my-6 md:my-0 ml-6 items-center gap-8">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            About Us
        </NavLink>
        <NavLink
            to="/ourValuesOrMission"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg" : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
            }
        >
            OurValuesOrMission
        </NavLink>
    </div>

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-screen-2xl mx-auto my-3">
            <div className="flex justify-between items-center px-4 xl:px-0">
                <div className="flex gap-1">
                    <img className="w-[30px] md:w-[40px]" src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png" alt="" />
                    <h1 className="text-2xl md:text-4xl font-semibold">iONE</h1>
                </div>
                <div className="hidden md:flex gap-4">
                    {navItems}
                </div>
                <div className="flex gap-2">
                    <button className="font-semibold border border-[#007cc7] px-3 py-1 rounded-lg text-[#007cc7] hover:scale-105 transition">Log In</button>
                    <button className="font-semibold bg-[#007cc7] px-3 py-1 rounded-lg text-white hover:scale-105 transition">Sign Up</button>
                </div>
                <button className="flex md:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
                    <CiMenuFries />
                </button>
                    <Drawer
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        position="right"
                    >
                        <div className="demo-content">
                            <button type="button" className="hover:scale-105 hover:bg-gray-400 rounded-lg" onClick={() => setIsOpen(false)}>
                                <IoMdClose size={30}/>
                            </button>
                            {navItems}
                        </div>
                    </Drawer>
            </div>
        </div>
    );
};

export default NavBar;