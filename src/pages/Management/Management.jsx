import { Link } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAssistantDirection } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";
import { Helmet } from "react-helmet";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";

const Management = () => {
    return (
        <div>
            <Helmet>
                <title>IONE | Management</title>
            </Helmet>
            <SharedBanner passage="Management" heading="Management"/>
            <div className="flex flex-col lg:flex-row justify-between items-center max-w-screen-2xl mx-auto">
                <div className="ml-10 space-y-10">
                    <h1 className=" text-black pt-20 lg:pt-0  font-bold text-7xl">All solutions
                        <br /> in <span className="text-orange-500 ml-3"> one software</span></h1>
                    <p className="text-gray-500">Task tracking, customer support help desk, and workflow management all <br /> wrapped up into one simple issue tracker your team <br /> and customers will love.</p>
                    <input type="email" name="" className="p-2 border-orange-500 border-2 rounded-xl shadow-xl " placeholder="Your email" id="" />
                    <Link to={'/signin'}> <a className="bg-orange-500 py-2 px-3 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-orange-900 border-yellow-400 ">Get Started</a></Link>
                </div>
                <div className="">
                    <img className="w-[600px]" src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2327.png" alt="" />
                </div>
            </div>
            {/* secend section heree   */}
            <div className="mt-20 flex justify-center items-center">
                <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/07/Frame-122-2.png" alt="" />
            </div>
            {/* third section here      */}
            <div className="grid mt-16 container mx-auto lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1 mb-10  justify-evenly">
                <div className="bg-base m-12 lg:ml-0 p-6 rounded-xl shadow-gray-400 hover:shadow-orange-500 shadow-xl">
                    <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/05/Frame-82.png" alt="" />
                    <h1 className="text-xl font-bold">Simple budjet planning</h1>
                    <p className="text-gray-600">Integrating a straightforward budget planning  feature into our  route management system for <br /> enhanced financial control and efficiency.</p>
                </div>
                <div className="bg-base  m-12 lg:ml-0  p-6 rounded-xl shadow-gray-400 hover:shadow-orange-500 shadow-xl">
                    <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/05/Frame-81.png" alt="" />
                    <h1 className="text-xl font-bold">Instant getting started</h1>
                    <p className="text-gray-600">started simplifying onboarding  processesfor swift and efficient  implementation.</p>
                </div>
                <div className="bg-base m-12 lg:ml-0  p-6 rounded-xl shadow-gray-400 hover:shadow-orange-500 shadow-xl">
                    <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/05/Frame-80.png" alt="" />
                    <h1 className="text-xl font-bold">Instant getting started</h1>
                    <p className="text-gray-600">Elevate operational transparency and strategic  decision-making with our comprehensive <br /> financial reporting tools integrated seamlessly</p>
                </div>
                <div className="bg-base m-12 lg:ml-0  p-6 rounded-xl shadow-gray-400 hover:shadow-orange-500 shadow-xl">
                    <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/05/Frame-76-2.png" alt="" />
                    <h1 className="text-xl font-bold">Savings management</h1>
                    <p className="text-gray-600">Optimize savings effortlessly with our user-friendly savings management feature, empowering efficient financial control within the platform</p>
                </div>
            </div>
            {/* fourth section here      */}
            <div className="mt-52 container mx-auto flex flex-col lg:flex-row justify-between">
                <div>
                    <img className="w-[700px]" src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/XMLID_23509_.png" alt="" />
                </div>
                <div className="space-y-3 lg:mt-0 lg:text-start text-center mt-12">
                    <h1 className="text-xl  font-bold text-blue-400">SOFTWARE CAPABILITIES</h1>
                    <h1 className="text-5xl font-bold ">Make your work </h1>
                    <h1 className="text-5xl font-bold"> great. <span className="text-orange-500">Grow up your</span></h1>
                    <p><span className="text-5xl font-bold text-orange-500">business</span></p>
                    <p className="text-black">Smart solutions for a brighter future: Streamline operations,<br /> boost efficiency, and achieve your goals with innovative<br /> strategies. Elevate your business intelligence and stay ahead <br /> in the ever-evolving landscape of success</p>
                    <div className="flex justify-center lg:justify-normal pb-1 items-center gap-3">
                        <FaCloudDownloadAlt className="text-2xl  text-blue-400" />
                        <p className="font-semibold">Cloud services</p>
                    </div>
                    <div className="flex justify-center lg:justify-normal pb-1 items-center gap-3">
                        <MdAssistantDirection className="text-2xl  text-orange-400" />
                        <p className="font-semibold">Cloud services</p>
                    </div>
                    <div className="flex  justify-center lg:justify-normal pb-1 items-center gap-3">
                        <FaFileArchive className="text-2xl  text-yellow-600" />
                        <p className="font-semibold">Cloud services</p>
                    </div>
                </div>
            </div>
            {/* five section here*/}
            <div className="bg-shadow-700 shadow-2xl hover:shadow-orange-500 mb-12 h-[50vh] rounded-tr-full container mx-auto rounded-bl-full  mt-32">
                <h1 className=" text-center pt-20 lg:text-5xl font-bold">Connect with us. We’re ready to <br /> talk about opportunities</h1>
                <div className="flex justify-center space-y-4 mt-4">
                    <Link to={'/signIn'}  className="bg-orange-500 py-2 px-3 lg:mt-4 rounded-xl text-white font-semibold ml-1 border-2 shadow-xl shadow-orange-900 border-yellow-400 ">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Management;