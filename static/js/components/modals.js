document.querySelectorAll(".show-modal").forEach((button, index) => {
    const modals = document.querySelectorAll(".modal");
    const modal = modals[index];

    if (modal) {
        button.addEventListener("click", () => {
            modal.showModal();
            document.body.classList.add("modal-open");
        });

        modal.addEventListener("close", () => {
            document.body.classList.remove("modal-open");
        });

        modal.addEventListener("cancel", () => {
            document.body.classList.remove("modal-open");
        });
    }
});