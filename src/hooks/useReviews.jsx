import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {

    const axiosPublic = useAxiosPublic();

    const {data : allReviews = [] , isPending : isReviews } = useQuery({
        queryKey : ["reviews"],
        queryFn : async () => {
            const res = await axiosPublic.get("/reviews");
            return res.data;
        }
    })

    return [allReviews, isReviews]
};

export default useReviews;