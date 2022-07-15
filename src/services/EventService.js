import api from "./axiosInstance";
import TokenManager from "./TokenManager";
import {store, setStore} from "../store";
import {produce} from "solid-js/store";

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

    applyTeam(event, memberName, members) {
        return new Promise((resolve, reject) => {
            const teamInfo = {
                name: memberName,
                members: members,
                event: event
            }
            setStore('teams', v => [...v, teamInfo]);
            setStore('events', v => [...v, teamInfo]);
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