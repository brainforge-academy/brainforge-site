document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Example: Form validation
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(event) {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert("Please fill out all fields.");
        }
    });
});
