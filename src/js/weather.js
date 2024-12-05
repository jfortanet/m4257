async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3104509&appid=7df647dc4adef1d614caf6d0c9694e12&units=metric&lang=ca');
        const data = await response.json();

        document.getElementById('weather-data-condition').innerHTML = `Condició meteorològica: <strong>${data.weather[0].description}</strong>`;
        document.getElementById('weather-data-temperature').innerHTML = `Temperatura: <strong>${data.main.temp} °C</strong>`;
        document.getElementById('weather-data-humidity').innerHTML = `Humitat: <strong>${data.main.humidity} %</strong>`;
        document.getElementById('weather-data-visibility').innerHTML = `Visibilitat: <strong>${data.visibility} m</strong>`;
        document.getElementById('weather-data-windspeed').innerHTML = `Velocitat del vent: <strong>${data.wind.speed} m/s</strong>`;
        document.getElementById('weather-icon').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'/>`;
    } catch (e) {
        document.getElementById('weather-data-condition').innerHTML = 'Condició meteorològica: no disponible';
        document.getElementById('weather-data-temperature').innerHTML = 'Temperatura: no disponible';
        document.getElementById('weather-data-humidity').innerHTML = 'Humitat: no disponible';
        document.getElementById('weather-data-visibility').innerHTML = 'Visibilitat: no disponible';
        document.getElementById('weather-data-windspeed').innerHTML = 'Velocitat del vent: no disponible';
        document.getElementById('weather-icon').innerHTML = '<svg><circle cx="50%" cy="70%" r="15px" fill="yellow"/></svg>';
        console.error('Error: ', e);
    }
}
fetchWeather();



