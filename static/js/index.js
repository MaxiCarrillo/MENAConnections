window.document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const menuOpen = document.getElementById("menuOpen");
    const menuClose = document.getElementById("menuClose");

    menuOpen.addEventListener("click", function () {
        nav.classList.add("nav--active");
        document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener("click", function () {
        nav.classList.remove("nav--active");
        document.body.style.overflow = 'auto';
    });
});
