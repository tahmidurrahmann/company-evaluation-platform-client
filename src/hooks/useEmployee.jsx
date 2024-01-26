import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployee = () => {

    const axiosSecure = useAxiosSecure();

    const {data : employeeAgreements = [], isPending : isEmployee, refetch} = useQuery({
        queryKey : ["employeeAgreements"],
        queryFn : async () => {
            const res = await axiosSecure.get("/employee");
            return res?.data;
        }
    })

    return [employeeAgreements, isEmployee, refetch];
};

export default useEmployee;