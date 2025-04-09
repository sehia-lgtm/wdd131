document.addEventListener("DOMContentLoaded", () => {
    // Dynamically update the footer year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Hamburger menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2025 May, 25",
    area: 100000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58324-thumb.jpg"
     
    },
    {
      templeName: "Seattle Washington",
      location: "Seattle, Washington, United States",
      dedicated: "1980, November, 23",
      area: 175000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-54740-thumb.jpg"

    },
    {
      templeName: "Tucson Arizona",
      location: "Tucson, Arizona, United States",
      dedicated: "2017, December, 10",
      area: 58794,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-8384-thumb.jpg"
    },
    {
      templeName: "Vancouver British Columbia",
      location: "Langley, British Columbia, Canada",
      dedicated: "2010, April, 23",
      area: 21500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13059-thumb.jpg"
    }
  ];

// Function to display temples
function displayTemples(filteredTemples) {
    const templeContainer = document.querySelector(".temples-section");
    templeContainer.innerHTML = ""; // Clear existing content

    filteredTemples.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        card.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.innerHTML = `<strong>Total Area:</strong> ${temple.area.toLocaleString()} square feet`;
        card.appendChild(area);

        templeContainer.appendChild(card);
    });
}

// Function to filter temples based on criteria
function filterTemples(option) {
    let filteredTemples = [];

    switch (option) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = new Date(temple.dedicated).getFullYear();
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = new Date(temple.dedicated).getFullYear();
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            break;

        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

// Event listeners for navigation menu
const menuLinks = document.querySelectorAll("#nav-menu a");
menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute("data-filter").toLowerCase();
        filterTemples(filter);
    });
});

// Display all temples on page load
displayTemples(temples);

// Update footer with current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
    

