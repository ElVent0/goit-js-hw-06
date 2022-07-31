const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("focus", (event) => {
    event.currentTarget.classList.remove("valid", "invalid");
});

inputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === +inputEl.dataset.length) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    };
});