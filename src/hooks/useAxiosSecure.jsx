import axios from "axios";

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        // baseURL: 'http://localhost:5000',
        baseURL: 'https://company-evaluation-platform-server.vercel.app',
    })

    return axiosSecure;
};

export default useAxiosSecure;