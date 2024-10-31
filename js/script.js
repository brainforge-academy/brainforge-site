let currentIndex = 0;
const sections = document.querySelectorAll('.horizontal-scroll .section');

function scrollHorizontally() {
    currentIndex = (currentIndex + 1) % sections.length;
    document.querySelector('.horizontal-scroll').style.transform = `translateX(-${currentIndex * 50}%)`;
}

setInterval(scrollHorizontally, 5000);
