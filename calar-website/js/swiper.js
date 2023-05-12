var mySwiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    // If we need pagination
      
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // effect: "coverflow",
    //     // grabCursor: true,
    //     // centeredSlides: true,
    //     // slidesPerView: "auto",
    //     coverflowEffect: {
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 200,
    //       modifier: 1,
    //       slideShadows: true,
    //     },
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 1.4,
        spaceBetween: 35
      },
      769: {
        slidesPerView: 1.6,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 65
      }
    }
  })

  var mySwiper = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    // If we need pagination
      
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // effect: "coverflow",
    //     // grabCursor: true,
    //     // centeredSlides: true,
    //     // slidesPerView: "auto",
    //     coverflowEffect: {
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 200,
    //       modifier: 1,
    //       slideShadows: true,
    //     },
    // centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      550: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      769: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 2.4,
        spaceBetween: 50
      }
    }
  })
  var mySwiper = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 990,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true
    
  })

  var mySwiper = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    // If we need pagination
      
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 990,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // effect: "coverflow",
    //     // grabCursor: true,
    //     // centeredSlides: true,
    //     // slidesPerView: "auto",
    //     coverflowEffect: {
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 200,
    //       modifier: 1,
    //       slideShadows: true,
    //     },
    // centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      769: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 2.4,
        spaceBetween: 20
      }
    }
  })















