// Write your JavaScript code here!

window.addEventListener("load", function() {

let form = document.getElementById("launchForm");
let button = document.getElementById("submit");

button.addEventListener("click", function() {
   let pilotName = document.getElementById("pilot");
   let copilotName = document.getElementById("copilot");
   let fuelLevel = document.getElementById("fuel");
   let cargoMass = document.getElementById("mass");
   console.log(pilotName);

   if (pilotName.value == "" || copilotName.value == "" || fuelLevel.value == "" || cargoMass.value == "") {
      alert("All fields are required!");
      event.preventDefault();
      }

      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass must be numbers.");
         event.preventDefault();
       }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


