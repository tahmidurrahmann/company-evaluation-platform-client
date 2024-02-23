import { Helmet } from "react-helmet";
import ApplyForEmployee from "./ApplyForEmployee";
import ApplyForHr from "./ApplyForHr";

const Apply = () => {
    return (
        <div>
            <Helmet>
                <title>IONE | Job Hub</title>
            </Helmet>
            <ApplyForHr />
            <ApplyForEmployee />
        </div>
    );
};

export default Apply;