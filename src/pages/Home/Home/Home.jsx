import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
<<<<<<< HEAD
import AboutUs from "../../About-us/Aboutus";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>IONE | Home</title>
      </Helmet>
      <Banner />
      {/* About Page */}
      <AboutUs />
    </div>
  );
=======
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
>>>>>>> fc635a27812cbf5b1de93f322ea62ac66ed2bf58
};

export default Home;
