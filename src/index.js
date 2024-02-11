import "./styles.css";
import "./images/background-mountain_2.jpg";
import "./images/humidity.svg";
import "./images/1189.svg"; // rain
import "./images/wind.svg";
import "./images/thermometer.svg";
import "./images/1000.svg";
import "./images/1003.svg";
import "./images/1006.svg";
import "./images/1009.svg";
import "./images/1030.svg";
import "./images/1063.svg";
import "./images/1066.svg";
import "./images/1069.svg";
import "./images/1072.svg";
import "./images/1087.svg";
import "./images/1135.svg";
import "./images/1180.svg";
import "./images/1195.svg";

let celsius = true;
let locationResult = "london";

// Set Images & Icons

const tempScale = document.querySelector("[data-temp-scale");
const searchInput = document.querySelector("[data-weather-search");
const currentTempDisplay = document.querySelector("[data-current-temperature]");
const currentLocationDisplay = document.querySelector(
  "[data-current-location]",
);
const currentWeatherDescription = document.querySelector(
  "[data-current-weather-description]",
);
const weatherIcon = document.querySelector(".weather-icon");
const dateAndTime = document.querySelector("[data-date-and-time]");
const feelsLike = document.querySelector("[data-feels-like]");
const humidity = document.querySelector("[data-humidity]");
const rainChance = document.querySelector("[data-rain-chance]");
const windChance = document.querySelector("[data-wind-chance]");
const locationForm = document.querySelector(".location-form");

const errorSpan = document.querySelector("span");

// Forecast elements
const SundayTempHigh = document.querySelector("[data-sunday-temp-high]");
const SundayTempLow = document.querySelector("[data-sunday-temp-low]");
const SundayWeatherIcon = document.querySelector("[data-sunday-icon");
const mondayTempHigh = document.querySelector("[data-monday-temp-high]");
const mondayTempLow = document.querySelector("[data-monday-temp-low]");
const mondayWeatherIcon = document.querySelector("[data-monday-icon");
const tuesdayTempHigh = document.querySelector("[data-tuesday-temp-high]");
const tuesdayTempLow = document.querySelector("[data-tuesday-temp-low]");
const tuesdayWeatherIcon = document.querySelector("[data-tuesday-icon");
const wednesdayTempHigh = document.querySelector("[data-wednesday-temp-high]");
const wednesdayTempLow = document.querySelector("[data-wednesday-temp-low]");
const wednesdayWeatherIcon = document.querySelector("[data-wednesday-icon");
const thursdayTempHigh = document.querySelector("[data-thursday-temp-high]");
const thursdayTempLow = document.querySelector("[data-thursday-temp-low]");
const thursdayWeatherIcon = document.querySelector("[data-thursday-icon");
const fridayTempHigh = document.querySelector("[data-friday-temp-high]");
const fridayTempLow = document.querySelector("[data-friday-temp-low]");
const fridayWeatherIcon = document.querySelector("[data-friday-icon");
const saturdayTempHigh = document.querySelector("[data-saturday-temp-high]");
const saturdayTempLow = document.querySelector("[data-saturday-temp-low]");
const saturdayWeatherIcon = document.querySelector("[data-saturday-icon");

searchInput.addEventListener("change", (e) => {
  e.preventDefault();
  locationResult = e.target.value;
  getWeather(locationResult);
});

tempScale.addEventListener("change", () => {
  if (tempScale.checked) {
    celsius = false;
  } else {
    celsius = true;
  }
  getWeather(locationResult);
});

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=5566193aad5d49be87572056231107&q=${location}&days=7&aqi=no`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    setWeather(weatherData);
    errorSpan.classList.replace("display-error", "hide-error");
  } catch (err) {
    /* errorSpan.textContent = `Oops, "${location}" is not a valid location, try again`; */
    errorSpan.classList.replace("hide-error", "display-error");
  }
}

function setWeather(weatherData) {
  // Check if C or F selected and update values
  const scale = celsius ? "_c" : "_f";
  const displayScale = celsius ? "°C" : "°F";

  // Format the date before setting
  const localTime = new Date(weatherData.location.localtime);
  const formattedDateTime = localTime.toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  // Set content of current weather
  currentTempDisplay.textContent = `${
    weatherData.current[`temp${scale}`]
  } ${displayScale}`;
  currentLocationDisplay.textContent = weatherData.location.name;
  currentWeatherDescription.textContent = weatherData.current.condition.text;
  weatherIcon.src = `./images/${weatherData.current.condition.code}.svg`;

  dateAndTime.textContent = `${formattedDateTime}`;

  // Set content of additional info

  feelsLike.textContent = `Feels like ${
    weatherData.current[`feelslike${scale}`]
  } ${displayScale}`;
  humidity.textContent = `Humidity ${weatherData.current.humidity} %`;
  rainChance.textContent = `Chance of rain: ${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %`;
  windChance.textContent = `Wind Speed: ${weatherData.forecast.forecastday[0].day.maxwind_mph} mph`;

  const forecastDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // set content of DAILY forecast container (Add later for hourly)

  forecastDays.forEach((day, index) => {
    const dayElement = document.querySelector(`[data-${day}]`);
    if (weatherData.forecast.forecastday[index]) {
      dayElement.style.display = "block";
      dayElement.querySelector("p.high").textContent = `${
        weatherData.forecast.forecastday[index].day[`maxtemp${scale}`]
      } ${displayScale}`;
      dayElement.querySelector("p.low").textContent = `${
        weatherData.forecast.forecastday[index].day[`mintemp${scale}`]
      } ${displayScale}`;
      dayElement.querySelector(
        ".forecast-icon",
      ).src = `./images/${weatherData.forecast.forecastday[index].day.condition.code}.svg`;
    } else {
      // If there's no data for the day, hide the forecast day element
      dayElement.style.display = "none";
    }
  });

  locationForm.reset();
}

getWeather(locationResult);
