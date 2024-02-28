import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMessage = () => {

    const axiosSecure = useAxiosSecure();

    const { data: message, isMessage, refetch } = useQuery({
        queryKey: ["message"],
        queryFn: async () => {
            const res = await axiosSecure.get("/messages");
            return res?.data;
        }
    })

    return [message, isMessage, refetch]
};

export default useMessage;