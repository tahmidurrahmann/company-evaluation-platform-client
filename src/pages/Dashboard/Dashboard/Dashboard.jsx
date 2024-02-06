import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaUser, FaUsers, FaVideo } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../shared/Loading/Loading';
import useHr from '../../../hooks/useHr';
import { FaUserTie } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { GoTasklist } from "react-icons/go";
import { BsListTask } from "react-icons/bs";
import { SiSoundcharts } from "react-icons/si";
const drawerWidth = 240;
function Dashboard(props) {

    const [isAdmin, pending] = useAdmin();
    const [isHr, isPending] = useHr();

    const { user } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    if (pending) {
        return <Loading />
    }

    if (isPending) {
        return <Loading />
    }

    const drawer = (
        <div className='flex flex-col items-center gap-4 border-r-1  border-gray-200 justify-center pt-6'>
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                    <img referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                </div>
            </div>
            <h1 className='font-bold'>{user?.displayName}</h1>

            <div className="flex justify-center">
                <hr className="border-1  border-gray-300 w-60" />
            </div>
            {/* employee Dashboard */}
            {user?.email && !isAdmin && !isHr && <NavLink
                to="/dashboard/userProfile"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                }
            >
                <div className='flex items-center gap-2'><FaUser />Employee Profile</div>
            </NavLink>}

            {user?.email && !isAdmin && !isHr && <NavLink
                to="/dashboard/userTask"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                }
            >
                <div className='flex items-center gap-2'><GoTasklist />Employee Tasks</div>
            </NavLink>}

            {/* hr dashboard */}
            <div className='flex flex-col justify-center gap-2 items-center space-y-3 mt-3 mb-5  text-center'>
                {user?.email && !isAdmin && isHr && <>
                    <NavLink
                        to="/dashboard/hrProfile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >
                        <div className='flex items-center gap-2'><FaUser />Hr Profile</div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/allEmploye"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >
                        <div className='flex items-center gap-2'><FaUsers className='text-[24px]' />All Employe</div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/meet"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >

                        <div className='flex items-center gap-2'><FaVideo />Contact Employe</div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/employeTask"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >
                        <div className='flex items-center gap-2'><BsListTask className='font-bold text-[24px]' />Employe Taskes</div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/employeTeamPearformence"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 w-3/4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >
                        <div className='flex items-center gap-2'><SiSoundcharts className='font-bold text-[24px]' />Employe Team pearformence</div>
                    </NavLink>

                </>}
            </div>
            {/* admin dashboard */}
            {
                user?.email && isAdmin && <div className='flex flex-col gap-3 justify-center items-center'>
                    <NavLink
                        to="/dashboard/adminProfile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 px-4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >
                        <div className='flex items-center gap-2'><MdOutlineAdminPanelSettings /> Admin Profile</div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/agreementRequest"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-semibold md:text-lg text-[#4885a2] bg-gray-100 py-2 px-4 rounded-lg border-l-4 border-l-[#4885a2] flex justify-center" : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                        }
                    >
                        <div className='flex items-center gap-2'><FaCodePullRequest /> Agreement Request</div>
                    </NavLink>
                </div>
            }
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold md:text-lg text-neutral-900 " : "font-semibold md:text-lg hover:text-neutral-900 text-neutral-400"
                }
            >

                
                <div className='flex items-center gap-2'><IoHomeOutline /> Home</div>
            </NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#fff"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: "#000" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="flex gap-1">
                        <img
                            className="w-[30px] md:w-[40px]"
                            src="https://i.ibb.co/FH8Vn5d/1-156-removebg-preview.png"
                            alt=""
                        />
                        <h1 className="text-2xl md:text-4xl font-semibold text-black">iONE</h1>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

export default Dashboard;