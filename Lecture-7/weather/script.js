const cityText = document.getElementById("city")
const temperatureText = document.getElementById("temperature")
const windText = document.getElementById("wind")
const output = document.getElementById("output")
const timeText = document.getElementById("time")
API_URL = "https://api.open-meteo.com/v1/forecast?latitude=62.8924&longitude=27.6770&current=temperature_2m,wind_speed_10m"

function log(message) {
    output.textContent += message + "\n"
}

function clearOutput() {
    output.textContent = ""
}

document.getElementById("btnLoadWeather").onclick = loadWeather;
document.getElementById("btnKuopio").onclick = () => loadWeatherByCity("Kuopio",62.8924, 27.6770);
document.getElementById("btnHelsinki").onclick = () => loadWeatherByCity("Helsinki", 60.1699, 24.9384);
document.getElementById("btnOulu").onclick = () => loadWeatherByCity("Helsinki", 65.0121, 25.4651);
document.getElementById("btnBayonne").onclick = () => loadWeatherByCity("Bayonne", 43.4929, -1.4748);
document.getElementById("btnRovaniemi").onclick = () => loadWeatherByCity("Rovaniemi", 66.5039, 25.7282);
document.getElementById("btnParis").onclick = () => loadWeatherByCity("Paris", 48.8566, 2.3522);
document.getElementById("btnLisbonne").onclick = () => loadWeatherByCity("Lisbonne", 38.7223, -9.1393);
document.getElementById("btnLjubljana").onclick = () => loadWeatherByCity("Ljubljana", 46.0569, 14.5058);
document.getElementById("btnIakoutsk").onclick = () => loadWeatherByCity("Iakoutsk", 62.0397, 129.6755);

async function loadWeather() {
    clearOutput()
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        if (!response.ok){
            throw new error("HTTP Error " + response.status);
        }
        console.log(data);

        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;

        cityText.textContent = "Kuopio";
        temperatureText.textContent = temperature + " °C ";
        windText.textContent = wind + " km/h ";

        log ("City : Kuopio");
        log("Temperature: " + temperature + " °C " );
        log("Wind Speed: " + wind + " km/h ");
        // TODO: fetch data from API
    }catch(error){
        log("Error" + error.message);
    }
}

async function loadWeatherByCity(cityName, latitude, longitude){
    clearOutput()
    try{
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        const response = await fetch(url)

        if (!response.ok){
            throw new Error("HTTP Error: "+ response.status);
        }
        const data = await response.json();
        const temperature = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        const time = data.current.time

        cityText.textContent = cityName;
        temperatureText.textContent = temperature + " °C ";
        windText.textContent = wind + " km/h ";
        timeText.textContent =time;

        if (temperature < 0) {
            document.body.className = "cold"
        } else {
            document.body.className = "mild"
        }
        log ("City : " + cityName);
        log("Temperature: " + temperature + " °C " );
        log("Wind Speed: " + wind + " km/h ");

    }catch(error){
        log("Errot " + error.message)
    }
}

/*Why is this page called dynamic?
The page is called dynamic because its content changes in real-time without the user needing to manually refresh the browser.
Both the text (weather data) and the visual appearance (CSS background colors) update instantly based on the specific data received from the server.

What does the API give us?
The API provides a stream of structured data containing precise meteorological information,
such as temperature, wind speed, and timestamps,
based on geographical coordinates.
It acts as a bridge between our application and Open-Meteo's scientific database.

Why is JSON useful here?
JSON is useful because it is a lightweight, universal data format that JavaScript can easily convert into manageable objects.
This allows us to access information intuitively by simply using dot notation, like data.current.temperature_2m.

Why is it better to create one reusable function for all cities?
It follows the DRY (Don't Repeat Yourself) programming principle,
making the code shorter, cleaner, and easier to maintain.
If you want to change the display format or add a new feature later,
you only have to update the code in one place instead of editing ten identical functions.
*/