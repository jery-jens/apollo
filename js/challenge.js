document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".select-role");
    const url = `/roles/${sessionStorage.getItem("target") ?? "participant"}`;

    btn.setAttribute("href", url);
});