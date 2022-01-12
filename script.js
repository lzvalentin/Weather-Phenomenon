 let weather= {
 apiKey = "928c5ba094c06154ca53619a766d8d60",
fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "units=imperial&appid=" + apiKey)
.then((response) => response.json())
    .then(data => console.log(data));
}},

