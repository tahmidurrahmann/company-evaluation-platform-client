import axios from "axios";

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL: 'https://company-evaluation-platform-server.vercel.app',
    })

    return axiosSecure;
};

export default useAxiosSecure;