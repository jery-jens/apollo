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
        var rect = wrapper.getBoundingClientRect();

        const inView =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        
        console.log(inView)
        if (cTop ) {
            dates.forEach((date) => {

            });
        };
    });

    console.log(wHeight, wBottom, wTop);
});