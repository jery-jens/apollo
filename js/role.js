document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".gotodashboard");
    let target = "participant";

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("participant")) {
                target = "participant";
            };

            if (btn.classList.contains("track-lead")) {
                target = "track-lead";
            };

            if (btn.classList.contains("challenge-owner")) {
                target = "challenge-owner";
            };
    
            sessionStorage.setItem("target", target);
        });
    });
});