import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {

    const axiosSecure = useAxiosSecure();

 

    const { data: allUsers = [], isPending: isUser, refetch } = useQuery({
        queryKey: ["allUser"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res?.data;
        }
    })

    return [allUsers, isUser, refetch]
};

export default useUsers;