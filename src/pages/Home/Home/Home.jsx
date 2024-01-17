import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IONE | Home</title>
            </Helmet>
            <Banner />
            <Logo />
            <Reviews />
        </div>
    );
};

export default Home;