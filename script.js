// Write your JavaScript code here!

window.addEventListener("load", function () {

   let randomIndex = Math.floor(Math.random() * 6);

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      // Access the JSON in the response
      response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomIndex].name}</li>
            <li>Diameter: ${json[randomIndex].diameter}</li>
            <li>Star: ${json[randomIndex].star}</li>
            <li>Distance from Earth: ${json[randomIndex].distance}</li>
            <li>Number of Moons: ${json[randomIndex].moons}</li>
         </ol>
         <img src="${json[randomIndex].image}">
         `;
      });
   });

   let button = document.querySelector("#submit");

   button.addEventListener("click", function (e) { // e = event
      e.preventDefault(); // don't refresh after the button is clicked

      let pilotName = document.querySelector("#pilot").value;
      let copilotName = document.querySelector("#copilot").value;
      let fuelLevel = document.querySelector("#fuel").value;
      let cargoMass = document.querySelector("#mass").value;

      if (pilotName == "" || copilotName == "" || fuelLevel == "" || cargoMass == "") {
         alert("All fields are required!");
      }

      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         alert("Fuel Level and Cargo Mass must be numbers.");
      }

      function showElement() {
         document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilotName} Ready`;
         document.querySelector("#copilotStatus").innerHTML = `Copilot ${copilotName} Ready`;
         document.querySelector('#faultyItems').style.visibility = 'visible';
      }

      if (fuelLevel < 10000 && cargoMass > 10000 && pilotName!==""&& copilotName!=="") {
         document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch."
         document.querySelector("#launchStatus").style.color = "red";
         document.querySelector("#fuelStatus").innerHTML = "Not enough fuel for the journey."
         document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for liftoff."
         showElement();

      } else if (cargoMass > 10000 && fuelLevel >= 10000&& pilotName!==""&& copilotName!=="") {
         document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch."
         document.querySelector("#launchStatus").style.color = "red";
         document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for liftoff."
         showElement();

      } else if (cargoMass <= 10000 && fuelLevel < 10000&& pilotName!==""&& copilotName!=="") {
         document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch."
         document.querySelector("#launchStatus").style.color = "red";
         document.querySelector("#fuelStatus").innerHTML = "Not enough fuel for the journey."
         showElement();

      } else if (pilotName!==""&& copilotName!=="" && cargoMass <= 10000 && fuelLevel >= 10000){
         document.querySelector("#launchStatus").innerHTML = "Shuttle is ready for launch."
         document.querySelector("#launchStatus").style.color = "green";
         document.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch."
         document.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch."
         showElement();
      }

   });
});




