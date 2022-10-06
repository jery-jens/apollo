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
        let order = [0, 1, 2, 3, 4, 5, 6];

        if (margin >= 0) {
            if (margin >= 0 && margin < 90) {
                console.log("hide them all")
                order = [0, 1, 2, 3, 4, 5, 6];
            };

            if (margin >= 90 && margin < 180) {
                console.log("show 1");
                order = [0, 1, 2, 3, 4, 5, 6];
            };
            
            if (margin >= 180 && margin < 270) {
                console.log("show 2");
                order = [1, 2, 3, 4, 5, 6, 0];

            };

            if (margin >= 270 && margin < 360) {
                console.log("show 3");
                order = [2, 3, 4, 5, 6, 0, 1];
            };

            if (margin >= 360 && margin < 450) {
                console.log("show 4");
                order = [3, 4, 5, 6, 0, 1, 2];
            };

            if (margin >= 450 && margin < 540) {
                console.log("show 5");
                order = [4, 5, 6, 0, 1, 2, 3];
            };

            if (margin >= 540 && margin < 630) {
                console.log("show 6");
                order = [5, 6, 0, 1, 2, 3, 4];
            };

            if (margin >= 630 && margin < 720) {
                console.log("show 7");
                order = [6, 0, 1, 2, 3, 4, 5];
            };

            for (let i = 0; i < dates.length; i++) {
                const prevClassName = `date-item-${order[0-1] ?? 0}`;
                const nextClassName = `date-item-${order[2] ?? 0}`;
                const className = `date-item-${order[i]}`;

                console.log("remove", prevClassName, nextClassName, order);
                console.log("add", className);

                dates[i].classList.remove(prevClassName ?? null, nextClassName ?? null);
                dates[i].classList.add(className);
            };
        };

        prevScroll = window.scrollY;
    });
});