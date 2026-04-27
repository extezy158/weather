const OPEN_WEATHER_KEY = "e55196ae1c281c46da567618a7c61d93";
// const OPEN_WEATHER_KEY = "451fcbf5883943868e9bed2af1784cb9";

const getWeather = (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPEN_WEATHER_KEY}&units=metric&lang=ru`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      if (data.cod !== 200) {
        console.log("Ошибка API:", data.message);
        return;
      }

      displayWeather(data);
      console.log("show data", data);
    })
    .catch((error) => {
      console.log("Ошибка:", error);
    });
};

const displayWeather = (data) => {
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;

  document.getElementsByClassName("desc").innerHTML = description;
  document.getElementsByClassName("temp").innerHTML = temperature + "&deg;";
  document.getElementsByClassName("card_forecast_title").innerHTML = data.name;
};


function liveSearch() {
  // Locate the card elements
  let cards = document.querySelectorAll('.card_forecast')
  // Locate the search input
  let search_query = document.getElementById("searchbox").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }
}