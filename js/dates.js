document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const checker = document.querySelector(".js-date-checker");
    const wrapper = checker.parentElement;
    const dates = document.querySelectorAll(".date-item");

    // Positions
    const wTop = window.scrollY + wrapper.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        const offset = window.innerHeight + window.scrollY;
        const margin = offset - wTop;

        if (margin >= 0) {
            console.log("starttttt")
            dates.forEach((date) => {
            });
        };
    });
});