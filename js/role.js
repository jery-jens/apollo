document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const checkes = choice.querySelector(".select-choice-wrapper");

    choices.forEach((choice, index) => {
        choice.addEventListener("click", () => {
            if (!choice.classList.contains("active")) {
                choices.forEach((innerChoice, innerIndex) => {
                    if (index === innerIndex) {
                        choices[innerIndex].classList.add("active");
                        checkes[innerIndex].classList.add("active");
                    } else {
                        choices[innerIndex].classList.remove("active");
                        checkes[innerIndex].classList.remove("active");
                    };
                });
            };
        });
    });
});