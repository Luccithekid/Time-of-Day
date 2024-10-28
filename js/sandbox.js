// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();

console.log(hour);

if (hour < 12) {
  // Morning
document.getElementById("greeting").innerText = "Good Morning";
document.getElementById("image").src="img/sun.png";
} else if (hour < 17) {
  // Afternoon
document.getElementById("greeting").innerText = "Good Afternoon";
}
else {
  // Night
document.getElementById("greeting").innerText = "Good Night";
document.getElementById("image").src="img/";
}





//let greetingElement = document.getElementById("greeting");
//console.log(greetingElement);

//document.getElementById("greeting").innerText = "Good Night";