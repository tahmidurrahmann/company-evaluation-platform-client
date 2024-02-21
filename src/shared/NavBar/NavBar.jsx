import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import "./styles.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaInnosoft } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RxValue } from "react-icons/rx";
import { MdAssessment } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { GiCircularSaw } from "react-icons/gi";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <div className="flex flex-col items-center justify-center gap-6 py-24 my-6 lg:flex-row lg:my-0 lg:gap-2 xl:gap-6 md:py-36 lg:py-0 ">
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[rgb(0,124,199)] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <FaHome className="text-[#007cc7]" />
          Home
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/aboutUs"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <FcAbout className="text-[#007cc7]" />
          About
        </span>
      </NavLink>

      <NavLink
        onClick={() => setIsOpen(false)}
        to="/jobHub"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <GiCircularSaw className="text-[#007cc7]" />
          Company Job Hub
        </span>
      </NavLink>

      <NavLink
        onClick={() => setIsOpen(false)}
        to="/ourValuesOrMission"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <RxValue className="text-[#007cc7]" />
          Missions
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/companies"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <ImOffice className="text-[#007cc7]" />
          Companies
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/management"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <MdAssessment className="text-[#007cc7]" />
          Management
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/innovation"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <FaInnosoft className="text-[#007cc7]" />
          Innovation
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-b-[#007cc7] transition lg:text-base xl:text-lg"
            : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition lg:text-base xl:text-lg"
        }
      >
        <span className="flex items-center gap-2">
          <MdOutlineContacts className="text-[#007cc7]" />
          Contact
        </span>
      </NavLink>
    </div>
  );

  const handleLogeOut = () => {
    logOut().then().catch();
  };

  return (
    <div
      className={`fixed z-10 w-full ${
        scrolled ? "bg-white text-black" : "bg-[#1515154D] text-white"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="py-0.5">
          <div className="flex items-center px-4 justify-evenly xl:px-0">
            <Link to="/">
              <div className="flex gap-1">
                <img
                  className="w-[30px] md:w-[40px]"
                  src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png"
                  alt=""
                />
                <h1 className="text-2xl font-semibold md:text-4xl">IONE</h1>
              </div>
            </Link>
            <div className="hidden gap-4 lg:flex">{navItems}</div>
            <div className="">
              {user ? (
                <div className="flex items-center">
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img referrerPolicy="no-referrer" src={user.photoURL} />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <h4 className="text-neutral-600 font-bold px-2.5 py-1 flex items-center gap-1">
                        <FaRegUser />
                        {user?.displayName}
                      </h4>
                      <Link
                        className="w-full hover:bg-[#eee8e8] mb-1 pt-2 pb-1 font-bold"
                        to="/dashboard"
                      >
                        <button className="text-center lg:text-base xl:text-lg px-2.5 pb-1 flex justify-center items-center gap-1">
                          <MdOutlineDashboard />
                          Dashboard
                        </button>
                      </Link>
                      <button onClick={handleLogeOut} className="Btnuu">
                        <MdOutlineLogout
                          size={34}
                          className="pl-3 text-white"
                        />
                        <div className="text">LOGOUT</div>
                      </button>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to={"/signIn"}>
                  <button className="Btnu">
                    <MdOutlineLogout size={34} className="pl-3 text-white" />
                    <div className="text">Login</div>
                  </button>
                </Link>
              )}
            </div>
            <span
              className="flex lg:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CiMenuFries />
            </span>
            <Drawer
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              position="right"
            >
              <div className="w-screen demo-content">
                <span
                  type="button"
                  className="rounded-lg hover:scale-105 hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose size={30} />
                </span>
                {navItems}
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
