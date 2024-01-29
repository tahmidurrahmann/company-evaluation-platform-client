import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const SharedBanner = ({ heading, passage }) => {
    return (
        <div style={{
            backgroundImage: "url(" + "https://i.ibb.co/P9Yn9TB/shubham-dhage-T9r-Kv-I3-N0-NM-unsplash.jpg" + ")"}} className="bg-contain sm:bg-cover bg-center bg-no-repeat">
            <div className="max-w-screen-xl mx-auto px-4 py-28 md:py-48 lg:py-56 w-full 2xl:px-0 space-y-3">
                <h1 className="text-white text-xl md:text-3xl font-semibold lg:text-4xl xl:text-5xl">{heading}</h1>
                <div className="flex items-center gap-2">
                    <Link className="text-white hover:text-gray-200 text-xs md:text-base" to="/">Home</Link>
                    <FaChevronRight className="text-white" />
                    <p className="text-white text-xs md:text-base">{passage}</p>
                </div>
            </div>
        </div>
    );
};

export default SharedBanner;