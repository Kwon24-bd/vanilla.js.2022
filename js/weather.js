const API_KEY = "f28fbc21b3a24e25078181754e23d55d";

function weaSuc(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.main.temp}/${data.weather[0].main}`;
    });
}
function weaErr() {
  alert("Where are you???");
}

navigator.geolocation.getCurrentPosition(weaSuc, weaErr);
