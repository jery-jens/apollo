document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const path = window.location.pathname ?? null;
    const access = Boolean(sessionStorage.getItem("access_granted")) ?? false;

    // Routes
    const lockedRoute = window.location.origin + "/";
    const baseRoute = window.location.origin + "/home";

    (() => {
        console.log(path);
        if (path === "/home") {
            return;
        } else if (path === "/") {
            console.log(access);
            access ? window.location.href === baseRoute : null;
        } else {
            access ? window.location.href === lockedRoute : null;
        };
    })();
});