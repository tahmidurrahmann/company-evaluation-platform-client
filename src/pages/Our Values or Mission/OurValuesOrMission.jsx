import { Helmet } from "react-helmet";
import Excellence from "./Excellence/Excellence";
import GlobalCollection from "./GlobalCollection";
import Inclusivity from "./Inclusivity/Inclusivity"
import Innovation from "./Innovation/Innovation";
import Integrity from "./Integrity/Integrity";

const OurValuesOrMission = () => {

    return (
        <div className=" overflow-hidden">

            <Helmet>
                <title>IONE | Mission</title>
            </Helmet>
            <Integrity></Integrity>
            <div className="container mx-auto">
            <GlobalCollection></GlobalCollection>
            <Innovation></Innovation>
            </div>
            <Excellence></Excellence>
            <div className="container mx-auto">
            <Inclusivity></Inclusivity>
           </div>
        </div >

    );
};

export default OurValuesOrMission;