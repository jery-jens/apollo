document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const passwordField = document.querySelector("#password");
    const submitButton = document.querySelector(".submit");
    const errorMessage = document.querySelector(".wrong-password");

    window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);

    // Variables
    const password = "Tellit";
    const scPassword = "tellit";

    Webflow.push(function() {
        $('form').submit(function() {
            if (passwordField.value !== password) {
                errorMessage.style.display = "block";
            } else if (passwordField.value !== scPassword) {
                errorMessage.style.display = "block";
            } else {
                sessionStorage.setItem("access_granted", true);
                window.location.href = window.location.origin + "/home";
            };

            document.querySelector("form").style.display = "flex";
        });
      });

    submitButton.addEventListener("click", () => {
        if (passwordField.value !== password) {
            errorMessage.style.display = "block";
        } else if (passwordField.value !== scPassword) {
            errorMessage.style.display = "block";
        } else {
            sessionStorage.setItem("access_granted", true);
            window.location.href = window.location.origin + "/home";
        };
    });
});