import {
    config
} from '../config'
let api = config.development.API_URL;
let cors = config.development.CORS_URL;

export default {
    async getWoeid(payload) {
        const woeid = await axios.get(
            `${cors}${api}search/?query=${payload}`
        );
        return woeid;
    },
    async getWeather(woeid) {
        var response = await axios.get(
            `${cors}${api}${woeid.data[0].woeid}/2018/8/13/`
        )
        return response;
    }
}