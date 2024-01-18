import { Helmet } from "react-helmet";
import Excellence from "./Excellence/Excellence";
import GlobalCollection from "./GlobalCollection";
import Inclusivity from "./Inclusivity/Inclusivity"
import Integrity from "./Integrity/Integrity";

const OurValuesOrMission = () => {

    return (
        <div>
            <Helmet>
                <title>IONE | Mission</title>
            </Helmet>
            <Inclusivity></Inclusivity>
            <GlobalCollection></GlobalCollection>
            <Excellence></Excellence>
            <Integrity></Integrity>
        </div>

    );
};

export default OurValuesOrMission;