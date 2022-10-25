document.addEventListener("DOMContentLoaded", () => {
    let username = prompt("Please enter the username.");
    while(username !== "TelenetApollo"){
        username = prompt("Please enter the username."); 
    };

    let password = prompt("Please enter the password.");
    while(password !== "Apollo"){
        password = prompt("Please enter the password."); 
    };

    sessionStorage.setItem("access_granted", true);

    window.location = window.location.origin + "/home";
});