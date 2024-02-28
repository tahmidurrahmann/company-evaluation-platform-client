import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMessages = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: messages, isPending: isMessages } = useQuery({
        queryKey: ["allMessages"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/messages/${user?.email}`);
            return res?.data;
        }
    })

    return [messages, isMessages]
};

export default useMessages;