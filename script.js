
var apiKey = "&appid=928c5ba094c06154ca53619a766d8d60";
var firstCallURL= "https://api.openweathermap.org/data/2.5/weather?q=";
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('search-engine')
var secondCallURL = "https://api.openweathermap.org/data/2.5/onecall?"

dayjs.extend(window.dayjs_plugin_timezone);
dayjs.extend(window.dayjs_plugin_utc);

function startSearch(event){
event.preventDefault();

var search = searchInput.value.trim()
getCoordinates(search)
}

function getCoordinates(city){
    fetch(firstCallURL+city+apiKey).then(function (res){
        return res.json()
    }).then(function(data){
        getWeatherInfo(data)
    })
}


function getWeatherInfo(data){
    var lat= data.coord.lat;
    var lon= data.coord.lon;
    var city= data.name

    fetch(secondCallURL+"lat="+ lat+ "&lon="+lon+ "&exclude=minutely,hourly,alerts&units=imperial"+apiKey).then(function(res){
        return res.json()
    }).then(function(data){
        currentWeather(data.current, city, data.timezone)
        //console.log(data)
    })
}
function currentWeather(weather, cityName, timezone){
    //console.log(weather)
var temp = weather.temp
var humidity = weather.humidity
var uvIndex = weather.uvi
var icon = weather.weather[0].icon
var wind = weather.wind_speed
var iconURL= "http://openweathermap.org/img/w/" +icon +".png"
var currentDate = dayjs().tz(timezone).format('M/D/YYYY')

// display current weather on page
var weatherEL= document.createElement("div");
weatherEL.classlist= "card";
var cardEl = document.createElement ("div")
cardEl.classlist="card-body "
var tempEL = document.createElement('h2');
tempEL.textContent = "Temperature: " + temp;
tempEL.setAttribute('class','temp');
document.body.appendChild(tempEL)
}


// el.appendchild();
searchForm.addEventListener('submit', startSearch)