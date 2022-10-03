document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordField = document.querySelector("#password");
    // const submitButton = document.querySelector(".inner-submit");
    const errorMessage = document.querySelector(".wrong-password");

    // Variables
    const password = "test";

    console.log(passwordField)

    passwordField.addEventListener("input", (e) => {
        console.log(e);
    });

    Webflow.push(function() {
        $('form').submit(function() {
            console.log(passwordField.value);

            if (passwordField.value !== password) {
                errorMessage.style.display = "block";
            } else {

            };
        });
    });
});