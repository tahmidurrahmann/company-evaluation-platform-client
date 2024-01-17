import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
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
};

export default Home;
