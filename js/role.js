document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const checkes = document.querySelectorAll(".select-choice-wrapper");
    const submit = document.querySelector(".role-submit");
    let role = "participant";

    choices.forEach((choice, index) => {
        choice.addEventListener("click", () => {
            if (!choice.classList.contains("active")) {
                choices.forEach((innerChoice, innerIndex) => {
                    if (index === innerIndex) {
                        choices[innerIndex].classList.add("active");
                        checkes[innerIndex].classList.add("active");
                        role = choices[innerIndex].id;
                    } else {
                        choices[innerIndex].classList.remove("active");
                        checkes[innerIndex].classList.remove("active");
                    };
                });
            };
        });
    });

    submit.addEventListener("click", () => {
        localStorage.setItem("role", role);
        window.location.href = window.location.origin + "/dashboard";
    });
});