import axios from "axios";

export default axios.create({
    baseURL: `http://${process.env.REACT_APP_BACKEND_API_HOST}:${process.env.REACT_APP_BACKEND_API_PORT}/api`,
});
