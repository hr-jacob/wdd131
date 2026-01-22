// =========================
// Footer: current year & last modified
// =========================
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// =========================
// Weather: static values
// =========================
// These values must match the values shown in the HTML
const temperature = 10; // °C
const windSpeed = 5;    // km/h

const windChillElement = document.querySelector("#windchill");


// =========================
// Wind Chill function
// =========================
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}


// =========================
// Wind Chill logic
// =========================
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}

