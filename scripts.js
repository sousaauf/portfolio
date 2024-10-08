// scripts.js

// Portfolio Link Click Event
document.querySelector('.portfolio-link').addEventListener('click', function (event) {
    event.preventDefault();

    // Fade out the homepage content
    document.querySelector('.container').classList.add('fade-bg');

    // Show the portfolio list overlay
    document.querySelector('.portfolio-list-overlay').style.display = 'flex';
});

// About Link Click Event
document.querySelector('.about-link').addEventListener('click', function (event) {
    event.preventDefault();

    // Fade out the homepage content
    document.querySelector('.container').classList.add('fade-bg');

    // Show the about list overlay
    document.querySelector('.about-list-overlay').style.display = 'flex';
});
