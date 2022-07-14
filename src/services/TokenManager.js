import {setStore, store} from '../store'

const TOKEN_KEY = 'token';
const AUTH_PREFIX = 'Bearer'

const TokenManager = {
    getToken() {
        return store.profile.token;
    },

    getAuthHeader() {
        return `${AUTH_PREFIX} ${this.getToken()}`;
    },

    saveToken(token) {
        setStore('profile', TOKEN_KEY, token);
    },

    deleteToken() {
        setStore('profile', TOKEN_KEY, null);
    }
}

export default TokenManager;