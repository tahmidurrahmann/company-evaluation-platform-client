import { IoMdArrowDropright } from "react-icons/io";
import SharedHeading from "../../../shared/SharedHeading/SharedHeading";

const Innovation = () => {
    return (
        <>
            <div className="mt-20 px-4 2xl:px-0 mb-10">
                <SharedHeading heading="Discover Your Innovation Potential" />
            </div>
            <div className="py-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="col-span-1 mx-auto flex ">
                    <img src="https://i.ibb.co/dM8z1p7/innovation-removebg-preview.png" alt="" />
                </div>
                <div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-pink-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">MANAGEMENT & LEADERSHIP</button>
                            <hr className="h-1 bg-white md:w-[500px] my-2" />
                            <p className="mb-8"> <strong>How</strong> top management envisions & understands innovation? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-blue-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">STRATEGY</button>
                            <hr className="h-1 bg-white md:w-[500px] my-2" />
                            <p className="mb-8"> <strong>Why</strong> do we innovate </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-gray-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">PEOPLE & CULTURE</button>
                            <hr className="h-1 bg-white md:w-[500px] my-2" />
                            <p className="mb-8"> <strong>Who</strong> is responsible for making innovation happen? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-sky-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">PROCESS</button>
                            <hr className="h-1 bg-white md:w-[500px] my-2" />
                            <p className="mb-8"> <strong>How</strong> effective are your innovation processes? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-pink-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">TOOLS</button>
                            <hr className="h-1 bg-white md:w-[500px] my-2" />
                            <p className="mb-8"> <strong>What</strong> facilitates our innovation? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-orange-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">METRICS</button>
                            <hr className="h-1 bg-white md:w-[500px] my-2" />
                            <p className="mb-10"> <strong>How</strong> do we measure our innovation progress?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Innovation;