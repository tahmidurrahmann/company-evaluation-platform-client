import { BsGraphDownArrow } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import Evelotionchart1 from "./Evelotionchart1";
import Evaluationchart2 from "./Evaluationchart2";
import Evaluationchart3 from "./Evaluationchart3";
import Evaluationchart4 from "./Evaluationchart4";
import useAgreement from "../../../hooks/useAgreement";
import useEmployee from "../../../hooks/useEmployee";
import useUsers from "../../../hooks/useUsers";

const EvaluationBg = () => {
    const [allAgreement]= useAgreement()
    const [employeeAgreements] =useEmployee();
    const [allUser] =useUsers();
   
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-16 2xl:px-0">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">


                {/* -----------------***---------- 1st chart heree ----------------***------------ */}
                <div className="bg-white shadow-2xl lg:pl-5 lg:h-[45vh] rounded-xl">
                    <div className="flex justify-around">
                        <h1 className="text-3xl py-2 font-semibold ">Social perofomence <p className="text-lg text-gray-300">Poated</p></h1>


                        <div>
                            <BsGraphDownArrow className="text-4xl mt-10 text-blue-400" />
                        </div>
                    </div>

                    <div>

                        {/* ////1st  demo hard  */}
                        <div className="stats shadow lg:ml-8 mt-5">

                            <div className="stat place-items-center">
                                <div className="stat-title">Hr</div>
                                <div className="stat-value">{allAgreement?.length}</div>
                                <div className="stat-desc">From January 1st to February 1st</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Employ</div>
                                <div className="stat-value ">{employeeAgreements?.length}</div>
                                <div className="stat-desc ">↗︎ 40 (2%)</div>
                            </div>



                        </div>

                        {/* ////2nd demo hard  */}
                        <div className="stats shadow lg:ml-8 mt-5">

                            <div className="stat place-items-center">
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">31</div>
                                <div className="stat-desc">From January 1st to February 1st</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Users</div>
                                <div className="stat-value ">{allUser?.length}</div>
                                <div className="stat-desc ">↗︎ 40 (2%)</div>
                            </div>



                        </div>
                    </div>

                </div>

                {/* ---------------****------------ 2nd chart heree ---------------------****------- */}

                <div className="bg-white shadow-2xl pl-5 lg:h-[45vh] rounded-xl">
                    <div className="flex justify-around">
                        <h1 className="text-3xl py-2 font-semibold ">Monetary  Perfomence <p className="text-lg text-gray-300">Duration</p></h1>


                        <div>
                            <FiDollarSign className="text-4xl border-2 rounded-full mt-10 text-blue-400" />
                        </div>
                    </div>

                    <div>
                        <Evelotionchart1 />
                    </div>
                </div>

                {/*                chart 3 here  **************** */}

                <div>
                    <Evaluationchart2 />
                </div>

                {/* ************       2nd line data  here  1st table  ***************** */}
                <div>

                    <Evaluationchart3 />

                </div>

                {/* ************       2nd line data  here  2nd chart  ***************** */}

                <div>
                    <Evaluationchart4 />
                </div>


            </div>









        </div>
    );
};

export default EvaluationBg;