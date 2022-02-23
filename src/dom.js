import {fetchWeather,fetchCoords} from "./weather";
import { Dropdown } from "dropthings";

async function showWeather(city, pos, units='metric'){
  let coords = pos
  let symbol;
  if(units ==='metric') symbol = '°C';
  else  symbol = 'F';

  if(city !== 'none') coords = await fetchCoords(city)
  else{
    const ubi = await reverseGeo(coords.lat,coords.lon);
    coords.name = ubi.locality;
    coords.state = ubi.principalSubdivision
    coords.country = ubi.countryName
  }
  const obj = await fetchWeather(coords.lat,coords.lon,units);
  console.log(obj)
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentW = obj.current;
  const dailyW = obj.daily;
  const hourlyW = obj.hourly;
  showCurrentWeather()
  showHourWeather()
  showDailyWeather()

  function showCurrentWeather(){
    const divTemp = document.querySelector('.temp');
    const city = document.querySelector('.city');
    const divTime = document.querySelector('.time');
    const details = document.querySelectorAll('.detail');
    const mainIcon = document.querySelector('.main-icon');
    mainIcon.src = `http://openweathermap.org/img/wn/${currentW.weather[0].icon}@2x.png`

    divTemp.textContent = currentW.temp + symbol;
    city.textContent = `${coords.name}, ${coords.state}, ${coords.country}`;
    divTime.textContent = `${currentW.weather[0].description}`;
    details[0].textContent = `${currentW.feels_like} ${symbol}`
    details[1].textContent = `${currentW.humidity}%`;
    details[2].textContent = `${dailyW[0].pop*100}%`;
    details[3].textContent = `${dailyW[0].temp.min} ${symbol}`;
    details[4].textContent = `${dailyW[0].temp.max} ${symbol}`;
  }

  function showHourWeather(){
    const hours = document.querySelectorAll('.hour');
    hours.forEach( (el,idx) => {
      el.textContent = `${Math.round(hourlyW[idx].temp)} ${symbol}`;
    });
  }

  function showDailyWeather(){
    const nextDays = document.querySelectorAll('.next-day');
    const dayDetail1 = document.querySelectorAll('.day-detail1');
    const dayDetail2 = document.querySelectorAll('.day-detail2');
    const dayIcons = document.querySelectorAll('.day-icon')
    nextDays.forEach( (el,idx) => {
      let currDate = new Date(dailyW[idx].dt*1000)
      let currDay = days[currDate.getDay()];
      el.childNodes[1].textContent = `${dailyW[idx].temp.day} ${symbol}`;
      el.childNodes[3].textContent = `${currDay}`;
      dayDetail1[idx].textContent = `${Math.round(dailyW[idx].feels_like.day)}${symbol}`;
      dayDetail2[idx].textContent = `${dailyW[idx].humidity}%`;
      dayIcons[idx].src = `http://openweathermap.org/img/wn/${dailyW[idx].weather[0].icon}@2x.png`
    });
  }
}

async function reverseGeo(lat,lon){
  const link = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=es`;
  const response = await fetch(link)
  const data = await response.json()
  return data;
}

let currPos;
async function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(callWeather,showError)//(callWeather,showError)
  }
  else console.log('geolocation not supported');
}

function callWeather(pos){
  currPos = {'lat':pos.coords.latitude,'lon':pos.coords.longitude}
  showWeather('none',currPos)
}

function showError(err){
  if(err.PERMISION_DENIED) console.log("The user denied permisions...")
}

const cityImput = document.getElementById('city-input');
const enterBtn = document.getElementById('enter-button');
enterBtn.addEventListener('click',()=>showWeather(cityImput.value))
cityImput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    showWeather(cityImput.value)
  }
});

const unitsSwitch = document.getElementById('switch');
unitsSwitch.addEventListener('change',(e) =>{
  let metric;
  if(unitsSwitch.checked) metric = 'metric';
  else metric = 'imperial';

  if(cityImput.value ==='') showWeather('none',currPos,metric);
  else showWeather(cityImput.value,currPos,metric)
})

const languageDiv = document.querySelector('.language');
const drop = new Dropdown('.language','Language', {animation:'animation2',width:'80px',height:'20px',textTransform:'capitalize'});
drop.appendElement('English');
drop.appendElement('Español');
drop.appendElement('Français');

getLocation()

document.body.className = 'background1';
document.body.className = 'background2';
document.body.className = 'background4';
