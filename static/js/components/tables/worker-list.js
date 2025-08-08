document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".search__input");
    const tabs = document.querySelectorAll(".tabs__button");
    const tbody = document.querySelector(".table__tbody");
    const paginationContainer = document.querySelector(".pagination");
    const allRows = Array.from(tbody.querySelectorAll(".table__row"));
    let currentTab = "todos";
    let currentPage = 1;
    const rowsPerPage = 20;

    const emptyRow = document.createElement("tr");
    emptyRow.classList.add("table__row", "table__row--empty");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 6;
    emptyCell.textContent = "No hubo resultados";
    emptyCell.classList.add("table__cell");
    emptyCell.style.textAlign = "center";
    emptyRow.appendChild(emptyCell);

    function getFilteredRows() {
        const searchTerm = input.value.trim().toLowerCase();

        return allRows.filter((row) => {
            const cells = row.querySelectorAll(".table__cell");
            const rowText = row.textContent.toLowerCase();
            const contractType = cells[1]?.textContent.trim().toLowerCase();

            const matchesSearch = rowText.includes(searchTerm);
            const matchesTab =
                currentTab === "todos" ||
                (currentTab === "federal" && contractType === "federal") ||
                (currentTab === "estatal" && contractType === "estatal");

            return matchesSearch && matchesTab;
        });
    }

    function renderPagination(currentPage, totalPages) {
        paginationContainer.innerHTML = "";
        const fragment = document.createDocumentFragment();

        const createButton = (text, page, isActive = false) => {
            const btn = document.createElement("button");
            btn.textContent = text;
            btn.className = "pagination__button";
            if (isActive) btn.classList.add("active");
            btn.disabled = isActive;
            btn.addEventListener("click", () => {
                goToPage(page);
            });
            fragment.appendChild(btn);
        };

        if (totalPages <= 1) return;

        createButton("1", 1, currentPage === 1);

        if (totalPages <= 7) {
            // Si hay 7 o menos páginas, mostrar todas
            for (let i = 2; i <= totalPages - 1; i++) {
                createButton(i.toString(), i, currentPage === i);
            }
        } else {
            // Más de 7 páginas, mostrar botones con lógica de puntos suspensivos
            if (currentPage <= 4) {
                // Principales páginas al inicio
                for (let i = 2; i <= 5; i++) {
                    createButton(i.toString(), i, currentPage === i);
                }
                const dots = document.createElement("span");
                dots.textContent = "...";
                fragment.appendChild(dots);
            } else if (currentPage >= totalPages - 3) {
                // Páginas al final
                const dots = document.createElement("span");
                dots.textContent = "...";
                fragment.appendChild(dots);

                for (let i = totalPages - 4; i <= totalPages - 1; i++) {
                    createButton(i.toString(), i, currentPage === i);
                }
            } else {
                // Páginas intermedias con puntos a ambos lados
                const dotsLeft = document.createElement("span");
                dotsLeft.textContent = "...";
                fragment.appendChild(dotsLeft);

                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    createButton(i.toString(), i, currentPage === i);
                }

                const dotsRight = document.createElement("span");
                dotsRight.textContent = "...";
                fragment.appendChild(dotsRight);
            }
        }

        createButton(
            totalPages.toString(),
            totalPages,
            currentPage === totalPages
        );

        paginationContainer.appendChild(fragment);
    }

    function goToPage(page) {
        currentPage = page;
        renderTable();
    }

    function renderTable() {
        const filteredRows = getFilteredRows();
        tbody.innerHTML = "";

        const totalRows = filteredRows.length;
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        if (totalRows === 0) {
            tbody.appendChild(emptyRow);
            paginationContainer.innerHTML = "";
            return;
        }

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const rowsToShow = filteredRows.slice(start, end);

        rowsToShow.forEach((row) => {
            tbody.appendChild(row);
        });

        renderPagination(currentPage, totalPages);
    }

    input.addEventListener("input", () => {
        currentPage = 1;
        renderTable();
    });

    tabs.forEach((tab) => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            tabs.forEach((t) => t.classList.remove("activated"));
            this.classList.add("activated");

            const text = this.textContent.trim().toLowerCase();
            if (text === "federales") currentTab = "federal";
            else if (text === "estatales") currentTab = "estatal";
            else currentTab = "todos";

            currentPage = 1;
            renderTable();
        });
    });

    renderTable();
});