document.getElementById("getWeather").onclick = async function() {
  const city = document.getElementById("city").value.trim();
  const output = document.getElementById("output");

  if (!city) {
    output.innerHTML = "⚠ Please enter a city name.";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE";
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found!");
    const data = await response.json();

    const weatherIcon = https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png;

    output.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <img src="${weatherIcon}" alt="Weather Icon">
      <p><b>${data.weather[0].description.toUpperCase()}</b></p>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    output.innerHTML = ❌ ${error.message};
  }
};