document.addEventListener("DOMContentLoaded", () => {
    console.log('test');
    // Elements
    const checker = document.querySelector(".js-date-checker");
    const wrapper = checker.parentElement;

    // Positions
    const wTop = wrapper.getBoundingClientRect().top;
    console.log(wTop);
});