document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");

    choices.forEach((choice, index) => {
        const check = choice.querySelector(".select-choice-wrapper");

        choice.addEventListener("click", () => {
            if (!choice.classList.contains("active")) {
                choices.forEach((innerChoice, innerIndex) => {
                    if (index === innerIndex) {
                        console.log("add", innerIndex)
                        // choice.classList.add("active");
                        // check.classList.add("active");
                    } else {
                        console.log("remove", innerIndex)
                        // choice.classList.remove("active");
                        // check.classList.remove("active");
                    };
                });
            };
        });
    });
});