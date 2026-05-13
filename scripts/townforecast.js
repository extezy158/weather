const OPEN_WEATHER_KEY_FORECAST = "e55196ae1c281c46da567618a7c61d93";


const displayForecast = (data, cards) => {
    if (!data || !data.list) {
      console.log("No forecast data available");
      return;
    }
  
    cards.forEach((card) => {
      const forecastList = card.querySelector(".forecast-list");
  
      data.list.slice(0, 5).forEach((forecast) => {
        const forecastItem = document.createElement("li");
        forecastItem.classList.add("forecast-item");
  
        const date = forecast.dt_txt.substr(0, 10);
        const temperature = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;
  
        const forecastDateElement = document.createElement("span");
        forecastDateElement.textContent = date;
  
        const forecastTemperatureElement = document.createElement("span");
        forecastTemperatureElement.textContent = `${temperature}°C`;
  
        const forecastDescriptionElement = document.createElement("span");
        forecastDescriptionElement.textContent = description;
  
        forecastItem.appendChild(forecastDateElement);
        forecastItem.appendChild(forecastTemperatureElement);
        forecastItem.appendChild(forecastDescriptionElement);
  
        forecastList.appendChild(forecastItem);
      });
    });
  };

  const getWeather = (cityName, card) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPEN_WEATHER_KEY_FORECAST}&units=metric&lang=ru`;
  
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
        const cards = document.querySelectorAll(".card_forecast_day");
        displayForecast(data, cards);
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  };

 