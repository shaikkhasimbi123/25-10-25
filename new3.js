const apiKey = "6d5d1385005617bfe40e1a86d49e3f7c";

document.getElementById("searchBtn").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("weatherResult");
    if (!city) {
        resultDiv.innerHTML = "<p class='error'>Please enter a city name.</p>";
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                resultDiv.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <img class="weather-icon" src="<https://openweathermap.org/img/wn/${data.weather>[0].icon}@2x.png" alt="Weather icon">
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                resultDiv.innerHTML = `<p class='error'>${data.message}</p>`;
            }
        })
        .catch(err => {
            resultDiv.innerHTML = "<p class='error'>Could not fetch weather data.</p>";
        });
});
