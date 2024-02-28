import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseeAllmployee = () => {
    const {user} =useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isEmployee, isPending: isPending } =useQuery({
        queryKey:["allEmployee",user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/employee/${user?.email}`)
            return res?.data?.isEmployee;   
        }
        
    })

    return [isEmployee,isPending];
};

export default UseeAllmployee;