// to top button
document.querySelector("#GoToTop").addEventListener("click", function () {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1.5,
        ease: "power2.out"
    });
});




const mainswiper = new Swiper('.hero_section .swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.hero_section .swiper-button-next',
        prevEl: '.hero_section .swiper-button-prev',
    },
    // breakpoints: {
    //   0: { slidesPerView: 1 },
    //   1000: { slidesPerView: 3 }
    // }
});



const toggleBtn = document.querySelector('.autoplay--btn');
const playIcon = toggleBtn.querySelector('.play_ic--block');
const pauseIcon = toggleBtn.querySelector('.pause_ic--block');
let isPlaying = true;

playIcon.style.display = 'none';
pauseIcon.style.display = 'block';

toggleBtn.addEventListener('click', function () {
    if (isPlaying) {
        mainswiper.autoplay.stop();
        toggleBtn.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        mainswiper.autoplay.start();
        toggleBtn.classList.add('playing');
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
    isPlaying = !isPlaying;
});
