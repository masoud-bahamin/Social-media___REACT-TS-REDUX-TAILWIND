import axios from "axios";

const baseUrl = "https://65292d2d55b137ddc83e5374.mockapi.io/"
const Axios = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

axios.interceptors.response.use(
    res => {
        console.log(res);
        return res
    }
    ,
    error => {
        console.log(error);
        return error

    }
)

export default Axios