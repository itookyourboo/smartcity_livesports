import axios from "redaxios";
import TokenManager from "./TokenManager";

const api = axios.create({
    baseURL: 'https://06ca-91-204-150-197.eu.ngrok.io/api',
    transformRequest: [
        (data, headers) => {
            if (TokenManager.getToken())
                headers['Authorization'] = TokenManager.getAuthHeader();
            return JSON.stringify(data);
        }
    ],
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;