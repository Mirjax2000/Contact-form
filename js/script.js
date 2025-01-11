"use strict";
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
                    // @ts-ignore
                    box.checked = false;
                    current.checked = true;
                    current.setAttribute("required", "");
                });
            }
            else {
                checkboxesArray.forEach((box) => {
                    box.setAttribute("required", "");
                });
            }
        });
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            modal.classList.remove("hide");
        }
    });
})();
