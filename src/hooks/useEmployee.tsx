import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export interface EmployeeAgreement {
    _id: string;
    company : string;
    email : string;
    imageURL : string;
    name : string;
    role : string;
    status : string;
}

const useEmployee = (): [EmployeeAgreement[], boolean, () => void] => {
    const axiosSecure = useAxiosSecure();

    const { data: employeeAgreements = [], isPending: isEmployee, refetch } = useQuery<EmployeeAgreement[], Error>({
        queryKey: ["employeeAgreements"],
        queryFn: async () => {
            const res = await axiosSecure.get("/employee");
            return res?.data;
        }
    });

    return [employeeAgreements, isEmployee, refetch];
};

export default useEmployee;
