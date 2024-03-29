function getWeather() {
    const city = document.getElementById("cityInput").ariaValueMax;
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    fetch (url)
     .then (response => response.json())
     .then (data =>
        {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
            <h1>${data.name}</h1>
            <p>${data.weather[0].description}</p>
            <p> Temeperature: ${data.main.temp} degrees celcious </p>
            <p> Humidity: ${data.main.humidity} % </p>
        `;
            
        }
        )
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML="<p>Failed to fetch weather data. Please try again later.</p>";
        });
    
}