"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (form.checkValidity()) {
            modal.classList.remove("hide");
            const formData = new FormData(e.target);
        }
    }));
})();
