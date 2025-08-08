document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.getElementById("desks-record-table-body");
    const paginationContainer = document.querySelector(".pagination");
    const input = document.querySelector(".search__input");
    let currentPage = 1;
    const rowsPerPage = 20;

    // Aquí almacenaremos TODAS las filas generadas
    let allRows = [];

    const emptyRow = document.createElement("tr");
    emptyRow.classList.add("table__row", "table__row--empty");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 4;
    emptyCell.textContent = "No hubo resultados";
    emptyCell.classList.add("table__cell");
    emptyCell.style.textAlign = "center";
    emptyRow.appendChild(emptyCell);

    const statuses = [
        `<span class="status-tag tag--success">
            <i class="fa-solid fa-circle-check"></i>
            Atendido
        </span>`,
        `<span class="status-tag tag--warning">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            Pendiente
        </span>`
    ];

    function getRandomDate(start, end) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toLocaleDateString("es-MX");
    }

    function createRow() {
        const tr = document.createElement("tr");
        tr.classList.add("table__row");

        const date = getRandomDate(new Date(2023, 0, 1), new Date());
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        tr.innerHTML = `
            <td class="table__cell">${date}</td>
            <td class="table__cell">
                <a href="#" class="table__link button">
                    <i class="fa-solid fa-eye"></i> Ver
                </a>
            </td>
            <td class="table__cell">
                <a href="#" class="table__link button">
                    <i class="fa-solid fa-eye"></i> Ver
                </a>
            </td>
            <td class="table__cell">${status}</td>
        `;
        return tr;
    }

    function getFilteredRows() {
        const searchTerm = input?.value.trim().toLowerCase() || "";
        return allRows.filter((row) => row.textContent.toLowerCase().includes(searchTerm));
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
            btn.addEventListener("click", () => goToPage(page));
            fragment.appendChild(btn);
        };

        if (totalPages <= 1) return;

        createButton("1", 1, currentPage === 1);

        if (totalPages <= 7) {
            for (let i = 2; i <= totalPages - 1; i++) {
                createButton(i.toString(), i, currentPage === i);
            }
        } else {
            if (currentPage <= 4) {
                for (let i = 2; i <= 5; i++) {
                    createButton(i.toString(), i, currentPage === i);
                }
                const dots = document.createElement("span");
                dots.textContent = "...";
                fragment.appendChild(dots);
            } else if (currentPage >= totalPages - 3) {
                const dots = document.createElement("span");
                dots.textContent = "...";
                fragment.appendChild(dots);
                for (let i = totalPages - 4; i <= totalPages - 1; i++) {
                    createButton(i.toString(), i, currentPage === i);
                }
            } else {
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

        createButton(totalPages.toString(), totalPages, currentPage === totalPages);
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

    // Simulación de datos (agrega aquí la cantidad que quieras)
    function generateFakeData(count = 100) {
        allRows = []; // limpiar antes de generar
        for (let i = 0; i < count; i++) {
            const row = createRow();
            allRows.push(row);
        }
    }

    if (input) {
        input.addEventListener("input", () => {
            currentPage = 1;
            renderTable();
        });
    }

    generateFakeData(30); // Puedes cambiar la cantidad aquí
    renderTable();
});