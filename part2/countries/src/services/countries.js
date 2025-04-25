import axios from "axios"

const api_key = import.meta.env.VITE_KEY

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/'


const getAll = () => {
    const request = axios.get(`${baseURL}/api/all`)
    return request.then(response => response.data)
}

const getWeather = (lat, lon) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default {
    getAll,
    getWeather
}