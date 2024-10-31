let currentIndex = 0;
const sections = document.querySelectorAll('.horizontal-scroll .section');

setInterval(() => {
    currentIndex = (currentIndex + 1) % sections.length;
    document.querySelector('.horizontal-scroll').style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);
