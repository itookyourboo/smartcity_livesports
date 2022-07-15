import api from "./axiosInstance";
import TokenManager from "./TokenManager";
import {store, setStore} from "../store";

const AuthService = {
    authenticate(email, password) {
        return api.post("login", {email, password})
            .then(res => {
                let { data, status } = res;
                setStore('store', 'profile', 'email', email);
                TokenManager.saveToken(data.token);
                return { data, status };
            })
            .catch(err => {
                throw Error(JSON.stringify(err));
            });
    },

    register(username, email, password) {
        return api.post("registration", {username, email, password})
            .then(res => {
                let { data, status } = res;
                setStore('store', 'profile', 'email', email);
                setStore('store', 'profile', 'username', username);
                TokenManager.saveToken(data.token);
                return { data, status };
            })
            .catch(err => {
                throw Error(JSON.stringify(err));
            });
    },

    signOut() {
        TokenManager.deleteToken();
    }
}

export {AuthService};