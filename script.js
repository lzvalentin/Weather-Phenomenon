
var apiKey = "&appid=928c5ba094c06154ca53619a766d8d60";
var firstCallURL= "https://api.openweathermap.org/data/2.5/weather?q=";
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('search-engine')
var secondCallURL = "https://api.openweathermap.org/data/2.5/onecall?"

dayjs.extend(window.dayjs_plugin_timezone);
dayjs.extend(window.dayjs_plugin_utc);


// el.appendchild();
searchForm.addEventListener('submit', startSearch)