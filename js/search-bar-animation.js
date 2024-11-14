// search bar animation 
const searchInput = document.getElementById("search-input");
const placeholders = ["Quick Search", "Search Your Product"];
let placeholderIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPlaceholder = placeholders[placeholderIndex];
    
    if (isDeleting) {
        // Remove characters
        searchInput.placeholder = currentPlaceholder.substring(0, charIndex--);
        if (charIndex < 0) {
            // Move to the next placeholder after deleting the current one
            isDeleting = false;
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        }
    } else {
        // Add characters
        searchInput.placeholder = currentPlaceholder.substring(0, charIndex++);
        if (charIndex > currentPlaceholder.length) {
            // Start deleting after the full text has been typed out
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
            return;
        }
    }
    
    // Adjust speed dynamically
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();




