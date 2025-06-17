// header js
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero_section');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom > 0) {
        gsap.to(header, { yPercent: 0, duration: 0.5 });
    } else {
        if (currentScrollY > lastScrollY) {
            gsap.to(header, { yPercent: -100, duration: 0.5 });
        } else {
            gsap.to(header, { yPercent: 0, duration: 0.5 });
        }
    }
    lastScrollY = currentScrollY;
});


const aboutSwiper = new Swiper('.abswiper_section .swiper', {

    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        clickable: true,

        el: '.swiper-pagination',
    },
  

});








document.addEventListener("DOMContentLoaded", () => {
    const abtoggleBtn = document.querySelector('.abswiper_section .autoplay--btn');
    const playIcon = abtoggleBtn.querySelector('.play_ic--block');
    const pauseIcon = abtoggleBtn.querySelector('.pause_ic--block');
    let isPlaying = true;
    
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    
    abtoggleBtn.addEventListener('click', function () {
        if (isPlaying) {
            aboutSwiper.autoplay.stop();
            abtoggleBtn.classList.remove('playing');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            aboutSwiper.autoplay.start();
            abtoggleBtn.classList.add('playing');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }
        isPlaying = !isPlaying;
    });
    

   
});