const OPEN_WEATHER_KEY_FORECAST = "e55196ae1c281c46da567618a7c61d93";





  
const getForecast = (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${OPEN_WEATHER_KEY_FORECAST}&units=metric&lang=ru`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Forecast:", data);

      if (data.cod !== "200") {
        console.log("Ошибка API прогноза:", data.message);
        return;
      }

      displayForecast(data);
    })
    .catch((error) => {
      console.log("Ошибка прогноза:", error);
    });
};

const displayForecast = (data) => {
  const cards = document.querySelectorAll(".card_forecast_week");

  const dailyForecasts = data.list.filter((item) => {
    return item.dt_txt.includes("12:00:00");
  });

  cards.forEach((card, index) => {
    const forecast = dailyForecasts[index];

    if (!forecast) return;

    const date = new Date(forecast.dt_txt);

    const dayName = date.toLocaleDateString("ru-RU", {
      weekday: "long",
    });

    const temperature = Math.round(forecast.main.temp);
    const description = forecast.weather[0].description;
    const weatherMain = forecast.weather[0].main;

    let icon = "../images/sunny.png";

    if (weatherMain === "Clouds") {
      icon = "../images/cloudy.png";
    } else if (weatherMain === "Rain") {
      icon = "../images/rainy.png";
    } else if (weatherMain === "Clear") {
      icon = "../images/sunny.png";
    } else if (weatherMain === "Snow") {
      icon = "../images/snowy.png";
    }

    card.querySelector(".card_forecast_day").textContent = dayName;
    card.querySelector(".temp").innerHTML = temperature + "&deg;C";
    card.querySelector(".desc").textContent = description;
    card.querySelector(".logo2").src = icon;
  });
};

 