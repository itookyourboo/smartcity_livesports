import api from "./axiosInstance";
import TokenManager from "./TokenManager";

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
        return api.post('teams', {eventId, memberName, members})
            .then(res => {
                let { data, status } = res;
                return { data, status };
            })
    }
}

export {EventService};