import { Helmet } from "react-helmet-async";
import ContactAbout from "./contact-about/ContactAbout";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>IONE | About Us</title>
      </Helmet>
      <h1>about us!</h1>
      <ContactAbout />
    </div>
  );
};

export default AboutUs;
