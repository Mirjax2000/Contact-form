(() => {
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("modal");
    const general = form.querySelector("#general");
    const support = form.querySelector("#support");
    const checkboxesArray = [general, support];
    checkboxesArray.forEach((checkbox) => {
        checkbox.addEventListener("click", (e) => {
            const current = e.target;
            if (current.checked) {
                checkboxesArray.forEach((box) => {
                    box.removeAttribute("required");
                    box.checked = false;
                    current.checked = true;
                    current.setAttribute("required", "");
                });
            } else {
                checkboxesArray.forEach((box) => {
                    box.setAttribute("required", "");
                });
            }
        });
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
            modal.classList.remove("hide");
            const formData = new FormData(form);
            const response = await fetch("/submit-form", {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log(result);
        };
    });
})();
