


  
// 실제 페이지 로드 완료 후
window.addEventListener('load', () => {

    const preLoad = gsap.timeline({});

    preLoad.set('.header', { yPercent: -100 });
    preLoad.set('.wrapper', { y: -80 });
    preLoad.set('.hero_section .swiper', { height: '100vh' });
    preLoad.set('.hero_swiper_control', {autoAlpha:0});
    preLoad.set('.hero_swiper_btn--group',{autoAlpha:0});

    preLoad.to('.wrapper', { y: 0, duration: 0.8 });
    preLoad.to('.hero_section .swiper', { height: "75vh", duration: 1.6 });
    preLoad.to('.hero_swiper_control', {autoAlpha:1});
    preLoad.to('.hero_swiper_btn--group',{autoAlpha:1});

    preLoad.to('.header', { yPercent: 0 });
});


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
        delay: 4000,
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
                    { opacity: 0.5, yPercent: 100, duration:0.5 },
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


// together gsap
gsap.set(".tg--left", { autoAlpha: 0,  y:50 });
gsap.set(".tg--right .tg_btn--item", { autoAlpha: 0, });
const together = gsap.timeline({
    scrollTrigger: {
        trigger: document.querySelector('.together_section'),
        start: "0% 70%",
        end: "0% 70%",
    }
});
together.to('.tg--left', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8
});
together.to('.tg--right .tg_btn--item', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power4.out",
    stagger: 0.3,
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
    duration: 0.5
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
    duration: 0.5
});
project.to(newscontent, {
    autoAlpha: 1,
    duration: 0.5,
    yPercent: 0,
    stagger : 0.3
});




// sidemenu target js
// document.querySelectorAll('.side_bottom--left a').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.dataset.target;
//         const targetEl = document.getElementById(targetId);

//         if (targetEl) {
//             targetEl.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// side menu js
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.header_sidebar--btn');
    const sideMenuInner = document.querySelector('.side_menu--inner');
    const sideMenu = document.querySelector('#sideMenu');
    const closeBtn = document.querySelector('.close--btn');
    const sideOverlay = document.querySelector('.side_menu_overlay');
    const body = document.body;

    sideOverlay.addEventListener('click', function(){
        sideMenu.classList.remove("active"); 
        sideOverlay.classList.remove('active');
    });

    toggleBtn.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
        sideOverlay.classList.toggle('active');
    });

    // 닫기
    closeBtn.addEventListener("click", function () {
        sideMenuInner.classList.remove("active");
        sideMenu.classList.remove("active");
        sideOverlay.classList.remove('active');
    });
});

const headerSearchIcon = document.querySelector('.header_mobile .search_ic--block');
const sideMobile = document.querySelector('.side_menu--block--mobile');
const closeBtn = document.querySelector('.side_menu--block--mobile #closeBtn');
const body = document.body;
const sideOverlay = document.querySelector('.side_menu_overlay');

headerSearchIcon.addEventListener("click", function () {
    sideMobile.classList.add('active');
    body.classList.add('scroll-lock');

});
closeBtn.addEventListener("click", function () {
    sideMobile.classList.remove('active');
    body.classList.remove('scroll-lock');
});


// marquee
// const marquee = document.querySelector('.marquee--block');

// gsap.set(marquee,{yPercent:100});

// const marqueeBlock = gsap.timeline({
//     scrollTrigger: {
//         trigger: document.querySelector('.footer'),
//         start: "80% 100%",
//         end: "80% 100%",
//         scrub:1,
//     }
// });

// marqueeBlock.to(marquee,{yPercent:0, duration :2})


// pc
mm.add("(min-width: 993px)", () => {






});