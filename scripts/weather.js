const date = new Date();
document.getElementById("current-date").textContent = date.toLocaleDateString();

const OPEN_WEATHER_KEY = "e55196ae1c281c46da567618a7c61d93";

const getWeather = (cityName, card) => {
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

function liveSearch() {
  let cards = document.querySelectorAll(".card_forecast");
  let searchInput = document.getElementById("searchbox");

  if (!searchInput) {
    console.log("Не найден input с id='searchbox'");
    return;
  }

  let search_query = searchInput.value;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
      cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
}

loadCitiesWeather();

const button = document.getElementById('language-switcher');
const body = document.body;

button.addEventListener('click', function() {
  const currentLanguage = body.getAttribute('data-language');
  const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';

  body.setAttribute('data-language', newLanguage);

  // Обновите контент на странице в соответствии с новым языком
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(function(element) {
    const translation = getTranslation(element, newLanguage);
    if (translation) {
      element.textContent = translation;
    }
  });
});

function getTranslation(element, language) {
  const translationKey = element.getAttribute('data-translate');
  if (!translationKey) {
    return null;
  }

  const translations = {
    en: {
        /* Переводы на английский язык
        'Hello': 'Hello',
        'Welcome': 'Welcome',
         Другие переводы*/
         't1':'English',
         't2':'The future looks bright-stay tuned!',
         't3':'Welocme to SeifSkies',
         't4':'At SeifSkies, we believe weather should not just be data, it should be clear, beautiful, and useful. This app was created to help you stay prepared for your day with accurate forecasts, stunning visuals, and smart features that make checking the weather feel less like a chore and more like a glance at the sky. Whether you are planning a trip, dressing for the day, or just curious about the clouds above',
         't5':'Major Cities Weather'
        },

    ru: {
      /* Переводы на русский язык
      'Hello': 'Привет',
      'Welcome': 'Добро пожаловать',
       Другие переводы*/
       't1':'Русский',
       't2':'Будущее выглядит светлым — следите за обновлениями!',
       't3':'Добро пожаловать в SeifSkies',
       't4':'В SeifSkies мы считаем, что погода не должна быть просто данными, она должна быть ясной, красивой и полезной.Это приложение было создано, чтобы помочь вам подготовиться к новому дню благодаря точным прогнозам, потрясающим визуальным эффектам и интеллектуальным функциям, благодаря которым проверка погоды становится не рутиной, а взглядом на небо.Планируете ли вы поездку, одеваетесь на день или просто интересуетесь облаками над головой.',
       't5':'Погода в крупных городах'
    }
  
  };

  return translations[language][translationKey];
}

const Card = document.getElementById('card');
Card.addEventListener('click', () => {
    window.location.href = '../townpage/townweather.html';
});

const Card2 = document.getElementById('card2');
Card2.addEventListener('click', () => {
    window.location.href = '../townpage/townweather.html';
});

const Card3 = document.getElementById('card3');
Card3.addEventListener('click', () => {
    window.location.href = '../townpage/townweather.html';
});

const Card4 = document.getElementById('card4');
Card4.addEventListener('click', () => {
    window.location.href = '../townpage/townweather.html';
});

