function updateTime() {
  let losAgelesCity = document.querySelector("#los-angeles");
  let losAngelesDate = losAgelesCity.querySelector(".date");
  let losAngelesTime = losAgelesCity.querySelector(".time");
  losAngelesTimeDetails = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesTimeDetails.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTimeDetails.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisCity = document.querySelector("#paris");
  let parisDate = parisCity.querySelector(".date");
  let parisTime = parisCity.querySelector(".time");
  parisTimeDetails = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisTimeDetails.format("MMMM Do YYYY");
  parisTime.innerHTML = parisTimeDetails.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
