import useReviews from "../../../hooks/useReviews";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Loading from "../../../shared/Loading/Loading";



const Reviews3 = () => {

    const [allReviews, isReviews] = useReviews();

    if (isReviews) {
        return <Loading />
    }

    const pagination = {
        clickable: true
    };

    return (
        <div className="flex md:hidden my-4 p-4">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="flex justify-center items-center">
                    {
                        allReviews?.map(review => <SwiperSlide key={review?._id}>
                            <div >
                                <div className="card bg-base-100 p-6">
                                    <h1 className="font-bold pb-4 text-[#151746]">{review?.review}</h1>
                                    <div className="flex items-center gap-4">
                                        <img className="rounded-full w-[45px]" src={review?.userPicture} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <h1 className="font-bold text-sm text-[#151746]">{review?.userName}</h1>
                                            <h1 className="text-sm text-[#737490]">{review?.userEmail}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Reviews3;