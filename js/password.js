document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordField = document.querySelector("#password");
    const submitButton = document.querySelector(".submit");
    const errorMessage = document.querySelector(".wrong-password");

    // Variables
    const password = "Tellit";

    submitButton.addEventListener("click", () => {
        if (passwordField.value !== password) {
            errorMessage.style.display = "block";
        } else {
            sessionStorage.setItem("access_granted", true);
            window.location.href = window.location.origin + "/home";
        };
    });
});