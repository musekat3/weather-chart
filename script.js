// Function to retrieve weather data from an API
function getWeather() {
    var queryURL= 'https://api.openweathermap.org/data/2.5/forecast?lat={38.941631}&lon={-119.977219}&appid={77e59f20f2615bdf22dfbdc4c4c20a6b}';
    fetch(queryURL)
  }; 
  
  function updateUI(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const iconElement = document.getElementById('icon');
  
    locationElement.innerText = data.location;
    temperatureElement.innerText = `${data.temperature}°C`;
    descriptionElement.innerText = data.description;

    console.log(data);

    window.localStorage.setItem(getWeather);
  }
  
  document.addEventListener('DOMContentLoaded', getWeather);

