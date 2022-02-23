async function fetchCoords(cityName){
  const geoApiKey = '43f042b1637b39a8ee93d442afed514b';
  const link = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${geoApiKey}`;
  try {
    const response = await fetch(link,{ mode: "cors" });
    const dataRaw = await response.json();
    const data = dataRaw[0];
    return data;

  } catch(err) {
    console.log(err)
  }
}

async function fetchWeather(lat,lon,units='metric'){
  let lang = 'es';//fr: french, en: english;
  const geoApiKey = '43f042b1637b39a8ee93d442afed514b';
  const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&lang=${lang}&units=${units}&appid=${geoApiKey}`;
  const response = await fetch(link,{ mode: "cors" });
  const dataRaw = await response.json();
  const data = dataRaw;
  return data;
}

export {fetchWeather,fetchCoords};