// Static weather data
const temp = 28; // in Celsius
const windSpeed = 8; // in km/h

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function updateWindChill() {
    const windChillDisplay = document.getElementById('windchill');
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed).toFixed(2);
        windChillDisplay.textContent = windChill + '°C';
    } else {
        windChillDisplay.textContent = 'N/A';
    }
}

function updateFooter() {
    const yearDisplay = document.getElementById('year');
    const lastModifiedDisplay = document.getElementById('lastModified');

    yearDisplay.textContent = new Date().getFullYear();
    lastModifiedDisplay.textContent = document.lastModified;
}

updateWindChill();
updateFooter();