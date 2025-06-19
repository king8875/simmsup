
// header js -- common
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const heroSection = document.querySelector('.lo-first-section');

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


// loading -- common
window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
});

// to top button -- common
document.querySelector("#GoToTop").addEventListener("click", function () {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1.5,
        ease: "power2.out"
    });
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

// side menu js -- common
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.header_sidebar--btn');
    const sideMenuInner = document.querySelector('.side_menu--inner');
    const sideMenu = document.querySelector('#sideMenu');
    const closeBtn = document.querySelector('.close--btn');
    const sideOverlay = document.querySelector('.side_menu_overlay');
    const body = document.body;

    sideOverlay.addEventListener('click', function () {
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

document.addEventListener("DOMContentLoaded", () => {

    const headerNav = document.querySelector('.header_nav--list');
    const headerNavItem = document.querySelectorAll('.header_nav--list .header_nav--item');
    const headerSubNav = document.querySelectorAll('.header_subnav--block');

    headerNavItem.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            headerSubNav.forEach((sub, subIndex) => {
                if (subIndex === index) {
                    sub.classList.add('active');
                } else {
                    sub.classList.remove('active');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            headerSubNav[index].classList.remove('active');
        });
    });

    headerNavItem.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            headerNavItem.forEach((nav, i) => {
                if (i !== index) {
                    nav.classList.add('dimmed');
                } else {
                    nav.classList.remove('dimmed');
                }
            });
        });
    });
    headerNav.addEventListener('mouseleave', () => {
        headerNavItem.forEach(nav => nav.classList.remove('dimmed'));
    });
});
// headerSearchIcon.addEventListener("click", function () {
//     sideMobile.classList.add('active');
//     body.classList.add('scroll-lock');

// });
// closeBtn.addEventListener("click", function () {
//     sideMobile.classList.remove('active');
//     body.classList.remove('scroll-lock');
// });


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




// const pjbox = document.querySelector('.pj_img_box a');

// pjbox.addEventListener('mouseenter', function(){
//     pjbox.classList.add('lo-hover');
// });









// // pc
// mm.add("(min-width: 993px)", () => {});