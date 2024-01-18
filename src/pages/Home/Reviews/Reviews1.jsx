import Marquee from "react-fast-marquee";
import useReviews from '../../../hooks/useReviews';
import Loading from "../../../shared/Loading/Loading";

const Reviews1 = () => {

    const [allReviews, isReviews] = useReviews();

    if (isReviews) {
        return <Loading />
    }

    return (
        <div className="hidden md:flex my-4">
                <Marquee direction="right">
                    <div className="flex justify-center items-center gap-6">
                        {
                            allReviews.slice(0, 10)?.map(review => <div key={review?._id}>
                                <div className="card w-96 h-48 bg-base-100 p-6">
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

export default Reviews1;