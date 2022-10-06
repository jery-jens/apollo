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
        console.log(margin,wrapper.getBoundingClientRect().top)

        if (margin >= 0) {
            if (margin >= 0 && margin < 90) {
                console.log("hide them all")
            };

            if (margin >= 90 && margin < 180) {
                console.log("show 1");
            };
            
            if (margin >= 180 && margin < 270) {
                console.log("show 2");
            };

            if (margin >= 270 && margin < 360) {
                console.log("show 3");
            };

            if (margin >= 360 && margin < 450) {
                console.log("show 4");
            };

            if (margin >= 450 && margin < 540) {
                console.log("show 5");
            };

            if (margin >= 540 && margin < 630) {
                console.log("show 6");
            };

            if (margin >= 630 && margin < 720) {
                console.log("show 7");
            };
        };

        prevScroll = window.scrollY;
    });
});