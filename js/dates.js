document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const checker = document.querySelector(".js-date-checker");
    const wrapper = checker.parentElement;

    // Positions
    const wTop = window.scrollY + wrapper.getBoundingClientRect().top;
    const wBottom = window.scrollY + wrapper.getBoundingClientRect().bottom;
    const wHeight = wTop - wBottom;

    const cTop = window.scrollY + wrapper.getBoundingClientRect().top;

    document.addEventListener("scroll", () => {
        console.log(cTop);
    });

    console.log(wHeight, wBottom, wTop);
});