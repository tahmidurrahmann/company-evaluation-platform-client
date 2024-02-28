import { LuBarChart4 } from "react-icons/lu";
import { MdStackedBarChart } from "react-icons/md";
import { TbChartDotsFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
const Perfomence = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between  pt-32">
                    <div className="">
                        <h1 className="text-7xl p-5 font-bold ">Make Better People <br /> Decisions with <br />  Better Performance <br />  Data</h1>
                        <p className="text-gray-600 p-5 ">One place to automatically track performance data and analyze results across time, teams, roles, or any other factor.</p>
                        <button className="btn bg-blue-500 text-white border-b-2 border-b-white px-7 ml-3 ">Join Us</button>

                    </div>


                    <div>
                        <img className="w-[800px] ml-12" src="https://specie-admin-template.multipurposethemes.com/intro/images/image-1.png" alt="" />
                    </div>

                </div>


                <div className="mt-12 p-12">
                    <h1 className="text-center text-6xl font-bold">Stay Focused on <br /> Performance</h1>
                    <div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 ml-12">
                            <div className="card w-96">
                                <figure><LuBarChart4 className="text-9xl text-[#007cc7]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#007cc7]">Produce Performance Data</h2>
                                    <p className="font-semibold text-gray-500">Create summary results within your forms to roll-up competency ratings, performance categories, goal scores, and lots more.</p>

                                </div>
                            </div>
                            <div className="card w-96">
                                <figure><MdStackedBarChart className="text-9xl text-[#007cc7]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#007cc7]">Store Performance Histories</h2>
                                    <p className="font-semibold text-gray-500">Organize every piece of employee performance history, qualitative and quantitative, to create a holistic view of performance..</p>

                                </div>
                            </div>
                            <div className="card w-96">
                                <figure><TbChartDotsFilled className="text-9xl text-[#007cc7]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#007cc7]">Analyze Performance Results</h2>
                                    <p className="font-semibold text-gray-500">Filter and group your database of performance data to find trends, compare departments, or identify future leaders..</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://assets-global.website-files.com/5ec8332c2b…/6430b004a31608337299d05b_product-performance.svg" alt="" />
                        </div>
                    </div>


                </div>





                <div className="flex justify-between items-center mt-20 mb-12">
                    <div className="mt-12">
                        <img className="w-[900px] relative" src="https://i.ibb.co/X7tQpcG/image.png" alt="" />
                        <div className="absolute -bottom-[1260px] left-[600px]">
                            <img className="w-[500px] rounded-2xl" src="https://i.ibb.co/NKYDWKZ/image.png" alt="" />
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-5xl font-bold text-black">Connect Performance  &<br /> People Data</h1>
                        <p className="text-gray-400">Bring together your performance data with employee data to answer<br /> the questions you care about most.</p>
                    </div>
                </div>



                <div className="flex justify-between items-center mt-80">

                    <div>

                        <h1 className="text-6xl font-bold">The Best Support in Performance Management</h1>
                        <p className="text-gray-500 mt-5">Account setup, live training sessions, a dedicated success manager, and phone support are always included. You <br /> will never be on your own with PerformYard.</p>

                    </div>


                    <div>
                        <img src="https://i.ibb.co/YLtFjTT/image.png" alt="" />
                    </div>
                </div>



            </div>

            <div className="bg-gray-100 mt-60 h-[30vh] rounded-t-full p-4">
                <h1 className="text-5xl text-center font-bold text-white pt-12">Streamline your performance management today</h1>
                <div className="flex justify-center space-y-4 mt-4">
                    <Link to={'/signin'}> <button className="cssbuttons-io-button transition mt-6">
                        Get started
                        <div className="icon py-1.5">

                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>

                            </svg>
                        </div>
                    </button> </Link>
                </div>
            </div>
        </>
    );
};

export default Perfomence;