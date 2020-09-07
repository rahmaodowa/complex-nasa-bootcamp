// objectforApi
// worked with house cass
let apiObject = {
tableProperties:document.getElementById("Rows-Columns-Id"),
fetchingApiProperties: fetch('https://data.nasa.gov/resource/gvk9-iz74.json')
    .then(response => response.json())
    .then(firstFetchdata => {
      var i;
      var counter = 0;
    for(i in firstFetchdata){

      var temper = firstFetchdata[i];
       checkWeather(temper);
    }
    })
    .catch(err => {
        alert("error")
    })
}
apiObject.fetchingApiProperties;

// chekingWeatherApifuncions
  function checkWeather(temper){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${temper.location.latitude}&lon=${temper.location.longitude}&appid=4f6276080d5b711d09cdd5b91b0bcca1&units=imperial`)
    .then(response => response.json())
    .then(data => {

      console.log(data)
      //create the TR and the TDS (Columns)
      let span = document.createElement('tr')
      let p1 = document.createElement('th')
      let p2 = document.createElement('th')
      let p3 = document.createElement('th')
      let p4 = document.createElement('th')
      //set the values for the column
      span.appendChild(p1);
      span.appendChild(p2);
      span.appendChild(p3);
      span.appendChild(p4);
      //append all the table rows into the table element
      apiObject.tableProperties.appendChild(span);
      p1.innerHTML = temper.facility;
      p2.innerHTML = temper.location.latitude;
      p3.innerHTML = temper.location.longitude;
      p4.innerHTML = data.main.temp;
    })
  }
