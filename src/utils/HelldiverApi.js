import axios from "axios";
const BASEURL = "https://api.helldivers2.dev/api/v1/";

export default {
    search: function (query) {
        return axios.get(BASEURL + query, {
            headers: {
                'X-Super-Client': 'Democracy Manifest',
                'X-Super-Contact': 'Matthew Lightfoot'
            }
        });
    }
};