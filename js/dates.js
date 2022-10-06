document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const checker = document.querySelector(".js-date-checker");
    const wrapper = checker.parentElement;
    const dates = document.querySelectorAll(".date-item");

    // Positions
    const wTop = window.scrollY + wrapper.getBoundingClientRect().top;
    const wBottom = window.scrollY + wrapper.getBoundingClientRect().bottom;
    const wHeight = wBottom - wTop;

    const cTop = window.scrollY + checker.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        const offset = window.innerHeight + window.scrollY;
        console.log(offset, wTop);
        if (cTop ) {
            dates.forEach((date) => {

            });
        };
    });

    console.log(wHeight, wBottom, wTop);
});