function updateTime() {
  let losAgelesCity = document.querySelector("#los-angeles");
  if (losAgelesCity){
  let losAngelesDate = losAgelesCity.querySelector(".date");
  let losAngelesTime = losAgelesCity.querySelector(".time");
  losAngelesTimeDetails = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesTimeDetails.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTimeDetails.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  }

  let parisCity = document.querySelector("#paris");
  if (parisCity) {
    let parisDate = parisCity.querySelector(".date");
    let parisTime = parisCity.querySelector(".time");
    parisTimeDetails = moment().tz("Europe/Paris");
    parisDate.innerHTML = parisTimeDetails.format("MMMM Do YYYY");
    parisTime.innerHTML = parisTimeDetails.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyCity = document.querySelector("#sydney");
  if (sydneyCity) {
    let sydneyDate = sydneyCity.querySelector(".date");
    let sydneyTime = sydneyCity.querySelector(".time");
    sydneyTimeDetails = moment().tz("Australia/Sydney");
    sydneyDate.innerHTML = sydneyTimeDetails.format("MMMM Do YYYY");
    sydneyTime.innerHTML = sydneyTimeDetails.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

   let canadaCity = document.querySelector("#canada");
   if (canadaCity) {
     let canadaDate = canadaCity.querySelector(".date");
     let canadaTime = canadaCity.querySelector(".time");
     canadaTimeDetails = moment().tz("Canada/Central");
     canadaDate.innerHTML = canadaTimeDetails.format("MMMM Do YYYY");
     canadaTime.innerHTML = canadaTimeDetails.format(
       "h:mm:ss [<small>]A[</small>]"
     );
    
   }
  
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
      <div class="city" id="paris">
        <div>
          <h2>Paris</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
    </div> <a href="/index.html"> main menu</a>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
