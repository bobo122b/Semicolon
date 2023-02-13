let stackBtn = document.getElementById("mob-nav__btn");
let modal = document.getElementById("modal");
let mobNav = document.getElementById("mob-nav");

stackBtn.addEventListener("click", () => {
    mobNav.style.display = "block";
    stackBtn.style.borderColor = "2px solid #292E35";
    modal.style.display = "block";
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
        window.scrollTo(scrollLeft, scrollTop);
    }
})

modal.addEventListener("click", () => {
    mobNav.style.display = "none";
    modal.style.display = "none";
    window.onscroll = null;
})