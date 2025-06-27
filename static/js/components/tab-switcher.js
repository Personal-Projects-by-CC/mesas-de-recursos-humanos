const tabButtons = document.querySelectorAll(".tabs__button");

tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        tabButtons.forEach((btn) => btn.classList.remove("activated"));

        button.classList.add("activated");
    });
});
