function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAgelesDateElement = losAngelesElement.querySelector(".date");
let losAgelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAgelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAgelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


let londonElement = document.querySelector("#london");

let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

}


function updateCity(event) {
 let cityTimeZone = event.target.value;
 let cityName = cityTimeZone.replace("_", " ").split("/")[1];
 let cityTime = moment().tz(cityTimeZone);
 let citiesElement = document.querySelector("#cities");
 citiesElement.innerHTML = `
 <div class="city">
    <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
 </div>`
}

updateTime();
setInterval(updateTime, 1000);
cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);