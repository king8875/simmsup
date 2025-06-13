



// 실제 페이지 로드 완료 후
window.addEventListener('load', () => {
    const preLoad = gsap.timeline();

    preLoad.set('.header',{yPercent : -100});
    preLoad.set('.wrapper',{y:-80});
    preLoad.set('.hero_section .swiper', { height: '100vh' });


    preLoad.to('.wrapper',{y:80, duration:1});
    preLoad.to('.hero_section .swiper', { height: "60vh", duration :2 });
    preLoad.to('.header',{yPercent : 0});

});




let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero_section');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom > 0) {
        gsap.to(header, { y: '0%', duration: 0.5 });
    } else {
        if (currentScrollY > lastScrollY) {
            gsap.to(header, { y: '-100%', duration: 0.5 });
        } else {
            gsap.to(header, { y: '0%', duration: 0.5 });
        }
    }

    lastScrollY = currentScrollY;
});

// loading
window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
});


// to top button
document.querySelector("#GoToTop").addEventListener("click", function () {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1.5,
        ease: "power2.out"
    });
});



// hero swiper
const slides = document.querySelectorAll('.hero_content .img--block');
const activeSlide = document.querySelector('.hero_content .swiper-slide-active .img--block');

const mainswiper = new Swiper('.hero_section .swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    effect: "fade",
    autoplay: {
        delay: 5000,
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
    on: {
        slideChangeTransitionStart: function () {
            const allImgBlocks = document.querySelectorAll('.hero_content .img--block');
            allImgBlocks.forEach(block => block.classList.remove('scale-up'));

            const activeSlide = this.slides[this.activeIndex];
            const imgBlock = activeSlide.querySelector('.img--block');
            const textBlock = activeSlide.querySelector('.tx--block');

            if (imgBlock) {
                imgBlock.classList.add('scale-up');
            }
            if (textBlock) {
                gsap.fromTo(textBlock,
                    { opacity: 0.5, yPercent: 100 },
                    { opacity: 1, yPercent: 0, duration: 1 }
                )
            }
        },
        slideChangeTransitionEnd: function () {
            imgBlock.classList.add('scale-up');
        },

    }
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



// video gsap
gsap.set(".video_inner", { autoAlpha: 0, yPercent: 100 });
gsap.set(".video_header", { autoAlpha: 0 });
const video = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('.video_section'),
        start: "50% 70%",
        end: "100% 70%",
    }
});
video.to('.video_inner', {
    autoAlpha: 1,
    yPercent: 0,
    duration: 1
});

video.to('.video_header', {
    autoAlpha: 1,
    duration: 1
});

// together gsap
gsap.set(".tg--left", { autoAlpha: 0, yPercent: 100 });
gsap.set(".tg--right .tg_btn--item", { autoAlpha: 0, yPercent: 100 });
const together = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('.together_section'),
        start: "0% 70%",
        end: "0% 70%",

    }
});
together.to('.tg--left', {
    autoAlpha: 1,
    yPercent: 0,
    duration: 1
});
together.to('.tg--right .tg_btn--item', {
    autoAlpha: 1,
    yPercent: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2,
});




// project
const pjheader = document.querySelector('.project_section .section_header--block');
const pjcontent = document.querySelector('.project_section .pj_content--block');

gsap.set(pjheader, { autoAlpha: 0 });
gsap.set(pjcontent, {
    autoAlpha: 0,
    yPercent: 10
});
const project = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('.project_section'),
        start: "0% 70%",
        end: "100% 70%",
    }
});

project.to(pjheader, {
    autoAlpha: 1,
    duration: 1
});
project.to(pjcontent, {
    autoAlpha: 1,
    duration: 0.5,
    yPercent: 0
});





// news
const newsheader = document.querySelector('.news_section .section_header--block');
const newscontent = document.querySelectorAll('.news_section .news_item');

gsap.set(newsheader, { autoAlpha: 0 });
gsap.set(newscontent, {
    autoAlpha: 0,
    yPercent: 20
});
const news = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('.news_content'),
        start: "0% 80%",
        end: "100% 80%",
    }
});

project.to(newsheader, {
    autoAlpha: 1,
    duration: 1
});
project.to(newscontent, {
    autoAlpha: 1,
    duration: 0.5,
    yPercent: 0,
    stagger : 0.3
});






// pc
mm.add("(min-width: 993px)", () => {






});