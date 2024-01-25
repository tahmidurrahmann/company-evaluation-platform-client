import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAgreement = () => {

    const axiosSecure = useAxiosSecure();

    const {data : allAgreements = [], isPending : isAgreement, refetch} = useQuery({
        queryKey : ["allAgreements"],
        queryFn : async () => {
            const res = await axiosSecure.get("/allAgreements");
            return res?.data;
        }
    })

    return [allAgreements, isAgreement, refetch];
};

export default useAgreement;