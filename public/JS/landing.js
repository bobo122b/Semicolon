const desktopNav = document.getElementById("main-nav__desktop");

const faders = document.querySelectorAll('.fade-in');

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

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})