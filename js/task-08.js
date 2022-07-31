const formEl = document.querySelector(".login-form");

const functionForm = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const object = {};

    if (email === "" || password === "") {
        alert("Заповни всі поля, лось");
        
    } else if (email !== "" && password !== "") {
        object.email = email;
        object.password = password;
        console.log(object);

        event.currentTarget.reset();
    };
};

formEl.addEventListener("submit", functionForm);

