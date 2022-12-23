document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".select-role");
    const url = `/dashboards/${sessionStorage.getItem("target") ?? "participant"}`;

    btn.setAttribute("href", url);
});