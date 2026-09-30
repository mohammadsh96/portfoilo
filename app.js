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

    // Until a real Formspree ID replaces FORM_ID, send the message via the visitor's email client.
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", event => {
        if (!contactForm.action.includes("FORM_ID")) return;
        event.preventDefault();
        const { name, email, subject, message } = contactForm.elements;
        const body = `${message.value}\n\n— ${name.value} (${email.value})`;
        window.location.href = `mailto:mhmd.shrydh1996@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(body)}`;
    });
})();
