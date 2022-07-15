import api from "./axiosInstance";

const FeedService = {
    allFeeds() {
        return api.get("feed")
            .then(res => {
                let { data, status } = res;
                return { data, status };
            });
    },

    fullFeed(id) {
        return api.get(`feed/${id}`)
            .then(res => {
                let { data, status } = res;
                return { data, status };
            });
    }
}

export {FeedService};