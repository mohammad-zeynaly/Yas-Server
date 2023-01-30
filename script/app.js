// select Element To Dom
const overlay = document.querySelector("#overlay");
const mobileNavBtn = document.querySelector(".mobile-nav-btn__line");
const mobileMenu = document.querySelector(".mobile-nav-menu");

// menu navbar opens
function mobileMenuOpen () {
    mobileNavBtn.classList.toggle("mobile-nav__menu--active")
    if(mobileNavBtn.classList.contains("mobile-nav__menu--active")){
        mobileMenu.classList.add("mobile-nav-menu--open");
        overlay.classList.add("overlay");
    }else{
        mobileMenu.classList.remove("mobile-nav-menu--open");
        overlay.classList.remove("overlay");
    }
}

// overly all close
function overlayHandler () {
    mobileMenu.classList.remove("mobile-nav-menu--open");
    overlay.classList.remove("overlay");
    mobileNavBtn.classList.remove("mobile-nav__menu--active")
}

mobileNavBtn.addEventListener("click",mobileMenuOpen);
overlay.addEventListener("click",overlayHandler)
var swiper = new Swiper('.comment-swiper', {
    loop: true,
    autoplay : {
        delay:3000,
    },
    effect: "cards",
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

})
