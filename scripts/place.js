// =========================
// Footer dates
// =========================
const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// =========================
// Weather – Static values
// =========================
// (Estos valores deben coincidir con lo que muestras en el HTML)
const temperature = 20;   // °C (ejemplo)
const windSpeed = 10;     // km/h (ejemplo)

const windChillSpan = document.querySelector("#windchill");


// =========================
// Wind Chill Function
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
// Wind Chill Logic
// =========================
if (temperature <= 10 && windSpeed > 4.8) {
  windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
