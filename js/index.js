document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const path = window.location.pathname ?? null;
    const access = Boolean(sessionStorage.getItem("access_granted")) ?? false;

    // Routes
    const lockedRoute = window.location.origin + "/locked";
    const baseRoute = window.location.origin;

    (() => {
        console.log(path);
        if (path === "/") {
            return;
        } else if (path === "/locked") {
            access ? window.location.href === baseRoute : window.location.href === lockedRoute;
        } else {
            access ? window.location.href === lockedRoute : null;
        };
    })();
});