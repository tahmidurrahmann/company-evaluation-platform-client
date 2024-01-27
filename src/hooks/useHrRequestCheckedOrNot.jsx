import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHrRequestCheckedOrNot = () => {

    const { user } = useAuth();
    
    const axiosSecure = useAxiosSecure();
    const { data: hrRequestCheck, isPending: isHr } = useQuery({
        queryKey: ["hrRequestChecked", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allAgreements/${user?.email}`);
            return res?.data;
        }
    })

    return [hrRequestCheck, isHr];
};

export default useHrRequestCheckedOrNot;