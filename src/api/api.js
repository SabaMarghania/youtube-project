import axios from 'axios';
const KEY = 'AIzaSyAxrp-LrMS9WdVeMXdCdP17agAIw8QcriI'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
})