import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import Reviews from "../Reviews/Reviews";
import OverView from "../OverView/OverView";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>IONE | Home</title>
            </Helmet>
            <MessengerCustomerChat
                pageId="202053042984596"
                appId="1019541442448361"
            />
            <Banner />
            <Logo />
            <Reviews />
            <OverView />

        </div>
    );

};

export default Home;
