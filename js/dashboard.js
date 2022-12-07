document.addEventListener("DOMContentLoaded", () => {
    /**
     * Dashboard sections
     */
    const dashItems = document.querySelectorAll(".dashboard-item");
    
    dashItems.forEach((item, i) => {
        const btn = item.querySelector(".dashboard-item-btn");
        const plus = btn.querySelector(".plus");
        const minus = btn.querySelector(".minus");
        const content = item.querySelector(".item-text");

        btn.addEventListener("click", () => {
            if (btn.classList.contains("active")) {
                item.classList.remove("active");
                btn.classList.remove("active");
                content.classList.remove("active");

                plus.style.display = "block";
                minus.style.display = "none";
            } else {
                item.classList.add("active");
                btn.classList.add("active");
                content.classList.add("active");

                plus.style.display = "none";
                minus.style.display = "block";
            };
        });
    });

    /**
     * Configure role
     */

    const role = localStorage.getItem("role");
    const roleItems = document.querySelectorAll(".role");

    if (role === "participant") {
        roleItems[0].style.display = "flex";
    } else if (role === "track-lead") {
        roleItems[1].style.display = "flex";
    } else if (role === "challenge-owner") {
        roleItems[2].style.display = "flex";
    };

    /**
     * Dashboard items
     */

    const dashElements = document.querySelectorAll(".dash-item");

    dashElements.forEach((item) => {
        const id = item.querySelector(".item-identifier").innerHTML;

        if (id === "Participant" && role !== "participant") {
            item.style.display = "hidden";
        } else if (id === "Track lead" && role !== "track-lead") {
            item.style.display = "hidden";
        } else if (id === "Challenge owner" && role !== "challenge-owner") {
            item.style.display = "hidden";
        };
    });
});
