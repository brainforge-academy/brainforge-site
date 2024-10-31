let currentIndex = 0;
const scrollContainer = document.querySelector('.horizontal-scroll');
const images = document.querySelectorAll('.horizontal-scroll .main-image');

function autoScroll() {
    currentIndex = (currentIndex + 1) % images.length;
    scrollContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set interval to auto-scroll every 5 seconds
setInterval(autoScroll, 5000);

// Smooth scroll function to navigate to different sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
