import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployeeTask = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allEmployeeTask, isPending: isEmployeeTaskPending } = useQuery({
        queryKey: ["allEmployeeInfo"],
        queryFn: async () => {
            const res = await axiosSecure.get("/imployeeTasks");
            return res?.data;
        }
    })

    return [allEmployeeTask, isEmployeeTaskPending]
};

export default useEmployeeTask;