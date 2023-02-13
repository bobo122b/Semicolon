let desktopNav = document.getElementById("main-nav__desktop");

window.onscroll = () => {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        desktopNav.classList.remove("nav-colored");
        desktopNav.classList.add("nav-transparent");
        desktopNav.style.boxShadow = "0px 0px 0px 0px black";
    } else {
        desktopNav.classList.remove("nav-transparent");
        desktopNav.classList.add("nav-colored");
        desktopNav.style.boxShadow = "";
    }
}