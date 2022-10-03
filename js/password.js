document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.querySelector("#password");

    passwordField.addEventListener("onchange", (e) => {
        console.log(e);
    });
});