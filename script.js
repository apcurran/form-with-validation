// IIFE to run on startup

const setup = (() => {
    const form = document.querySelector("form");
    const name = document.querySelector("#name");
    const email = document.querySelector("#mail");
    const pwd = document.querySelector("#pwd");
    const error = document.querySelectorAll(".error");

    name.addEventListener("input", () => {
        if (name.validity.valid) {
            error[0].textContent = "";
            error[0].className = "error";
        }
    });

    email.addEventListener("input", () => {
        if (email.validity.valid) {
            error[1].textContent = "";
            error[1].className = "error";
        }
    });

    pwd.addEventListener("input", () => {
        if (pwd.validity.valid) {
            error[2].textContent = "";
            error[2].className = "error";
        }
    });
 
    form.addEventListener("submit", () => {
        if (!name.validity.valid) {
            error[0].textContent = "Please enter a full name";
            error[0].className = "error active";

            event.preventDefault();
        }
        if (!email.validity.valid) {
            error[1].textContent = "Please enter a valid email that includes @ and .com";
            error[1].className = "error active";

            event.preventDefault();
        }
        if (!pwd.validity.valid) {
            error[2].textContent = "Please type a password between 5 and 10 characters."
            error[2].className = "error active";

            event.preventDefault();
        }
    });
})();