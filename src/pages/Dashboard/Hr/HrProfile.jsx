import CountUp from 'react-countup';
import { SiVirustotal } from "react-icons/si";
import { CgBoy, CgGirl } from "react-icons/cg";
import { GiLifeBar } from "react-icons/gi";
import useUsers from '../../../hooks/useUsers';
import { useEffect, useState } from 'react';
const HrProfile = () => {
    const [allUsers] = useUsers();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (allUsers) {
            setUser(allUsers?.filter(user => user?.role === "user"));
        }
    }, [allUsers])
    if (!allUsers) {
        return
    }
    if (!user) {
        return
    }
    return (
        <>

            <section className="grid gap-12 md:grid-cols-3 md:gap-16 mx-40 my-20">
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <SiVirustotal className='text-5xl' />
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
                        <CgBoy className='text-5xl' />
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
                        <CgGirl className='text-5xl' />
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
                        <GiLifeBar className='text-5xl' />
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