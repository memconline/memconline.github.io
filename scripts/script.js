document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out to us. We will get back to you soon!");
        form.reset();  // Clear the form after submission
    });

    // Example of a hover effect on the hero section's text
    const heroText = document.querySelector(".hero h2");
    heroText.addEventListener("mouseenter", function() {
        heroText.style.color = "#ff6f61";  // Change color on hover
    });

    heroText.addEventListener("mouseleave", function() {
        heroText.style.color = "white";  // Revert back to original color
    });
});

