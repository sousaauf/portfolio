// Function to show the overlay
function showOverlay(overlayId) {
    // Add fade effect to the main content
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('fade-bg');
    }

    // Show the specified overlay
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.add('visible');
    } else {
        console.error(`Overlay with ID "${overlayId}" not found.`);
    }
}

// Function to hide the overlay
function hideOverlays() {
    // Remove fade effect from the main content
    const container = document.querySelector('.container');
    if (container) {
        container.classList.remove('fade-bg');
    }

    // Hide all overlays
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.remove('visible');
    });
}

// Portfolio Link Click Event
const portfolioLink = document.querySelector('.portfolio-link');
if (portfolioLink) {
    portfolioLink.addEventListener('click', function () {
        showOverlay('portfolioOverlay');
    });
} else {
    console.error('.portfolio-link element not found.');
}

// About Link Click Event
const aboutLink = document.querySelector('.about-link');
if (aboutLink) {
    aboutLink.addEventListener('click', function () {
        showOverlay('aboutOverlay');
    });
} else {
    console.error('.about-link element not found.');
}

// Close Button Click Events for both overlays
document.querySelectorAll('.overlay button').forEach(button => {
    button.addEventListener('click', hideOverlays);
});
