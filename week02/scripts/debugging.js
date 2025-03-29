const radiusOutput = document.getElementById('radius'); // Make sure the element exists in your HTML
const areaOutput = document.getElementById('area');    // Replace 'area' with the correct ID if needed

const PI = 3.14159;

let radius = 10;
let area = PI * radius * radius;

// Update the content of the DOM elements
radiusOutput.textContent = `Radius: ${radius}`;
areaOutput.textContent = `Area: ${area}`;

radius = 20;
area = PI * radius * radius;

// Update the content again after recalculation
radiusOutput.textContent = `Radius: ${radius}`;
areaOutput.textContent = `Area: ${area}`;
