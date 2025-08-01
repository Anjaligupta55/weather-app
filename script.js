const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    console.log(data.weather[0].main);
	// let p="rain"
	// if (p=="rain"){
	// 	weatherIcon.src = "img/rain.png"; 
	// }
    if (data.weather[0].main == "Clouds" || data.weather[0].main == "clouds") {
      weatherIcon.src = "img/clouds.png";
	  console.log(weatherIcon.src);
	  
    } 
	else if (data.weather[0].main == "Clear" || data.weather[0].main == "clear") {
      weatherIcon.src = "img/clear.png";
	  console.log(weatherIcon.src);
    } 
	else if (data.weather[0].main == "Rain" || data.weather[0].main == "rain") {
      weatherIcon.src = "img/rain.png";
	  console.log(weatherIcon.src);
    } 
	else if (data.weather[0].main == "Drizzle"  || data.weather[0].main == "drizzle") {
      weatherIcon.src = "img/drizzle.png";
	  console.log(weatherIcon.src);
    }
	else if (data.weather[0].main == "Mist" || data.weather[0].main == "mist") {
      weatherIcon.src = "img/mist.png";
	  console.log(weatherIcon.src);
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather("delhi");