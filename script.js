
var apiKey = "&appid=928c5ba094c06154ca53619a766d8d60";


var firstCallURL= "https://api.openweathermap.org/data/2.5/weather?q=" 

var searchForm = document.getElementById('searchForm')
var searchInput = document.getElementById('search-engine');

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

    fetch().then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data)
    })
}
// 
searchForm.addEventListener('submit', startSearch)
