import Axios from "axios";


const instance = Axios.create({
    baseURL:'http://api.tvmaze.com',
    timeout:3000,
    // headers:{},EpisodeApi.js 
})

export default instance;