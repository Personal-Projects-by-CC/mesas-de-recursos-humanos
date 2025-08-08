# Documentación de Componentes Reutilizables - HTML, CSS y JS

Este documento recopila la descripción funcional, técnica y visual de los **componentes reutilizables** del proyecto. Cada componente está compuesto por su estructura HTML, sus estilos en CSS/SASS y su comportamiento en JavaScript.

---

## 📑 Índice de Componentes

- [TabSwitcher - Selector de Pestañas](#tabswitcher---selector-de-pestañas)
- [WorkerCard - Tarjeta de Trabajador](#workercard---tarjeta-de-trabajador)
- [Contacto](#Contacto)

---

## TabSwitcher - Selector de Pestañas

### Estructura HTML
```html
    <nav class="tab-switcher" role="tablist">
        <button class="tabs__button activated" role="tab" aria-selected="true" aria-controls="panel-pending">
            Pendientes
        </button>
        <button class="tabs__button" role="tab" aria-selected="false" aria-controls="panel-attended">
            Atendidas
        </button>
    </nav>
```

#### Detalles
- Se usa `role="tablist"` y `role="tab"` para accesibilidad.
- `aria-selected` indica la pestaña activa.
- `aria-controls` conecta el botón con su panel (no incluido aquí).

### Estilos CSS
```css
    .tab-switcher {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        width: fit-content;
        height: 5.6rem;

        border-radius: var(--radius-lg);
        background-color: var(--color-bg-main, #f7f7f7);
        transition: box-shadow 0.4s ease;

        @media (width >= 768px) {
            &:hover {
                box-shadow: var(--shadow-lg);
            }
        }
    }

    .tabs__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16rem;
        height: 3.2rem;

        border-radius: var(--radius-sm);
        outline: 0.8rem solid var(--color-bg-main, #f7f7f7);
        transition: background-color 0.4s ease, color 0.8s ease, outline 0.4s ease;

        @media (width >= 768px) {
            height: 4rem;
        }
    }

    .tabs__button.activated {
        outline: 0.8rem solid var(--color-bg-main, #f7f7f7);
        background-color: var(--color-bg-accent, #9f2241);
        color: var(--color-white, #fefefe);
        font-weight: 500;
    }
```

#### Detalles importantes
- `.tabs__button` tiene una altura base de `3.2rem`, que se incrementa a `4rem` en pantallas de `768px` o más.
- `.tab-switcher` ahora aplica `box-shadow` en `hover` únicamente cuando el ancho de pantalla es igual o mayor a `768px`. Esto mejora la experiencia táctil en móviles (sin efectos innecesarios).
- El uso de media queries modernas con la sintaxis `@media (width >= 768px)` mejora la claridad del código y alinea con buenas prácticas de diseño mobile-first..
- Se asegura que la interfaz sea más accesible y limpia en dispositivos móviles, mientras que en pantallas grandes se ofrece una experiencia más rica visualmente.
- La interacción visual `(hover)` se limita inteligentemente al entorno desktop para evitar efectos no deseados en pantallas táctiles.

### Funcionalidad en JavaScript
```js
    const tabButtons = document.querySelectorAll(".tabs__button");

    tabButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            tabButtons.forEach((btn) => btn.classList.remove("activated"));

            button.classList.add("activated");
        });
    });
```

#### Comportamiento
- Al hacer clic en un botón, se desactiva cualquier otro.
- Se aplica la clase `activated` solo al seleccionado.

---

## WorkerCard - Tarjeta de Trabajador

### Estructura HTML
```html
    <article class="worker-card">
        <header class="worker-card__header">
            <figure class="worker-card__avatar">
                <img src="" alt="">
            </figure>

            <div class="worker-card__info">
                <h3 class="worker-card__name">Bernabé González Samudio</h3>
                <p class="worker-card__curp">
                    <i class="fa-solid fa-id-card"></i>
                    MUDD691107HTCPHX10
                </p>
                <p class="worker-card__email">
                    <i class="fa-solid fa-envelope"></i>
                    bernabeglz1917@gmail.com    
                </p>
            </div>
        </header>

        <section class="worker-card__body">
            <h4 class="worker-card__subject-title">Asunto</h4>
            <p class="worker-card__subject-text">
                Solicitud de actualización de correo electrónico para la plataforma Declar@Tabasco
            </p>
        </section>

        <footer class="worker-card__footer">
            <button class="worker-card__action">
                <i class="fa-solid fa-eye"></i>
                Ver respuesta
            </button>

            <button class="worker-card__action">
                <i class="fa-solid fa-file-lines"></i>
                Ver documento
            </button>

            <button class="worker-card__action">
                <i class="fa-solid fa-reply"></i>
                Responder
            </button>
        </footer>
    </article>
```

#### Detalles
- Secciones claramente divididas: encabezado, cuerpo y pie.
- Íconos mediante Font Awesome para reforzar el contenido visual.
- Estructura flexible y reutilizable para diferentes trabajadores o solicitudes.

### Estilos CSS
```css
    .worker-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1.6rem;

        border: 2px solid var(--border-color-light, #e7e1e1);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        transition: box-shadow 0.4s ease;

        &:hover {
            box-shadow: var(--shadow-lg);
        }

        @media (width >= 768px) {
            padding: 2.8rem;
        }
    }

    .worker-card__header {
        padding-bottom: 1.2rem;
        border-bottom: 2px solid var(--border-color-light, #e7e1e1);
    }

    .worker-card__info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto;
        gap: 0.8rem;
    }

    .worker-card__name {
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .worker-card__curp {
        grid-column: 1;
        grid-row: 2;
    }

    .worker-card__email {
        grid-column: 2;
        grid-row: 2;
    }

    .worker-card__name,
    .worker-card__curp,
    .worker-card__email {
        display: inline-block;
        gap: 0.4rem;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .worker-card__curp,
    .worker-card__email {
        font-size: clamp(1rem, 2vh, 1.6rem);
    }

    .worker-card__body {
        padding: 1.2rem 0;

        @media (width >= 768px) {
            padding: 2rem 0;
        }
    }

    .worker-card__subject-title {
        margin-bottom: 0.4rem;
        font-weight: bold;
    }

    .worker-card__footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.4rem;

        @media (width >= 768px) {
            gap: 1.2rem;
        }
    }

    .worker-card__action {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        width: 100%;
        height: 3.2rem;
        border: 2px solid var(--border-color-light, #E7E1E1);
        border-radius: var(--radius-md);

        box-shadow: var(--shadow-sm);
        cursor: pointer;
        font-size: clamp(1rem, 2vh, 1.4rem);
        transition: border 0.4s ease, color 0.4s ease;

        &:hover {
            color: var(--color-highlight, #9f2241);
            border: 2px solid var(--color-highlight, #9f2241);
        }

        @media (width >= 768px) {
            gap: 0.8rem;
            height: 4rem;
        }
    }
```

#### Detalles importantes
- Diseño responsivo:
    * Padding y tamaño de botones ajustado según el ancho de la pantalla.
    * Tipografía fluida con clamp() para adaptabilidad sin media queries adicionales.
- Overflow controlado en nombre, CURP y correo con text-overflow: ellipsis para evitar desbordamiento de texto.
- Acciones destacadas: botones con íconos e interacción visual al pasar el cursor.

## Contacto

Para dudas o sugerencias sobre esta documentación o el proyecto, contactar a:

**Carlos Chablé**  
Email: carlos.chable@icloud.com  
Tel: +52 993 104 9732  

---

*Fin de la documentación layout CSS*