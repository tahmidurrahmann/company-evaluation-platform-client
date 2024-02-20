import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {

    const axiosSecure = useAxiosSecure();

    const {data : allPayments, isPending : isPayment, refetch} = useQuery({
        queryKey : ["payments"],
        queryFn : async () => {
            const res = await axiosSecure.get("/payments");
            return res?.data;
        }
    })

    return [allPayments, isPayment, refetch];
};

export default usePayment;