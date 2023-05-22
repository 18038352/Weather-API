const apiKey = "9f00f9db4a9b8174464c2a2acbd1a27a"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


//search box and button
const userInput = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


//function
async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`)
  let data = await response.json() //contain all the weather data of city entered

  console.log(data)

  let currentWeather = ""
  if(data.weather[0].main === "Rain")
  {
    currentWeather = "rain"
  }

  else if(data.weather[0].main === "Drizzle")
  {
    currentWeather = "drizzle"
  }
  else if(data.weather[0].main === "Clear")
  {
    currentWeather = "clear"
  }

  else if(data.weather[0].main === "Clouds")
  {
    currentWeather = "clouds"
  }
  else if(data.weather[0].main === "Snow")
  {
    currentWeather = "snow"
  }
  else if(data.weather[0].main === "Mist")
  {
    currentWeather = "mist"
  }
  document.querySelector(".city").innerHTML = data.name
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"  //accessing the temp within the main object
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%" //accessing the temp within the main object
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
  document.querySelector(".weather-icon").src= `images/${currentWeather}.png`
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(userInput.value)
  userInput.value = ''

})
