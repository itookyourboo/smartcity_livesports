import {createStore} from "solid-js/store";

const [store, setStore] = createStore({
    profile: {
        username: null,
        email: null,
        token: null,
    },
    teams: [],
    events: []
});

export {store, setStore};