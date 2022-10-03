document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordField = document.querySelector("#password");
    const submitButton = document.querySelector(".submit");
    const errorMessage = document.querySelector(".wrong-password");

    // Variables
    const password = "test";

    submitButton.addEventListener("click", () => {
        console.log(passwordField.value, password);

        if (passwordField.value !== password) {
            errorMessage.style.display = "block";
        } else {

        };
    });
});