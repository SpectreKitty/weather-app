let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", submitCity);

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "713092c61foacbc30bt952afba0b4c71";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayWeather);

  let cityHeading = document.querySelector("#current-city");
  cityHeading.innerHTML = city;
}

function displayWeather(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let currentTemperatureElement = document.querySelector("#currentTemp");
  currentTemperatureElement.innerHTML = `${currentTemp} \u00B0 F`;
}

let now = new Date();

function formatDate(dates) {
  let date = dates.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dates.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[dates.getMonth()];
  let year = dates.getFullYear();
  let hour = dates.getHours();
  let min = dates.getMinutes();

  let currentDate = document.querySelector("h1");
  currentDate.innerHTML = `It is currently ${day}, ${month} ${date}, ${year} at ${hour}:${min}`;

  let formattedDate = `Today is ${day}, ${month} ${date}, ${year}`;
  return formattedDate;
}

formatDate(now);
