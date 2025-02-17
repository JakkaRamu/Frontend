import { useState } from "react"


const Weather=()=>{
    const apiKey="88214c3de1d7c02bbd81a4dab7e106f4"
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="
    const [city,setCity]=useState('')
    const [weather,setWeather]=useState(null)
    const [showDetails,setShowDetails]=useState(false)
    const handleInput=(e)=>{
        setCity(e.target.value)
    }
    async function fetchData(city){
        const res=await fetch(`${apiUrl}${city}&appid=${apiKey}`)
        if(!res.ok){
            throw new Error("City Not Found")
        }
        const data=await res.json()
        setWeather(data)
        setShowDetails(true)
        setCity('')
    }
    
    return <>

        <div className="container">
            <div className="hero">
                <div className="input">
                    <input type="text" placeholder="Enter City" value={city} onChange={handleInput}/>
                    <button onClick={()=>fetchData(city)}>Search</button>
                </div>
                {
                    showDetails?<div className="info">
                                    <div className="temp">
                                        <p>Temperature:{weather.main.temp}°C</p>
                                    </div>
                                    <div className="desc">
                                        <p>Weather:{weather.weather[0].description}</p>
                                    </div>
                                    <div className="WH">
                                        <p>Humidity: {weather.main.humidity}%</p>
                                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                                    </div>
                                </div>:null
                }
            </div>
        </div>
    </>
}
export default Weather;