const container = document.getElementById("worker-cards-container");
const searchInput = document.getElementById("search-workers");

const workers = [
    {
        name: "Juanita de Dios Alejo",
        curp: "MUDD691107HTCPHX10",
        email: "juanita.alejo@gmail.com",
        subject: "Actualización de correo electrónico Declar@Tabasco",
    },
    {
        name: "Carlos Méndez Ruiz",
        curp: "MERU800215HDFLRS03",
        email: "cmendezruiz@gmail.com",
        subject: "Problema para acceder al sistema de control de asistencia",
    },
    {
        name: "Laura Patricia Salas",
        curp: "SALA750421MTLXXX02",
        email: "laurap.salas@outlook.com",
        subject: "Cambio de CURP registrado en la plataforma de salud",
    },
    {
        name: "Luis Fernando Reyes",
        curp: "RELU830618HTSXRL01",
        email: "luisfernando.reyes@salud.gob.mx",
        subject: "Actualización de contrato en sistema de recursos humanos",
    },
    {
        name: "Martha Alicia Contreras",
        curp: "COMA840920MTLXXX05",
        email: "martha.contreras@hotmail.com",
        subject: "Error en la visualización del archivo de nómina",
    },
    {
        name: "José Luis García",
        curp: "GACL720203HCSXXX04",
        email: "jlgarcia1972@gmail.com",
        subject: "Corrección de datos personales en el expediente digital",
    },
    {
        name: "Alejandra Ruiz Torres",
        curp: "RUTA900730MTSZRL06",
        email: "ale.ruiz.t@gmail.com",
        subject: "Solicitud para activar cuenta institucional de correo",
    },
    {
        name: "Fernando Javier Núñez",
        curp: "NUFE870310HDFNNR09",
        email: "fj.nunez@correo.com",
        subject: "Imposibilidad para descargar documento de contrato",
    },
    {
        name: "Carla Sofía Muñoz",
        curp: "MUCA950802MTSXXX03",
        email: "carla.munoz@live.com",
        subject: "Reporte de duplicado en plataforma de trabajadores",
    },
    {
        name: "Bruno Sánchez López",
        curp: "SALB780922HCSBRN07",
        email: "bruno.sanchez@dominio.com",
        subject: "Asunto relacionado con la carga de documentación adicional",
    },
    {
        name: "Diana Paola Jiménez",
        curp: "JIDP850615MTSDNL08",
        email: "dianajimenez85@yahoo.com",
        subject: "Solicitud de cambio de área asignada",
    },
    {
        name: "Rodrigo Herrera Gil",
        curp: "HERG810204HCSXXX01",
        email: "rodrigo.herrera@saludtabasco.gob.mx",
        subject: "Problemas técnicos con la firma electrónica",
    },
    {
        name: "Valeria Torres Cano",
        curp: "TOVA920519MDFCRL10",
        email: "valeria.tc@hotmail.com",
        subject: "Asistencia para cargar constancia médica",
    },
    {
        name: "Javier Alonso Pérez",
        curp: "PEJA750309HDFXXX02",
        email: "j.alonso.perez@gmail.com",
        subject: "Solicitud de revisión de expediente incompleto",
    },
    {
        name: "Daniela Campos Rivera",
        curp: "CADA930827MCSXXX08",
        email: "daniela.campos@gmail.com",
        subject: "Ayuda para modificar datos de contacto",
    },
    {
        name: "Oscar Iván Robles",
        curp: "ROIO900616HTSXVN12",
        email: "oscar.robles@trabajo.gob.mx",
        subject: "Problema con folio de contrato",
    },
    {
        name: "Karla Janeth Morales",
        curp: "MOKJ890412MTSSRR15",
        email: "karla.morales89@outlook.com",
        subject: "Consulta sobre estatus de trámite pendiente",
    },
    {
        name: "Andrés Felipe Castillo",
        curp: "CAAF940102HCSFNN03",
        email: "andres.castillo@gmail.com",
        subject: "Inconveniente con visibilidad de documentos",
    },
    {
        name: "Rebeca Sánchez Díaz",
        curp: "SADR880809MDFXXX06",
        email: "rebeca.sanchez.d@gmail.com",
        subject: "Fallo al enviar solicitud de revisión",
    },
    {
        name: "Mario Alberto Villalobos",
        curp: "VIMA790718HCSXXX05",
        email: "mario.villalobos@correo.mx",
        subject: "Problema con la actualización de domicilio fiscal",
    },
];

function renderWorkerCards(workersList) {
    container.innerHTML = "";
    workersList.forEach((worker) => {
        const article = document.createElement("article");
        article.className = "card worker-card";

        article.innerHTML = `
            <header class="worker-card__header">
                <figure class="worker-card__avatar">
                    <img src="" alt="">
                </figure>
                <div class="worker-card__info">
                    <h3 class="worker-card__name">${worker.name}</h3>
                    <p class="worker-card__curp">
                        <i class="fa-solid fa-id-card"></i>
                        ${worker.curp}
                    </p>
                    <p class="worker-card__email">
                        <i class="fa-solid fa-envelope"></i>
                        ${worker.email}
                    </p>
                </div>
            </header>
            <section class="worker-card__body">
                <h4 class="worker-card__subject-title">Asunto</h4>
                <p class="worker-card__subject-text">
                    ${worker.subject}
                </p>
            </section>
            <footer class="worker-card__footer">
                <button class="button">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                    Ver solicitud
                </button>
                <button class="button">
                    <i class="fa-solid fa-eye"></i>
                    Ver mi respuesta
                </button>
            </footer>
        `;

        container.appendChild(article);
    });
}

const emptyMessage = document.createElement("p");
emptyMessage.classList.add("no-results");
emptyMessage.textContent = "No se encontraron resultados";

searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const cards = container.querySelectorAll(".worker-card");

    let hasMatch = false;

    cards.forEach((card) => {
        const name = card.querySelector(".worker-card__name")?.textContent.toLowerCase() || "";
        const subject = card.querySelector(".worker-card__subject-text")?.textContent.toLowerCase() || "";

        const match = name.includes(searchTerm) || subject.includes(searchTerm);
        card.style.display = match ? "" : "none";

        if (match) hasMatch = true;
    });

    // Eliminar mensaje anterior si existe
    const existingMsg = container.querySelector(".no-results");
    if (existingMsg) existingMsg.remove();

    // Mostrar mensaje si no hay coincidencias
    if (!hasMatch) {
        container.appendChild(emptyMessage);
    }
});

renderWorkerCards(workers);
