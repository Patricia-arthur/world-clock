function updateTime() {
let cairoElement = document.querySelector("#cairo");
let cairoDateElement = cairoElement.querySelector(".date");
let cairoTimeElement = cairoElement.querySelector(".time");
let cairoTime = moment().tz("Africa/Cairo");

cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
cairoTimeElement.innerHTML = cairoTime.format("h:mm:ss [<small>]A[</small>]");


let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");


let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

let virgin = document.querySelector("#virgin");
let virginDateElement = virgin.querySelector(".date");
let virginTimeElement = virgin.querySelector(".time");
let virginTime = moment().tz("America/Virgin");

 virginDateElement.innerHTML =  virginTime.format("MMMM Do YYYY");
 virginTimeElement.innerHTML =  virginTime.format("h:mm:ss [<small>]A[</small>]");
}


function updateCity(event) {
 let cityTimeZone = event.target.value;
 if (cityTimeZone === "current") {
   cityTimeZone = moment.tz.guess();
 }
 let cityName = cityTimeZone.replace("_", " ").split("/")[1];
 let cityTime = moment().tz(cityTimeZone);
 let citiesElement = document.querySelector("#cities");
 citiesElement.innerHTML = `
 <div class="city">
    <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
 </div>
 <a href="/">Back to World Clock</a>`
}

updateTime();
setInterval(updateTime, 1000);
cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);