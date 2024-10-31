let currentIndex = 0;
const sections = document.querySelectorAll('.horizontal-scroll .section');

function scrollToNextSection() {
    currentIndex = (currentIndex + 1) % sections.length;
    document.querySelector('.horizontal-scroll').style.transform = `translateX(-${currentIndex * 100}%)`;
    setTimeout(scrollToNextSection, 5000); // Pause for 5 seconds
}

// Start the scrolling
setTimeout(scrollToNextSection, 5000);
