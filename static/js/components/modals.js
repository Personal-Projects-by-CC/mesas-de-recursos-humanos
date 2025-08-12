document.querySelectorAll(".show-modal").forEach((button) => {
    button.addEventListener("click", () => {
        const target = button.dataset.modal;
        const modal = document.querySelector(`.modal[data-modal="${target}"]`);

        if (modal) {
            modal.showModal();
            document.body.classList.add("modal-open");

            modal.addEventListener("close", () => {
                document.body.classList.remove("modal-open");
            });

            modal.addEventListener("cancel", () => {
                document.body.classList.remove("modal-open");
            });
        }
    });
});