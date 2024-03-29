function getWeather() {
    const city = document.getElementById("cityInput").ariaValueMax;
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    fetch (url)
     .then
    
}