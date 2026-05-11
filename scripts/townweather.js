const date = new Date();
document.getElementById("current-date").textContent = date.toLocaleDateString();

const OPEN_WEATHER_KEY = "e55196ae1c281c46da567618a7c61d93";

const getWeather = (cityName, card) => {
  const furl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${OPEN_WEATHER_KEY}&units=metric&lang=ru`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPEN_WEATHER_KEY}&units=metric&lang=ru`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      if (data.cod !== 200) {
        console.log("Ошибка API:", data.message);
        card.querySelector(".temp").innerHTML = "Ошибка";
        card.querySelector(".desc").innerHTML = data.message;
        return;
      }

      displayWeather(data, card);
    })
    .catch((error) => {
      console.log("Ошибка:", error);
    });
};




const displayWeather = (data, card) => {
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;

  const img=data.weather[0].main;

let icon;

if (img === "Clouds") {
  icon = "../images/cloudy.png";
} else if (img === "Rain") {
  icon = "../images/rainy.png";
} else if(img=="Clear") {
  icon = "../images/sunny.png";
}


  card.querySelector(".temp").innerHTML = temperature + "&deg;C";
  card.querySelector(".desc").innerHTML = description;
  card.querySelector(".logo2").src = icon;
};

const loadCitiesWeather = () => {
  const cards = document.querySelectorAll(".card_forecast");

  cards.forEach((card) => {
    const cityName = card.querySelector(".card_forecast_title").innerText.trim();
    getWeather(cityName, card);
  });
};
loadCitiesWeather();