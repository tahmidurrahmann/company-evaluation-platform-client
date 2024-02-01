import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useDragAndDrop = () => {

    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();

    const { data: allEmployee, isPending: isDrag, refetch } = useQuery({
        queryKey: ["employeeTask"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/imployeeTasks?email=${user?.email}`)
            return res?.data;
        }
    })

    return [allEmployee, isDrag, refetch];
};

export default useDragAndDrop;