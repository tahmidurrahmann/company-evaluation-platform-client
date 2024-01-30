import axios from "axios";

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL: 'https://company-evaluation-platform-server.vercel.app',
        // baseURL: 'http://localhost:5000',
    })

    return axiosSecure;
};

export default useAxiosSecure;