import axios from 'axios';
import https from 'https';
const PORT = "http://localhost:"+process.env.CUSTOM_PORT+"/api" || "http://localhost:8080/api";


var _baseUrl = "http://localhost:8080/api";

const instance = axios.create({
    baseURL: PORT,
    httpsAgent: new https.Agent({ rejectUnauthorized: false})
})

export default instance;