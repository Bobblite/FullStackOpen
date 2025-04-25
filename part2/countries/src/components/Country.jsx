import { useEffect, useState } from "react"
import countriesServices from '../services/countries'

const Country = ({country}) => {
    const [weather, setWeather] = useState({})

    const convertKelvinToCelcius = (kelvin) => {
        return kelvin - 273.15
    }

    useEffect(() => {
        countriesServices
            .getWeather(country.latlng[0], country.latlng[1])
            .then(data => {
                const weather = {}
                weather['icon'] = data.weather[0].icon
                weather['temperature'] = data.main.temp
                weather['wind'] = data.wind.speed
                setWeather(weather)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>{country.name}</h1>
            Capital {country.capital}
            <br />
            Area {country.area}
            <h2>Languages</h2>
            <ul>
                {Object.keys(country.languages).map((keyName, keyIndex) => <li key={keyName}>{country.languages[keyName]}</li>)}
            </ul>
            <img src={country.flag} alt={country.alt} />
            <h2>Weather</h2>
            <p>Temperature {convertKelvinToCelcius(weather.temperature).toFixed(2)} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
            <p>Wind {weather.wind} m/s</p>
        </div>
    )
}

export default Country