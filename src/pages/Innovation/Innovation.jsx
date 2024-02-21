import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaUsersViewfinder } from "react-icons/fa6";
import { TbBrandFinder } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import MyTitle from "./MyTitle";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";

const Innovation = () => {
  const [service, setService] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getServiceData = () => {
    return axios.get("/inov.json").then((res) => setService(res.data));
  };

  const getReviewData = () => {
    return axios.get("/review.json").then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  };

  useEffect(() => {
    getServiceData();
    getReviewData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-24 space-y-6 font-serif">
      <Helmet>
        <title>IONE | Innovation</title>
      </Helmet>
      {/* banner  */}
      <SharedBanner heading="Innovation" passage="Innovation" />

      {/* title  */}
      <MyTitle text={`Best Reasons to Choose Our Services`} />

      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-6 px-4 my-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8 xl:px-0">
          {service.map((item) => (
            <div key={item?._id} className="block">
              <img
                alt=""
                src={item?.imgUrl}
                className="object-cover w-full h-64 rounded-lg sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                0{item?._id}.{item.title}
              </h3>

              <p className="max-w-sm mt-2 text-gray-700">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <div className="stack">
              <div className="text-center border border-base-content card bg-base-100">
                <div className="card-body">
                  <button className="btn btn-warning">GET STARTED NOW</button>
                </div>
              </div>
              <div className="ml-10 text-center border border-base-content card bg-base-100">
                <div className="card-body">
                  <button className="btn btn-primary">GET STARTED NOW</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-24">
            <div>
              <div className="items-center w-full mx-auto mb-10 text-center md:w-3/4">
                <h4 className="mb-5 text-xl font-semibold text-orange-600">
                  OUR WORKING PROCESS
                </h4>
                <MyTitle
                  text={"Creative & innovative solution for your company"}
                />
              </div>

              <div className="grid items-center justify-center grid-cols-1 px-4 mx-auto gap-14 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
                <div className="w-full bg-base-100 shadow-xl flex justify-center items-center lg:h-[200px] ">
                  <div className="p-6 ml-10 border border-gray-400 rounded-sm hover:bg-orange-400 ">
                    <HiMiniViewfinderCircle className="text-4xl" />
                  </div>
                  <div className="card-body">
                    <h2 className="text-base card-title md:text-xl">
                      01. Innovative Solutions
                    </h2>
                    <p>
                      Showcase how your company brings fresh and innovative
                      solutions to the table
                    </p>
                  </div>
                </div>
                <div className="w-full bg-base-100 shadow-xl flex justify-center items-center lg:h-[200px]">
                  <div className="p-6 ml-10 border border-gray-400 rounded-sm hover:bg-orange-400 ">
                    <FaUsersViewfinder className="text-4xl" />
                  </div>
                  <div className="card-body">
                    <h2 className="text-base card-title md:text-xl">
                      02. Client-Centric Approach
                    </h2>
                    <p>
                      Understanding and prioritizing the unique needs of your
                      clients.
                    </p>
                  </div>
                </div>
                <div className="w-full bg-base-100 shadow-xl flex justify-center items-center lg:h-[200px]">
                  <div className="p-6 ml-10 border border-gray-400 rounded-sm hover:bg-orange-400 ">
                    <TbBrandFinder className="text-4xl" />
                  </div>
                  <div className="card-body">
                    <h2 className="text-base card-title md:text-xl">
                      03. Proven Track Record
                    </h2>
                    <p>
                      Highlight successful case studies or examples that
                      demonstrate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* client say .. */}

        <div className="items-center mx-auto mt-24 mb-10 text-center">
          <h4 className="mb-5 text-xl font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h4>
          <MyTitle text={"What's our Client Say"} />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row border-green-950 bg-[#fbfbfb]">
          <div className="w-full lg:w-1/2 md:w-full">
            <img
              className="w-full"
              src="https://i.ibb.co/17v8VBz/client.jpg"
              alt=""
            />
          </div>
          <div className="w-full h-full border rounded-md lg:w-1/2 md:w-full">
            <div className="items-center h-full p-5 bg-[#fbfbfb]">
              <Slider {...settings} className="text-black border ">
                {reviews.map((item) => (
                  <div key={item._id} className="p-8 mt-6">
                    <GrStatusGood className="mb-6 text-6xl" />
                    <p className="text-2xl">{item.review}</p>
                    <h2 className="mt-4">{item.name}</h2>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
