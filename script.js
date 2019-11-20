// Write your JavaScript code here!

window.addEventListener("load", function() {

   let randomIndex = Math.floor(Math.random() * 6);

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         // Access the JSON in the response
         response.json().then( function(json) {
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


   //let form = document.getElementById("launchForm");
   let button = document.getElementById("submit");
   //let faults = document.getElementById("faultyItems");

   button.addEventListener("click", function() {
      let pilotName = document.getElementById("pilot").value;
      let copilotName = document.getElementById("copilot").value;
      let fuelLevel = document.getElementById("fuel").value;
      let cargoMass = document.getElementById("mass").value;

      if (pilotName == "" || copilotName == "" || fuelLevel == "" || cargoMass == "") {
         alert("All fields are required!");
         event.preventDefault();
         }

      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         alert("Fuel Level and Cargo Mass must be numbers.");
         event.preventDefault();
         }
      
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName} Ready`;
      
      function showElement() { 
         let element = document.getElementById("faultyItems"); 
         element.style.visibility = 'visible'; 
      } 

      function hideElement() { 
         let element = document.getElementById("faultyItems");
         element.style.visibility = 'hidden'; 
      } 

      if (fuelLevel < 10000) {   
         showElement();
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey."
         //document.getElementById("faultyItems").style.visibility = 'visible';
         
      } else if (cargoMass > 10000) {   
            showElement();
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for liftoff."
            //document.getElementById("faultyItems").style.visibility = 'visible';      
      } else {
            showElement();
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch."
            document.getElementById("launchStatus").style.color = "green";
      }
   });

   // *** copy/pasted IDs for reference: ***
   // <div id="launchStatusCheck">
   // <h2 id="launchStatus">Awaiting Information Before Launch</h2>
   // <div id="faultyItems">
   //     <ol>
   //         <li id="pilotStatus">Pilot ${pilotName} Ready</li>
   //         <li id="copilotStatus">Co-pilot ${copilotName} Ready</li>
   //         <li id="fuelStatus">Fuel level high enough for launch</li>
   //         <li id="cargoStatus">Cargo mass low enough for launch</li>

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


