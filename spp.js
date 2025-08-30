// const apikey = "20da423906ccf27bec8c2d81c8f4a2eb"

// const weatherDataEle = document.querySelector(".weather-data")
// const CityNameEle = document.querySelector("#city-name")
// const forEle = document.querySelector("form")
// const imgIcon = document.querySelector(".icon")
// forEle.addEventListener("submit", () => {

// })
// e.preventDefault()
// //console.log(CityNameEle.value);
// const citValue = CityNameEle.value
// getWeatherData(citValue)

// async function getWeatherData(citValue) {
//     try {

//         const respons = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citValue}&appid=${apiKey}&units=metric`)

//         if (!respons.ok) {
//             throw new Error("Network respons is not ok!")
//         }
//         const data = await respons.json()
//         console.log(data)
//     } catch (err) {

//     }
// }




const apikey ="4a991fd3c372759981e87800a97b55a6"

const weatherDataEle = document.querySelector(".weather-data");
const CityNameEle = document.querySelector("#city-name");
const forEle = document.querySelector("form");
const imgIcon = document.querySelector(".icon");

forEle.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const citValue = CityNameEle.value;
    getWeatherData(citValue);
});

async function getWeatherData(citValue) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citValue}&appid=${apikey}&units=metric`);

        if (!response.ok) {
            throw new Error("Network response is not ok!");
        }
        const data = await response.json();
        console.log(data);
        // You can update the UI here using data, for example:
        // weatherDataEle.innerText = `${data.name}: ${data.main.temp}°C`;
        // imgIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } catch (err) {
        console.error("Error fetching weather data: ", err);
    }
}
