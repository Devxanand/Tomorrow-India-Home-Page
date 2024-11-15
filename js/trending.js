document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-2', {
        slidesPerView: 3, // Default: Show 3 slides at once
        centeredSlides: true, // Center the active slide
        loop: true, // Enable infinite scrolling
        spaceBetween: 20, // Space between slides
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
        },
        breakpoints: {
            768: {
                slidesPerView: 3, // Show 3 slides for screens >= 768px
            },
            0: {
                slidesPerView: 1, // Show 1 slide for screens < 768px
                centeredSlides: true, // Keep the active slide centered
            },
        },
    });
});
