import MyTitle from "./MyTitle";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaUsersViewfinder } from "react-icons/fa6";
import { TbBrandFinder } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrStatusGood } from "react-icons/gr";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="font-serif space-y-6 mb-24">
      <Helmet>
        <title>IONE | Innovation</title>
      </Helmet>
      {/* banner  */}
      <SharedBanner heading="Innovation" passage="Innovation" />

      {/* title  */}
      <MyTitle text={` Best Reasons to Choose Our Services.`} />

      {/* Cards .. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:m-0">
        {service.map((item) => (
          <div
            key={item._id}
            className="group flex flex-col justify-between bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400 md:w-full lg:w-full p-2"
          >
            <div className="flex justify-between items-center group-hover:shadow-green-800">
              <div className="card-body w-1/3">
                <h2 className="card-title">01.{item.title}</h2>
                <p>- 01 {item.subtitle}</p>
              </div>

              <div>
                <button className="btn group-hover:bg-purple-500 transition-colors">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>

            <figure className="md:w-full lg:w-full">
              <img className="h-40 w-full" src={item.imgUrl} alt="" />

              <img className="h-40 w-full" src={item?.imgUrl} alt="" />
            </figure>
          </div>
        ))}
      </div>

      <div className="">
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

        <div className="flex justify-center items-center mt-24">
          <div>
            <div className="mb-10 items-center text-center mx-auto w-full md:w-3/4">
              <h4 className="text-xl text-orange-600 font-semibold mb-5">
                OUR WORKING PROCESS
              </h4>
              <MyTitle
                text={"Creative & innovative solution for your company"}
              />
            </div>

            <div className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto justify-center">
              <div className="w-full bg-base-100 shadow-xl flex justify-center items-center lg:h-[200px] ">
                <div className="rounded-sm ml-10 p-6 hover:bg-orange-400 border border-gray-400 ">
                  <HiMiniViewfinderCircle className="text-4xl" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">01. Innovative Solutions</h2>
                  <p>
                    Showcase how your company brings fresh and innovative
                    solutions to the table
                  </p>
                </div>
              </div>
              <div className="w-full bg-base-100 shadow-xl flex justify-center items-center lg:h-[200px]">
                <div className="rounded-sm ml-10 p-6 hover:bg-orange-400 border border-gray-400 ">
                  <FaUsersViewfinder className="text-4xl" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">02. Client-Centric Approach</h2>
                  <p>
                    understanding and prioritizing the unique needs of your
                    clients.
                  </p>
                </div>
              </div>
              <div className="w-full bg-base-100 shadow-xl flex justify-center items-center lg:h-[200px]">
                <div className="rounded-sm ml-10 p-6 hover:bg-orange-400 border border-gray-400 ">
                  <TbBrandFinder className="text-4xl" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">03. Proven Track Record</h2>
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

      <div className="">
        <div className="items-center text-center mx-auto mb-10 mt-24">
          <h4 className="text-xl text-orange-600 font-semibold mb-5">
            OUR TESTIMONIALS
          </h4>
          <MyTitle text={"What's our Client Say"} />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/2 md:w-full rounded-md">
            <img
              className="w-full border border-amber-900 rounded-md"
              src="https://i.ibb.co/8bJ7fqD/client.jpg"
              alt=""
            />
          </div>
          <div className="h-full w-full lg:w-1/2 border border-green-950  md:w-full rounded-md">
            {" "}
            <div className="bg-yellow-200 h-full items-center p-5 ">
              <Slider {...settings} className="border text-white bg-green-600 ">
                {reviews.map((item) => (
                  <div key={item._id} className="p-8 mt-6">
                    <GrStatusGood className="text-6xl mb-6" />

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
