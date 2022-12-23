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
                btn.classList.remove("active");
                content.classList.remove("active");
                plus.style.display = "none";
                minus.style.display = "flex";
            } else {
                btn.classList.add("active");
                content.classList.add("active");
                plus.style.display = "flex";
                minus.style.display = "none";
            };
        });
    });
});
