const DownDrop = document.querySelector(".has-children");
const servicesLink = document.querySelector(".services");
const firstDownDrop = document.querySelector(".has-children a");
const firstSubMenu = document.querySelector(".first-sub-menu");
const secondDownDrop = document.querySelector(".sub-menu");
const seecondSubMenu = document.querySelector(".second-sub-menu");
const showList = document.querySelector(".nav-list");
const openListBtn = document.querySelector(".open-nav-list");
const closeListBtn = document.querySelector(".close-nav-list");
const scrollBtn = document.querySelector(".scrollbtn");
const links = document.querySelectorAll(".link");
const firstTestimonilaBox = document.querySelector(".testimonials-box.first");
const secondTestimonilaBox = document.querySelector(".testimonials-box.second");
console.log(servicesLink);

firstDownDrop.addEventListener("click", () => {
  firstSubMenu.classList.toggle("show");
  DownDrop.classList.toggle("space");
  if (!firstSubMenu.classList.contains("show")) {
    DownDrop.classList.remove("extraspace");
  }
});

secondDownDrop.addEventListener("click", () => {
  if (firstSubMenu.classList.contains("show")) {
    seecondSubMenu.classList.toggle("show");
    secondDownDrop.classList.toggle("space");
    DownDrop.classList.toggle("extraspace");
  }
});

openListBtn.addEventListener("click", () => {
  showList.classList.add("showlist");
  closeListBtn.classList.add("closeicon");
});
closeListBtn.addEventListener("click", () => {
  showList.classList.remove("showlist");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    window.scrollY = 0;
  });
});

// scrollBtn.addEventListener("click", () => {
//   window.scrollY = 0;
// });

// testimonilaBox.forEach((testi) => {});

// const slideBox = setInterval(function () {
//   slideBoxOne();
//   slideBoxTwo();
// }, 1000);

// const slideBoxOne = () => {
//   firstTestimonilaBox.classList.add("slide");
//   secondTestimonilaBox.classList.add("active");
// };
// const slideBoxTwo = () => {
//   firstTestimonilaBox.classList.add("active");
//   secondTestimonilaBox.classList.add("slide");
// };
