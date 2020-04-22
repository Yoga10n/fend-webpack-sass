const baseurl = 'http://api.openweathermap.org/data/2.5/weather?zip=90002&appid=c1373afd576221e460f658492a0f69fa';

function getweather(event) {
    event.preventDefault()

    fetch(baseurl)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('weather_results').innerHTML = res.main.temp
        })
}

export { getweather }