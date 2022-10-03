document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordField = document.querySelector("#password");
    // const submitButton = document.querySelector(".inner-submit");
    const errorMessage = document.querySelector(".wrong-password");

    // Variables
    const password = "test";

    Webflow.push(function() {
        $('form').submit(function() {
            console.log(passwordField.value, password);

            if (passwordField.value !== password) {
                errorMessage.style.display = "block";
            } else {

            };
        });
    });
});