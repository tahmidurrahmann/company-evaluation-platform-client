import { LuMessagesSquare } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCouponLine } from "react-icons/ri";

const HomeDetails = () => {
    return (
        <div className="mt-16">
            <h1 className="font-bold text-center text-xl md:text-2xl lg:text-3xl pt-6">Get ahead with IONE</h1>
            <p className="w-3/4 text-sm font-medium pt-4 md:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto text-center">We're serving up trusted insights and anonymous conversation, so you'll have the goods you need to succeed.</p>
            <div className="flex flex-wrap justify-center md:justify-between items-center max-w-screen-xl mx-auto py-12 gap-12 lg:gap-0">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="border border-black p-3 rounded-full">
                        <LuMessagesSquare size={26}/>
                    </div>
                    <p className="text-sm">Join your work community</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="border border-black p-3 rounded-full">
                        <CiMobile3 size={26} />
                    </div>
                    <p className="text-sm">Find and apply to jobs</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="border border-black p-3 rounded-full">
                        <HiOutlineBuildingOffice2 size={26} />
                    </div>
                    <p className="text-sm">Search company reviews</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="border border-black p-3 rounded-full">
                        <RiCouponLine size={26} />
                    </div>
                    <p className="text-sm">Compare salaries</p>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;