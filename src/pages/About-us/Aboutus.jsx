import { Helmet } from "react-helmet-async";
import ContactAbout from "./contact-about/ContactAbout";
import AboutInfo from "./About-ifo/About_info";
import About_valus from "./About_values/About_valus";
import About_otherss from "./About_Others/About_otherss";

const AboutUs = () => {



  return (
    <div>
      <Helmet>
        <title>IONE | About Us</title>
      </Helmet>
      <ContactAbout />
      <About_otherss />
      <About_valus/>
      <AboutInfo/>
   
    </div>
  );

};

export default AboutUs;
