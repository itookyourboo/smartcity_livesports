import api from "./axiosInstance";
import TokenManager from "./TokenManager";
import {store, setStore} from "../store";

const EventService = {
    allEvents() {
        return api.get("events")
            .then(res => {
                let { data, status } = res;
                return { data, status };
            });
    },

    fullEvent(id) {
        return api.get(`events/${id}`)
            .then(res => {
                let { data, status } = res;
                return { data, status };
            });
    },

    applyTeam(eventId, memberName, members) {
        return new Promise((resolve, reject) => {
            const teamInfo = {
                name: memberName,
                members: members,
                eventId: eventId
            }
            setStore('teams', v => [...v, teamInfo]);
            setStore('events', v => {
                v[eventId] = teamInfo
            });
            resolve();
        });
        // return api.post('teams', {eventId, memberName, members})
        //     .then(res => {
        //         let { data, status } = res;
        //         return { data, status };
        //     })
    }
}

export {EventService};