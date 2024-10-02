const stars = document.querySelectorAll('.star');
const ratingOutput = document.getElementById('rating-output');
let currentRating = 0;

// Function to highlight stars
function highlightStars(rating) {
    stars.forEach(star => {
        star.classList.remove('selected');
        if (parseInt(star.getAttribute('data-value')) <= rating) {
            star.classList.add('selected');
        }
    });
}

// Add event listeners to stars
stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        highlightStars(rating); // Highlight stars on hover
    });

    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        currentRating = rating;
        ratingOutput.textContent = `You rated this ${rating} stars!`;
        highlightStars(rating); // Highlight stars when clicked
    });

    // Restore current rating when mouse moves away
    star.addEventListener('mouseout', () => {
        highlightStars(currentRating); // Restore selected stars after hover ends
    });
});
