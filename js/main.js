if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".swiper", {
    effect: "fade",
    crossFade: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabsPage = document.querySelectorAll(".tabs__content-page");

tabItem.forEach((el) => {
  el.addEventListener("click", open);
});

function open(e) {
  const targetTab = e.currentTarget;

  const tab = targetTab.dataset.tab;

  tabItem.forEach((el) => {
    el.classList.remove("tabs__btn-item--active");
  });

  targetTab.classList.add("tabs__btn-item--active");

  tabsPage.forEach((el) => {
    el.classList.remove("tabs__content-page--active");
  });

  document.querySelector(`#${tab}`).classList.add("tabs__content-page--active");
}

const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector("header nav.menu");

burgerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("menu--active");
});
