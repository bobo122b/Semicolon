let desktopNav = document.getElementById("main-nav__desktop");

window.onscroll = () => {
    if (document.body.scrollTop >= 450 || document.documentElement.scrollTop >= 450) {
        desktopNav.classList.remove("nav-colored");
        desktopNav.classList.add("nav-transparent");
        desktopNav.style.boxShadow = "0px 0px 0px 0px black";
    } else {
        desktopNav.classList.remove("nav-transparent");
        desktopNav.classList.add("nav-colored");
        desktopNav.style.boxShadow = "";
    }
}