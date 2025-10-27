document.getElementById('getWeather').onclick = getWeatherForCity;

async function getWeatherForCity() {
  const city = document.getElementById('city').value.trim();
  const output = document.getElementById('output');

  if (!city) {
    output.innerText = "Please enter a city name.";
    return;
  }

  output.innerText = "Loading weather...";

  try {
    const apiKey = '6d5d1385005617bfe40e1a86d49e3f7c'; // Replace with your free API key.
    const response = await fetch(
    https://home.openweathermap.org/api_keys/${apiKey}/weather?q=${encodeURIComponent(city)}&units=metric
    );
    if (!response.ok) throw new Error("City not found!");
    const data = await response.json();

    // Dynamically display weather info
    output.innerHTML = `Weather in <b>${data.name}</b><br>
    Temperature: ${data.main.temp}°C<br>
    Condition: ${data.weather[0].description}`;
    
    // Save city name in localStorage
    localStorage.setItem('lastCity', city);

  } catch (error) {
    output.innerText = "Error: " + error.message;
  }
}

// On page load, show weather for last searched city
window.onload = () => {
  const lastCity = localStorage.getItem('lastCity');
  if (lastCity) {
    document.getElementById('city').value = lastCity;
    getWeatherForCity();
  }
};