import { Helmet } from "react-helmet-async";
import ContactAbout from "./contact-about/ContactAbout";
import AboutInfo from "./About-ifo/About_info";

const AboutUs = () => {



  return (
    <div>
      <Helmet>
        <title>IONE | About Us</title>
      </Helmet>
      <h1>about us!</h1>
      <ContactAbout />
      <AboutInfo/>
    </div>
  );

};

export default AboutUs;
