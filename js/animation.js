/*
* Resources:
* https://greensock.com/docs/v3/Plugins/ScrollTrigger
* https://greensock.com/forums/topic/29098-timeline-with-scroll-trigger/
*/

//This is a plugin you can install from Gsap original
//It's need to do the onscroll effect
gsap.registerPlugin(ScrollTrigger);
gsap.from("#desktop-layout-icon-container",{
    autoAlpha: 0,
    scrollTrigger:  "#desktop-layout-icon-container",
    scrub: true,
    duration: 2,  
    ease: "power2.out",
    opacity: 0,
    stagger: .5
});
    
gsap.from("#social-good-text",{
    scrollTrigger: "#social-good-text",
    duration: 3,  
    ease: "power4.out",
    opacity: 0,
    stagger: .5
})
gsap.from("#are-you-ready-text",{
    scrollTrigger: "#are-you-ready-tex",
    duration: 2,  
    ease: "power4.out",
    opacity: 0,
})
gsap.from("#make-a-difference-text",{
    scrollTrigger: "#make-a-difference-text",
    duration: 2,
    ease: "power4.out",
    opacity: 0,
})
gsap.from("#footer-cta-button",{
    scrollTrigger:  "#footer-cta-button",
    scrub: true,
    duration: .5,  
    ease: "power2.out",
    opacity: 0
})