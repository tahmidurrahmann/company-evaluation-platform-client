import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCompany = () => {

    const axiosSecure = useAxiosSecure();

    const { data: hrInfo, isPending: isHrPending, refetch } = useQuery({
        queryKey: ["allCompanyName"],
        queryFn: async () => {
            const res = await axiosSecure.get("/hrAndUsers");
            return res?.data;
        }
    })

    return [hrInfo, isHrPending, refetch];
};

export default useCompany;