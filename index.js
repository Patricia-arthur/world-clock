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
updateTime();
setInterval(updateTime, 1000);