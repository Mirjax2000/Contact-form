(() => {
  const form = document.getElementById("contactForm") as HTMLFormElement;
  const modal = document.getElementById("modal") as HTMLDivElement;

  const general: Element = form.querySelector("#general") as HTMLInputElement;
  const support: Element = form.querySelector("#support") as HTMLInputElement;

  const checkboxesArray: Element[] = [general, support];

  checkboxesArray.forEach((checkbox: Element): void => {
    checkbox.addEventListener("click", (e: Event): void => {
      const current = e.target as HTMLInputElement;
      if (current.checked) {
        checkboxesArray.forEach((box: Element): void => {
          box.removeAttribute("required");
          // @ts-ignore
          box.checked = false;
          current.checked = true;
          current.setAttribute("required", "");
        });
      } else {
        checkboxesArray.forEach((box: Element): void => {
          box.setAttribute("required", "");
        });
      }
    });
  });

  form.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.classList.remove("hide");
    }
  });
})();
