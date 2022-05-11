import axios from "axios"

const HttpRequest = axios.create({
    baseURL: "",
    headers: { Authorization: `` }
});

export default HttpRequest;