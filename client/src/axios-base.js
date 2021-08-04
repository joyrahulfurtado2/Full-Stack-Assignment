import axios from 'axios';
import https from 'https';
const PORT = process.env.CUSTOM_PORT || 8080;


var _baseUrl = "http://localhost:"+PORT+"/api";

const instance = axios.create({
    baseURL: PORT,
    httpsAgent: new https.Agent({ rejectUnauthorized: false})
})

export default instance;