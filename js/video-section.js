document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container-3', {
        loop: true,
        slidesPerView: 1.8, // Default for larger screens
        spaceBetween: 20, // Space between slides
        slidesPerGroup: 1, // Scroll one slide at a time
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.video-swiper-pagination', // Pagination for navigation dots (if needed)
            clickable: true,
        },
        breakpoints: {
            782: {
                slidesPerView: 1.8, // Show 1.3 slides for screens <= 768px
            },
        },
    });

    document.querySelectorAll('.video-wrapper').forEach((wrapper) => {
        const video = wrapper.querySelector('video');
        const thumbnail = wrapper.querySelector('img');
        const playBtn = wrapper.querySelector('.play-btn');
        const pauseBtn = wrapper.querySelector('.pause-btn');
        const volumeBtn = wrapper.querySelector('.volume-btn i');

        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                playBtn.style.display = 'flex';
                pauseBtn.style.display = 'none';
                isPlaying = false;
            } else {
                thumbnail.style.display = 'none';
                video.style.display = 'block';
                video.play();
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'flex';
                isPlaying = true;
            }
        };

        playBtn.addEventListener('click', togglePlayPause);
        thumbnail.addEventListener('click', togglePlayPause);
        pauseBtn.addEventListener('click', togglePlayPause);

        video.addEventListener('click', togglePlayPause);

        video.addEventListener('ended', () => {
            video.style.display = 'none';
            thumbnail.style.display = 'block';
            playBtn.style.display = 'flex';
            pauseBtn.style.display = 'none';
            isPlaying = false;
        });

        volumeBtn.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                volumeBtn.className = 'fa-solid fa-volume-high';
            } else {
                video.muted = true;
                volumeBtn.className = 'fa-solid fa-volume-xmark';
            }
        });
    });
});
