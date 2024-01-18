import { Helmet } from "react-helmet";
import Excellence from "./Excellence/Excellence";
import GlobalCollection from "./GlobalCollection";
import Inclusivity from "./Inclusivity/Inclusivity"
import Innovation from "./Innovation/Innovation";
import Integrity from "./Integrity/Integrity";

const OurValuesOrMission = () => {

    return (
        <div>

            <Helmet>
                <title>IONE | Mission</title>
            </Helmet>
            <Integrity></Integrity>
            <GlobalCollection></GlobalCollection>
            <Innovation></Innovation>
            <Excellence></Excellence>
            <Inclusivity></Inclusivity>
        </div>

    );
};

export default OurValuesOrMission;