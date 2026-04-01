const OPEN_WEATHER_KEY = "e55196ae1c281c46da567618a7c61d93";
const OPEN_WEATHER_URL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${OPEN_WEATHER_KEY}`;

fetch(OPEN_WEATHER_URL)
  .then(response => response.json())
  .then(data => console.log(data));

  data.main.temp
data.weather[0].description 

const getWeather=(cityName)=>{
    const fetchWeather=fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${OPEN_WEATHER_KEY}`+
        cityName+
        `&appid=${OPEN_WEATHER_KEY}`+
        `e55196ae1c281c46da567618a7c61d93`+
        `&units=imperial`

    );

    fetchWeather
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        displayWeather(data);
    })
    .catch(function(){

    });
}


const displayWeather=(data)=>{
let fahrenheit = Math.round(data.main.temp);
    let description = data.weather[0].description;
   
    document.getElementById("description").innerHTML=description;
    document.getElementById("temp").innerHTML=fahrenheit+'&deg;';
    document.getElementById("location").innerHTML=data.name;
}

window.onload=function() {
getWeather(' Minsk ');
}