import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import Reviews from "../Reviews/Reviews";
import OverView from "../OverView/OverView";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IONE | Home</title>
            </Helmet>
            <Banner />
            <Logo />
            <Reviews />
            <OverView />
        </div>
    );

};

export default Home;
