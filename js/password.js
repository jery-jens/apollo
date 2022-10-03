document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordField = document.querySelector("#password");
    const submitButton = document.querySelector(".inner-submit");

    // Variables
    const password = "test";

    passwordField.addEventListener("onchange", (e) => {
        console.log(e);
    });

    Webflow.push(function() {
        $('form').submit(function() {
            console.log(passwordField.value);
            return false;
        });
    });
});