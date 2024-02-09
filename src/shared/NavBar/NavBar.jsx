import { useState } from "react";
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
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import { MdOutlineDashboard } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);


  const navItems = (
    <div className="flex flex-col lg:flex-row items-center my-6 lg:my-0 gap-8 py-24 md:py-36 lg:py-0">
      <NavLink
        onClick={() => setIsOpen(false)}
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
              ? "font-semibold border-b-2 border-b-[rgb(0,124,199)] transition text-lg"
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
          Contact Us
        </span>
      </NavLink>

    </div>
  );

  const handleLogeOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="bg-white w-full fixed z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="py-2">
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
            <div className="flex justify-start items-center gap-2">
              <div className="navbar-end">
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
                        <h4 className="text-neutral-600 font-bold px-2.5 py-1 flex items-center gap-1"><FaRegUser />{user?.displayName}</h4>
                        <Link className="w-full hover:bg-[#eee8e8] mb-1" to="/dashboard"><button className="text-center text-lg px-2.5 pb-1 flex justify-center items-center gap-1"><MdOutlineDashboard />Dashboard</button></Link>
                       <button onClick={handleLogeOut} className="Btnuu">
                          <div className="sign">
                            <svg viewBox="0 0 512 512">
                              <path
                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                              ></path>
                            </svg>
                          </div>
                          <div className="text">LOGOUT</div>
                        </button>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to={"/signIn"}>
                    <button className="Btnu">
                      <div className="sign">
                        <svg viewBox="0 0 512 512">
                          <path
                            d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                          ></path>
                        </svg>
                      </div>

                      <div className="text">Login</div>
                    </button>
                  </Link>
                )}
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
