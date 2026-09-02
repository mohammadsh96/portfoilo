(function () {
    const sections = [...document.querySelectorAll(".control")];

    function activate(button) {
        document.querySelector(".active-btn").classList.remove("active-btn");
        button.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
    }

    sections.forEach(button => {
        button.addEventListener("click", () => activate(button));
        button.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activate(button);
            }
        });
    });

    const themeBtn = document.querySelector(".theme-btn");
    const toggleTheme = () => document.body.classList.toggle("light-mode");
    themeBtn.addEventListener("click", toggleTheme);
    themeBtn.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleTheme();
        }
    });
})();
