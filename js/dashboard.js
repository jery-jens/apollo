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
                content.style.display = "block";
                plus.style.display = "none";
                minus.style.display = "flex";
            } else {
                btn.classList.add("active");
                content.style.display = "none";
                plus.style.display = "flex";
                minus.style.display = "none";
            };
        });
    });
});
