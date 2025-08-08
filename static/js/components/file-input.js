document.addEventListener("DOMContentLoaded", () => {
    // Maneja click en botones para abrir el input file oculto
    document.addEventListener("click", (event) => {
        const button = event.target.closest(".file-input__button");
        if (button) {
            const container = button.closest(".file-input");
            const input = container.querySelector(".file-input__input");
            if (input) input.click();
        }
    });

    document.addEventListener("change", (event) => {
        const input = event.target;
        if (!input.matches(".file-input__input")) return;

        const container = input.closest(".file-input");
        const modal = input.closest(".modal");
        const filenameLink = container.querySelector(".file-input__filename");

        if (filenameLink) {
            if (input.files.length > 0) {
                const file = input.files[0];
                const fileURL = URL.createObjectURL(file);
                const extension = file.name.split(".").pop().toLowerCase();

                const icon = document.createElement("i");
                icon.style.marginRight = "0.5rem";

                switch (extension) {
                    case "pdf":
                        icon.className = "fa-solid fa-file-pdf";
                        icon.style.color = "#D32F2F";
                        break;
                    case "doc":
                    case "docx":
                        icon.className = "fa-solid fa-file-word";
                        icon.style.color = "#1E88E5";
                        break;
                    case "xls":
                    case "xlsx":
                    case "csv":
                        icon.className = "fa-solid fa-file-excel";
                        icon.style.color = "#43A047";
                        break;
                    case "jpg":
                    case "jpeg":
                    case "png":
                    case "gif":
                        icon.className = "fa-solid fa-file-image";
                        icon.style.color = "#F39C12";
                        break;
                    case "mp4":
                    case "mov":
                    case "avi":
                    case "mkv":
                    case "webm":
                        icon.className = "fa-solid fa-file-video";
                        icon.style.color = "#8E24AA";
                        break;
                    default:
                        icon.className = "fa-solid fa-file";
                        icon.style.color = "#757575";
                }

                filenameLink.innerHTML = "";
                filenameLink.appendChild(icon);
                filenameLink.appendChild(document.createTextNode(file.name));
                filenameLink.href = fileURL;
                filenameLink.classList.add("file-input__filename--active");
                filenameLink.style.pointerEvents = "auto";

                container.classList.add("file-input--uploaded");
                const uploadButton = container.querySelector(".file-input__button");
                if (uploadButton) {
                    uploadButton.style.borderColor = "var(--color-green-border)";
                }
            } else {
                filenameLink.textContent = "Ningún archivo seleccionado";
                filenameLink.removeAttribute("href");
                filenameLink.classList.remove("file-input__filename--active");
                filenameLink.style.pointerEvents = "none";

                const uploadButton = container.querySelector(".file-input__button");
                if (uploadButton) {
                    uploadButton.style.borderColor = "";
                }
                container.classList.remove("file-input--uploaded");
            }

            // ✅ Revisa solo los inputs dentro del modal actual
            const modalInputs = modal.querySelectorAll(".file-input__input");
            const allFilled = Array.from(modalInputs).every(
                (input) => input.files.length > 0
            );

            const saveButton = modal.querySelector(".button--green");
            if (saveButton) {
                saveButton.disabled = !allFilled;
            }
        }
    });
});
