import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEmployeeProfile = () => {

    const { user } = useAuth();
    
    const axiosSecure = useAxiosSecure();
    const { data: employeeRequestCheck, isPending: isEmployee } = useQuery({
        queryKey: ["employeeRequestChecked", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee/${user?.email}`);
            return res?.data;
        }
    })

    return [employeeRequestCheck, isEmployee];
};

export default useEmployeeProfile;