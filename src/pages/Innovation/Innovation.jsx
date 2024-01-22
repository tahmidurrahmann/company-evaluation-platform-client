import MyTitle from "./MyTitle";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaUsersViewfinder } from "react-icons/fa6";
import { TbBrandFinder } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrStatusGood } from "react-icons/gr";

const Innovation = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="space-y-24 font-serif mb-52">
      {/* banner  */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/5FTy9DR/banner-Pic.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-30">
            <h1 className="mb-5 text-5xl font-bold">
              Our Journey in Technological Excellence
            </h1>
            <p className="mb-5">
              Explore our story of technological excellence,
              <br /> where innovative solutions pave the way for a digital
              tomorrow, and each milestone signifies a step towards a brighter
              future.
            </p>
          </div>
        </div>
      </div>

      {/* title  */}
      <MyTitle text={`Best Reasons to Choose Our Services.`} />

      {/* Cards .. */}
      <div className="grid grid-cols-3 gap-14  container mx-auto">
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
        <div className="group bg-base-100 shadow-xl transition-transform transform-gpu hover:shadow-purple-400">
          <div className="flex justify-between items-center w-96 group-hover:shadow-green-800">
            <div className="card-body w-1/3">
              <h2 className="card-title">01.Technology demands</h2>
              <p>- 01 Case Studies</p>
            </div>

            <div>
              <button className="btn group-hover:bg-purple-500 transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <figure className="w-96">
            <img src="https://i.ibb.co/Kj7bRqN/card.jpg" alt="" />
          </figure>
        </div>
      </div>

      {/* now i am pushing */}

      <div className="mb-24  container mx-auto">
        {/* GET STARTED NOW Button  */}
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

        <div className="min-h-screen flex justify-center items-center ">
          <div>
            <div className="items-center text-center mx-auto">
              <h4 className="text-xl text-orange-600 font-semibold mb-5">
                OUR WORKING PROCESS
              </h4>
              <MyTitle
                text={"Creative & innovative solution for your company"}
              />
            </div>

            <div className="flex justify-between">
              <div className="w-full bg-base-100 shadow-xl flex justify-center items-center">
                <div className="rounded-sm ml-10 p-6 hover:bg-orange-400 border border-gray-400 ">
                  <HiMiniViewfinderCircle className="text-4xl" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">01. Find New Ideas</h2>
                  <p>
                    There are many variations of pass of Lorem Ipsum donor
                    available.
                  </p>
                </div>
              </div>
              <div className="w-full bg-base-100 shadow-xl flex justify-center items-center">
                <div className="rounded-sm ml-10 p-6 hover:bg-orange-400 border border-gray-400 ">
                  <FaUsersViewfinder className="text-4xl" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">02. Find New Ideas</h2>
                  <p>
                    There are many variations of pass of Lorem Ipsum donor
                    available.
                  </p>
                </div>
              </div>
              <div className="w-full bg-base-100 shadow-xl flex justify-center items-center">
                <div className="rounded-sm ml-10 p-6 hover:bg-orange-400 border border-gray-400 ">
                  <TbBrandFinder className="text-4xl" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">03. Find New Ideas</h2>
                  <p>
                    There are many variations of pass of Lorem Ipsum donor
                    available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* client say .. */}

      <div className="container mx-auto">
        <div className="items-center text-center mx-auto mb-24">
          <h4 className="text-xl text-orange-600 font-semibold mb-5">
            OUR TESTIMONIALS
          </h4>
          <MyTitle text={"What's our Client Say"} />
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-1/2 rounded-md">
            <img
              className="w-full border border-amber-900 rounded-md"
              src="https://i.ibb.co/8bJ7fqD/client.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 border border-amber-900 rounded-md">
            {" "}
            <div className="bg-yellow-200 border border-amber-900 mx-10">
              <Slider {...settings} className="border text-white bg-slate-500">
                <div className="p-8">
                  <GrStatusGood className="text-6xl mb-4" />

                  <p className="text-2xl">
                    Thank you for entrusting us with [specific aspect or
                    project]. We value the partnership we've built and look
                    forward to continuing to exceed your expectations in the
                    future. If there's anything more we can do to enhance your
                    experience, please don't hesitate to let us know.
                  </p>
                  <h2 className="mt-4">Jonson abress</h2>
                </div>

                <div className="p-8">
                  <GrStatusGood className="text-6xl mb-4" />

                  <p className="text-2xl">
                    Thank you for entrusting us with [specific aspect or
                    project]. We value the partnership we've built and look
                    forward to continuing to exceed your expectations in the
                    future. If there's anything more we can do to enhance your
                    experience, please don't hesitate to let us know.
                  </p>
                  <h2 className="mt-4">Jonson abress</h2>
                </div>

                <div className="p-8">
                  <GrStatusGood className="text-6xl mb-4" />

                  <p className="text-2xl">
                    Thank you for entrusting us with [specific aspect or
                    project]. We value the partnership we've built and look
                    forward to continuing to exceed your expectations in the
                    future. If there's anything more we can do to enhance your
                    experience, please don't hesitate to let us know.
                  </p>
                  <h2 className="mt-4">Jonson abress</h2>
                </div>

                <div className="p-8">
                  <GrStatusGood className="text-6xl mb-4" />

                  <p className="text-2xl">
                    Thank you for entrusting us with [specific aspect or
                    project]. We value the partnership we've built and look
                    forward to continuing to exceed your expectations in the
                    future. If there's anything more we can do to enhance your
                    experience, please don't hesitate to let us know.
                  </p>
                  <h2 className="mt-4">Jonson abress</h2>
                </div>

                <div className="p-8">
                  <GrStatusGood className="text-6xl mb-4" />

                  <p className="text-2xl">
                    Thank you for entrusting us with [specific aspect or
                    project]. We value the partnership we've built and look
                    forward to continuing to exceed your expectations in the
                    future. If there's anything more we can do to enhance your
                    experience, please don't hesitate to let us know.
                  </p>
                  <h2 className="mt-4">Jonson abress</h2>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;