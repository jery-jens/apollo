document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");

    choices.forEach((choice, index) => {
        choice.addEventListener("click", () => {
            if (!choice.classList.contains("active")) {
                choices.forEach((innerChoice, innerIndex) => {
                    
                });
            };
        });
    });
});