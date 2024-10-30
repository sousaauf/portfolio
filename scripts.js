// Function to show the overlay
function showOverlay(overlayId) {
    // Add fade effect to the main content
    document.querySelector('.container').classList.add('fade-bg');

    // Show the specified overlay
    document.getElementById(overlayId).classList.add('visible');
}

// Function to hide the overlay
function hideOverlays() {
    // Remove fade effect from the main content
    document.querySelector('.container').classList.remove('fade-bg');

    // Hide all overlays
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.remove('visible');
    });
}

// Portfolio Link Click Event
document.querySelector('.portfolio').addEventListener('click', function () {
    showOverlay('portfolioOverlay');
});

// About Link Click Event
document.querySelector('.about').addEventListener('click', function () {
    showOverlay('aboutOverlay');
});

// Close Button Click Events for both overlays
document.querySelectorAll('.overlay button').forEach(button => {
    button.addEventListener('click', hideOverlays);
});
