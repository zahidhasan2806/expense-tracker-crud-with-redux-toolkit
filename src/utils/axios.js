import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://think-in-redux-way-server.herokuapp.com",
});

export default axiosInstance;
