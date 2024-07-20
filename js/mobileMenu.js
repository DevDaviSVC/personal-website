var mobileUlElement = document.querySelector("nav.mobile-menu > ul");
var mobileIconElement = document.querySelector("nav.mobile-menu > i");

mobileIconElement.addEventListener("click", () => {
    if (mobileUlElement.checkVisibility()) {
        mobileUlElement.style.opacity = "0";
        mobileUlElement.style.top = "100px";
        setTimeout(() => {mobileUlElement.style.display = "none";}, 500);
    } else {
        mobileUlElement.style.display = "block";
        requestAnimationFrame(() => {
            mobileUlElement.style.top = "70px";
            mobileUlElement.style.opacity = "1";
        });
    }
});