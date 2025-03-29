document.addEventListener("DOMContentLoaded", function () {
   const burger = document.querySelector(".burger-menu");
   const navMenu = document.querySelector(".header_right--mobile--list");

   burger.addEventListener("click", function () {
       navMenu.classList.toggle("active");
       burger.classList.toggle("active");
   });

   document.addEventListener("click", function (event) {
       if (!burger.contains(event.target) && !navMenu.contains(event.target)) {
           navMenu.classList.remove("active");
           burger.classList.remove("active");
       }
   });
});
