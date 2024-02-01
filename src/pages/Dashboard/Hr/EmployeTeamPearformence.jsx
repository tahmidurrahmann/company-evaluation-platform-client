import { FaBuromobelexperte } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const EmployeTeamPearformence = () => {
    const chartData = [
        { name: "SomethingA", somethingA: 10, somethingB: 6, somethingC: 6 },
        { name: "SomethingB", somethingA: 4, somethingB: 8, somethingC: 8 },
        { name: "SomethingC", somethingA: 3, somethingB: 5, somethingC: 5 },
    ];

    return (
        <div className="space-y-6">
            <nav className="shadow-sm">
                <div className="navbar bg-green-200 rounded-sm">
                    <div className="flex-1 ">
                        <FaBuromobelexperte className="text-2xl text-fuchsia-950 font-bold" />
                        <a className="btn btn-ghost text-xl">Team Performance</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="w-10 rounded-full">
                            <img
                                className="rounded-full"
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-gray-100 p-4">
                <div className="flex justify-between mx-10 gap-5">
                    <div className="flex justify-center items-center text-center w-1/2 py-6 rounded-lg shadow-md space-x-3 bg-white">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-900" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold ">20</h1>
                            <p className="text-sm text-orange-950 font-semibold">Tasks</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center w-1/2 py-6 space-x-3 rounded-lg shadow-md bg-white">
                        <div>
                            <MdTaskAlt className="text-6xl text-blue-900" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold ">20</h1>
                            <p className="text-sm text-orange-950 font-semibold">Tasks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-4 space-y-6 w-full">
                <h1 className="font-sans text-2xl font-bold">Performance Survey</h1>

                <BarChart
                    className="items-center text mx-auto"
                    width={window.innerWidth / 1.5}
                    height={400}
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    barSize={30}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="somethingA" fill="#C92502" />
                    <Bar dataKey="somethingB" fill="#24E905" />
                    <Bar dataKey="somethingC" fill="#3A02FE" />
                </BarChart>
            </div>
        </div>
    );
};

export default EmployeTeamPearformence;