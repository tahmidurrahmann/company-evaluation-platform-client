import useReviews from '../../../hooks/useReviews';
import Marquee from "react-fast-marquee";
import Loading from '../../../shared/Loading/Loading';

const Reviews2 = () => {

    const [allReviews, isReviews] = useReviews();

    if (isReviews) {
        return <Loading />
    }

    return (
        <div className='my-6 hidden md:flex'>
            <Marquee>
                <div className="flex justify-center items-center gap-6" data-aos="fade-up" data-aos-duration="1500">
                    {
                        allReviews.slice(15, 30)?.map(review => <div key={review?._id}>
                            <div className="card w-96 h-48 bg-base-100 border-2 p-6">
                                <h1 className="font-bold pb-4 text-[#151746]">{review?.review}</h1>
                                <div className="flex items-center gap-4">
                                    <img className="rounded-full w-[45px]" src={review?.userPicture} alt="" />
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-bold text-sm text-[#151746]">{review?.userName}</h1>
                                        <h1 className="text-sm text-[#737490]">{review?.userEmail}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Reviews2;