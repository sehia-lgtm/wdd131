// scripts/project.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');
    const body = document.body;
    const latestMatchSection = document.querySelector('#latestMatch');
    const fanOfTheMonthSection = document.querySelector('#fanOfMonth');
    const header = document.querySelector('header');
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Toggle Theme';
    themeToggle.classList.add('theme-toggle');
    if (header) {
        
    }

    // Function to toggle the mobile navigation menu
    function toggleMobileNav() {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    }

    // Object to store theme information
    const themeSettings = {
        currentTheme: localStorage.getItem('theme') || 'light-theme',
        apply: function(theme) {
            body.classList.remove('light-theme', 'dark-theme');
            body.classList.add(theme);
            localStorage.setItem('theme', theme);
            this.currentTheme = theme;
        },
        toggle: function() {
            const newTheme = this.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
            this.apply(newTheme);
        }
    };

    // Apply the initial theme
    themeSettings.apply(themeSettings.currentTheme);

    // Function to display match information using template literals
    function displayMatchInfo(match) {
        if (latestMatchSection) {
            const matchInfoElement = document.createElement('div');
            matchInfoElement.innerHTML = `
                <h3>${match.team1} vs ${match.team2}</h3>
                <p>Date: ${match.date}</p>
                <p>Score: ${match.score || 'Upcoming'}</p>
            `;
            latestMatchSection.appendChild(matchInfoElement);
        }
    }

    // Function to display fan information using template literals
    function displayFan(fan) {
        if (fanOfTheMonthSection) {
            const fanInfoElement = document.createElement('div');
            fanInfoElement.innerHTML = `
                <h4>${fan.name}</h4>
                <p>Member Since: ${fan.since}</p>
                <p>Quote: ${fan.quote}</p>
            `;
            fanOfTheMonthSection.appendChild(fanInfoElement);
        }
    }

    // Event listener for the hamburger menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileNav);
    }

    // Event listener for the theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeSettings.toggle();
        });
    }

    // Store the last visited time in localStorage
    localStorage.setItem('lastVisited', new Date().toISOString());
    const lastVisited = localStorage.getItem('lastVisited');
    if (lastVisited) {
        console.log(`Last visited: ${lastVisited}`);
    }

    // Array of recent match objects
    const recentMatches = [
        { team1: 'Liverpool', team2: 'Everton', date: '2025-03-15', score: '2-0' },
        { team1: 'Man United', team2: 'Liverpool', date: '2025-03-22', score: '1-2' },
    ];

    // Use array method forEach to display matches
    recentMatches.forEach(match => {
        displayMatchInfo(match);
    });

    // Fan of the month object
    const fanOfTheMonthData = {
        name: 'Kofi Asante',
        since: '2020-08-01',
        quote: 'YNWA!'
    };

    // Display the fan of the month
    displayFan(fanOfTheMonthData);

    // Example of conditional branching
    const isLiverpoolPlayingToday = new Date().toDateString() === new Date('2025-04-17').toDateString();
    if (isLiverpoolPlayingToday) {
        console.log("Liverpool is playing today! YNWA!");
    } else {
        console.log("No Liverpool match today.");
    }

    // Example of more DOM interaction: changing the hero text based on localStorage
    const storedHeroText = localStorage.getItem('heroText');
    const heroHeading = document.querySelector('.hero h2');
    if (heroHeading) {
        if (storedHeroText) {
            heroHeading.textContent = storedHeroText;
        } else {
            localStorage.setItem('heroText', heroHeading.textContent);
        }

        heroHeading.addEventListener('click', () => {
            const newText = prompt("Enter new hero text:");
            if (newText) {
                heroHeading.textContent = newText;
                localStorage.setItem('heroText', newText);
            }
        });
    }
});