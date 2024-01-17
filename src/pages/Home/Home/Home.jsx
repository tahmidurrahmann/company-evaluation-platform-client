import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IONE | Home</title>
            </Helmet>
            <Banner />
            <Logo />
        </div>
    );
};

export default Home;