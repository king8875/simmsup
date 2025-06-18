// // header js -- common
// let lastScrollY = window.scrollY;
// const header = document.querySelector('.header');
// const heroSection = document.querySelector('.lo-first-section');

// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;
//     const heroBottom = heroSection.getBoundingClientRect().bottom;

//     if (heroBottom > 0) {
//         gsap.to(header, { yPercent: 0, duration: 0.5 });
//     } else {
//         if (currentScrollY > lastScrollY) {
//             gsap.to(header, { yPercent: -100, duration: 0.5 });
//         } else {
//             gsap.to(header, { yPercent: 0, duration: 0.5 });
//         }
//     }
//     lastScrollY = currentScrollY;
// });

