import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHr = () => {

    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isHr, isPending: isPending } = useQuery({
        queryKey: ["allHrs", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/hr/${user?.email}`);
            return res?.data?.isHr;
        }
    })

    return [isHr, isPending]
};

export default useHr;