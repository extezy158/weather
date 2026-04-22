let button=document.querySelector('.Lupa');
let inputvalue=document.querySelector('.Searchbar');
let nameValue=document.querySelector('.name');
let temp=document.querySelector('.temp');
let desc=document.querySelector('.desc');

button.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/3.0/weather?q=${inputvalue.value}&units=metric&appid=25f0a42a0ec1b04a2665dd81d403a6f5`)
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&q=${inputvalue.value}&exclude={part}&appid={API key}`)
    .then(response => response.json())
    .then(
        displayData
    )
})

const displayData=(weather)=>{
   temp.innerText=`${weather.main.temp}°C`;
   desc.innerText=`${weather.weather[0].main}`;
}