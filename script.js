// Write your JavaScript code here!

let button = document.getElementById("formSubmit");
// add event handler for when button clicked
button.addEventListener("click", function() {
   let pilot = document.getElementById("pilotName");
   let copilot = document.getElementById("copilotName");
   let fuel = document.getElementById("fuelLevel");
   let mass = document.getElementById("cargoMass");
   if (pilot.value === "" || copilot.value === "" || fuel.value === "" || mass.value === "") {
      alert("All fields are required!");
      event.preventDefault();
   }
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

// from the BOOK: 
// window.addEventListener("load", function() {
//    let form = document.querySelector("form");
//    form.addEventListener("submit", function(event) {
//       let usernameInput = document.querySelector("input[name=username]");
//       let teamName = document.querySelector("input[name=team]");
//       if (usernameInput.value === "" || teamName.value === "") {
//          alert("All fields are required!");
//          // stop the form submission
//          event.preventDefault();
//       }
//    });
// });

