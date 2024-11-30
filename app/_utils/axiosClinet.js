import axios from 'axios';

const apiToken = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = "https://strapi-ecommerce-dashboard-production.up.railway.app/api";

const axiosClient = axios.create({
    baseURL: apiURL,
    headers: {
        Authorization: `${apiToken}`
    }
});

export default axiosClient;

