import { IoMdArrowDropright } from "react-icons/io";

const Innovation = () => {
    return (
        <>
            <h1 className="font-bold text-5xl text-center mt-20 mb-10">Understand better your organization’s innovation capability level with our interactive innovation assessment tool</h1>
            <div className=" py-10 grid grid-cols-2">
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
                            <hr className="h-1 bg-white w-[500px] my-2" />
                            <p className="mb-8"> <strong>How</strong> top management envisions & understands innovation? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-blue-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">STRATEGY</button>
                            <hr className="h-1 bg-white w-[500px] my-2" />
                            <p className="mb-8"> <strong>Why</strong> do we innovate </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-gray-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">PEOPLE & CULTURE</button>
                            <hr className="h-1 bg-white w-[500px] my-2" />
                            <p className="mb-8"> <strong>Who</strong> is responsible for making innovation happen? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-sky-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">PROCESS</button>
                            <hr className="h-1 bg-white w-[500px] my-2" />
                            <p className="mb-8"> <strong>How</strong> effective are your innovation processes? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-pink-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">TOOLS</button>
                            <hr className="h-1 bg-white w-[500px] my-2" />
                            <p className="mb-8"> <strong>What</strong> facilitates our innovation? </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center">
                            <IoMdArrowDropright className="text-6xl text-orange-600" />
                        </div>
                        <div>
                            <button className="font-extrabold text-2xl">METRICS</button>
                            <hr className="h-1 bg-white w-[500px] my-2" />
                            <p className="mb-10"> <strong>How</strong> do we measure our innovation progress?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Innovation;