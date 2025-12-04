
(function () {
  "use strict";

  // ########################## AOS ##########################
  AOS.init({
    // once: true
    offset: 100
  });


  // ########################## Tab ##########################
  new Swiper(".swiper-marquee", {
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 24,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  new Swiper(".swiper-marquee-bottom", {
    centeredSlides: true,
    speed: 6000,
    spaceBetween: 24,
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });


  // ########################## Accordion ##########################
  const accordion = document.querySelectorAll("[data-accordion]");
  accordion.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });


  // ############################## nav sub-menu toggle ##############################
  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownList = document.querySelector(".nav-dropdown-list");
  const navDropdownIcon = document.querySelector(".nav-dropdown-icon");

  navDropdown.addEventListener("click", () => {
    navDropdownList.classList.toggle("hidden");
    navDropdownIcon.classList.toggle("rotate-180");
  });

})();
