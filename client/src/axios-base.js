import axios from 'axios';
import https from 'https';

var _baseUrl = "http://localhost:4000/api";

const instance = axios.create({
    baseURL: _baseUrl,
    httpsAgent: new https.Agent({ rejectUnauthorized: false})
})

export default instance;