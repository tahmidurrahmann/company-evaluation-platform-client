import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useHrMessages = () => {

    const axiosSecure = useAxiosSecure();

    const { data: hrMessages, isPending: isMessages, refetch } = useQuery({
        queryKey: ["hrMessage"],
        queryFn: async () => {
            const res = await axiosSecure.get("/hrMessages");
            return res?.data;
        }
    })

    return [hrMessages, isMessages, refetch];
};

export default useHrMessages;