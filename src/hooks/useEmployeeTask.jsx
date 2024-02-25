import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployeeTask = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allEmployeeTask, isPending: isEmployeeTaskPending, refetch } = useQuery({
        queryKey: ["allEmployeeInfo"],
        queryFn: async () => {
            const res = await axiosSecure.get("/imployeeTasks");
            return res?.data;
        }
    })

    return [allEmployeeTask, isEmployeeTaskPending, refetch];
};

export default useEmployeeTask;