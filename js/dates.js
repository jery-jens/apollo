document.addEventListener("DOMContentLoaded", () => {
    console.log('test');
    // Elements
    const checker = document.querySelector(".js-date-checker");
    const wrapper = checker.parentElement;

    // Positions
    const wTop = window.scrollY + wrapper.getBoundingClientRect().top;
    const wBottom = window.scrollY + wrapper.getBoundingClientRect().bottom;
    const wHeight = wTop - wBottom;

    console.log(wHeight, wBottom, wTop);
});