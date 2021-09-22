import axios from 'axios';
const KEY = 'AIzaSyDq6B675_RNtizYSUYNf_fwAc7kUTV0qNU'

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})