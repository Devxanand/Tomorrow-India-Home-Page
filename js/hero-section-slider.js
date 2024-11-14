
  const swiper = new Swiper('.swiper', {
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Slide delay
      disableOnInteraction: false,
    },
    effect: 'slide', // Sliding effect
    grabCursor: true, // Enables swipe functionality
  });

