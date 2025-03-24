document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for cards or details
    const cards = document.querySelectorAll('.winery-card');
    const details = document.querySelector('.winery-details');
    
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease';
                card.style.opacity = '1';
            }, index * 200);
        });
    }
    
    if (details) {
        details.style.opacity = '0';
        setTimeout(() => {
            details.style.transition = 'opacity 0.5s ease';
            details.style.opacity = '1';
        }, 200);
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-image');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        // Auto-rotate every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 5000);
    }

    // Sticky header behavior
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.getBoundingClientRect().height; // Accurate height including padding
        const hidePosition = -headerHeight - 10; // Extra buffer to ensure complete disappearance
        header.style.top = `${hidePosition}px`; // Initially fully hidden

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('visible');
                header.style.top = `${hidePosition}px`; // Ensure hidden at top
            } else if (currentScroll < lastScroll) {
                header.classList.add('visible');
                header.style.top = '0'; // Show when scrolling up
            } else {
                header.classList.remove('visible');
                header.style.top = `${hidePosition}px`; // Hide when scrolling down
            }
            
            lastScroll = currentScroll;
        });
    }
});

// Smooth scroll for header click (optional, if clicking title should scroll)
document.querySelector('h1')?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});