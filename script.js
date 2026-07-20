document.addEventListener('DOMContentLoaded', () => {

    // --- Automatic Slider Framework ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 Seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);


    // --- Responsive Mobile Navigation Menu ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        
        // Quick toggle icon animation wrapper
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].style.transform = mobileMenu.classList.contains('is-active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
        bars[1].style.opacity = mobileMenu.classList.contains('is-active') ? '0' : '1';
        bars[2].style.transform = mobileMenu.classList.contains('is-active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
    });

    // Close mobile menu when clicking any nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = mobileMenu.querySelectorAll('.bar');
            mobileMenu.classList.remove('is-active');
            bars.forEach(bar => bar.style.transform = 'none');
            bars[1].style.opacity = '1';
        });
    });


    // --- Scroll Animations Framework ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.2;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Optional: Keeps re-animating when scrolling up/down
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once initially to catch elements visible on load
});