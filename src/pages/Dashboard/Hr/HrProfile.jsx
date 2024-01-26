import CountUp from 'react-countup';
import { FaUsers, FaUserGraduate, FaTasks } from "react-icons/fa";
import { FaPersonSnowboarding } from "react-icons/fa6";
import useUsers from '../../../hooks/useUsers';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
const HrProfile = () => {
    const { user: myuserId } = useContext(AuthContext)
    const [allUsers] = useUsers();
    const [user, setUser] = useState(null);
    const [myProfile, setMyProfile] = useState(null);
    console.log(myProfile)
    useEffect(() => {
        if (allUsers) {
            setUser(allUsers?.filter(user => user?.role === "user"));
            setMyProfile(allUsers?.filter(myInfo => myInfo.email === myuserId.email))
        }
    }, [allUsers, myuserId])
    if (!allUsers) {
        return
    }
    if (!user) {
        return
    }
    return (
        <>

            <section className='mt-10'>
                {
                    myProfile?.map(element => <>
                        <div className='flex justify-between  max-w-4xl'>
                            <div>
                                <h1 className='font-bold text-3xl'>Name :{element.name}</h1>
                                <h3 className='font-medium my-5'>Email: {element.email}</h3>
                                <h3 className='font-bold text-3xl'>Company Name: Programming Hero</h3>
                                <h3 className='font-medium text-xl my-5'>Position: {element.role}</h3>
                            </div>
                            <div>
                                <img className='h-[200px] w-[200px] rounded-2xl' src={element.image} alt="" />
                            </div>
                        </div>

                    </>)
                }


            </section>
            <h1 className='flex justify-center items-center text-3xl font-extrabold mt-32'>Your Normal Analices for your company</h1>
            <section className="grid gap-12 md:grid-cols-3 md:gap-16 mx-40 my-20">
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <FaUsers className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={allUsers.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">All Users</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">

                        <FaUserGraduate className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={user.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">All Employe</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">

                        <FaTasks className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={100}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Your Employe Task</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <FaPersonSnowboarding className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div className='flex gap-3'>

                                <CountUp start={0} end={1000}>
                                </CountUp> %
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Your employe pearformeance</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
            </section>

        </>
    );
};

export default HrProfile;