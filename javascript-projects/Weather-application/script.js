const apiKey="88214c3de1d7c02bbd81a4dab7e106f4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const seartBox=document.querySelector('.search input')
const seartBtn=document.querySelector('.search button')
const weatherIcon=document.querySelector('.weather-icon')

async function checkWeather(city){
    const response=await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    var data=await response.json(); 
    console.log(data);


    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"kmph";

    if(data.weather[0].main=='Clouds'){
        weatherIcon.src="asserts/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src="asserts/clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="asserts/rain.png";
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src="asserts/mist.png";
    }
    else if(data.weather[0].main==='Drizzle'){
        weatherIcon.src="asserts/drizzle.png";
    }

    document.querySelector('.weather').style.display="block"

}

seartBtn.addEventListener("click",()=>{
    checkWeather(seartBox.value);
})