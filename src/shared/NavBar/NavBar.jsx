import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import "./styles.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RxValue } from "react-icons/rx";
import { MdAssessment } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <div className="flex flex-col lg:flex-row items-center my-6 lg:my-0 gap-8 py-24 md:py-0 ml-28 md:ml-0">
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
              ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg"
              : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
        }
      >
        <span className="flex gap-2 items-center">
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
              ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg"
              : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
        }
      >
        <span className="flex gap-2 items-center">
          <FcAbout className="text-[#007cc7]" />
          About Us
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/ourValuesOrMission"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
              ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg"
              : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
        }
      >
        <span className="flex gap-2 items-center">
          <RxValue className="text-[#007cc7]" />
          Missions
        </span>
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/management"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
              ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg"
              : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
        }
      >
        <span className="flex gap-2 items-center">
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
              ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg"
              : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
        }
      >
        <span className="flex gap-2 items-center">
          <MdAssessment className="text-[#007cc7]" />
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
              ? "font-semibold border-b-2 border-b-[#007cc7] transition text-lg"
              : "font-semibold hover:border-b-2 hover:border-b-[#007cc7] transition text-lg"
        }
      >
        <span className="flex gap-2 items-center">
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
    <div className="bg-white w-full fixed z-10">
      <div className=" max-w-screen-2xl mx-auto">
        <div className="py-3">
          <div className="flex justify-between items-center px-4 xl:px-0">
            <Link to="/"><div className="flex gap-1">
              <img
                className="w-[30px] md:w-[40px]"
                src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png"
                alt=""
              />
              <h1 className="text-2xl md:text-4xl font-semibold">iONE</h1>
            </div></Link>
            <div className="hidden lg:flex gap-4">{navItems}</div>
            <div className="flex justify-center items-center gap-2">
              <div className="navbar-end">
                {user ? (
                  <div className="flex items-center ">
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
                        <li>
                          <h4>{user?.displayName}</h4>
                        </li>
                        <button
                          onClick={handleLogeOut}
                          className="btn font-bold bg-blue-500 text-white"
                        >
                          Log Out
                        </button>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to={"/signIn"}>
                    <button className="font-semibold border border-[#007cc7] px-3 py-1 rounded-lg text-[#007cc7] hover:scale-105 transition">
                      Log In
                    </button>
                  </Link>
                )}
              </div>
              <Link to="signUp"><button className="font-semibold bg-[#007cc7] px-3 py-1 rounded-lg text-white hover:scale-105 transition">SignUp</button></Link>
            </div>
            <button
              className="flex lg:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CiMenuFries />
            </button>
            <Drawer
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              position="right"
            >
              <div className="demo-content">
                <button
                  type="button"
                  className="hover:scale-105 hover:bg-gray-400 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose size={30} />
                </button>
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
