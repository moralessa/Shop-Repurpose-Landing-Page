function inititalizeSwiper(){
  return swiper = new Swiper(".mobile-carousel", {
    hashNavigation: {
        watchState: true,
    },
      pagination: {
        el: ".swiper-pagination",
      },
    });
}

function checkSwiperWindowSize(){
  let x = window.matchMedia('(max-width: 1024px)');
  if(x.matches){
    inititalizeSwiper();
  }
}

window.addEventListener('resize', checkSwiperWindowSize);
checkSwiperWindowSize();