document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // Example of DOM interaction and localStorage
    const heroElement = document.querySelector('.hero h2');
    const storedGreeting = localStorage.getItem('heroGreeting');

    if (heroElement) {
        if (storedGreeting) {
            heroElement.textContent = storedGreeting;
        } else {
            heroElement.addEventListener('click', () => {
                const newGreeting = prompt('Enter a new greeting:');
                if (newGreeting) {
                    heroElement.textContent = newGreeting;
                    localStorage.setItem('heroGreeting', newGreeting);
                }
            });
        }
    }

    // Example of an object
    const siteInfo = {
        name: 'Ivorian Scouts Hub',
        version: '1.0',
        location: 'Abidjan'
    };
    console.log(siteInfo.name);

    // Example of an array and array method
    const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#e57373'; // A lighter red on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
        });
    });

    // Example of conditional branching
    if (navLinks.length > 0) {
        console.log('Navigation links are present.');
    } else {
        console.log('No navigation links found.');
    }
});

// Example of a function
function greetScout(name) {
    return `Hello, fellow Ivorian Scout ${name}!`;
}

console.log(greetScout('Kouassi'));

// Example of template literals
const welcomeMessage = `Welcome to the ${siteInfo.name} version ${siteInfo.version}, located in ${siteInfo.location}!`;
console.log(welcomeMessage);