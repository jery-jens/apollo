document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const checker = document.querySelector(".js-date-checker");
    const wrapper = checker.parentElement;
    const dates = document.querySelectorAll(".date-item");

    // Positions
    const wTop = window.scrollY + wrapper.getBoundingClientRect().top;

    let prevScroll = 0;

    window.addEventListener("scroll", () => {
        const offset = window.innerHeight + window.scrollY;
        const margin = offset - wTop;
        const downScroll = prevScroll < window.scrollY ? true : false;
        console.log(margin);

        if (margin >= 0) {
            if (margin >= 0 && margin < 90) {

            };
        };

        prevScroll = window.scrollY;
    });
});