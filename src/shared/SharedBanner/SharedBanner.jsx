import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const SharedBanner = ({ heading, passage, bannerImg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          bannerImg
            ? bannerImg
            : "https://i.ibb.co/P9Yn9TB/shubham-dhage-T9r-Kv-I3-N0-NM-unsplash.jpg"
        })`,
      }}
      className="bg-center bg-no-repeat bg-contain sm:bg-cover"
    >
      <div className="w-full px-4 mx-auto space-y-3 max-w-screen-2xl py-28 md:py-48 lg:py-56 2xl:px-0">
        <h1 className="text-xl font-semibold text-white md:text-3xl lg:text-4xl xl:text-5xl">
          {heading}
        </h1>
        <div className="flex items-center gap-2">
          <Link
            className="text-xs text-white hover:text-gray-200 md:text-base"
            to="/"
          >
            Home
          </Link>
          <FaChevronRight className="text-white" />
          <p className="text-xs text-white md:text-base">{passage}</p>
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;
