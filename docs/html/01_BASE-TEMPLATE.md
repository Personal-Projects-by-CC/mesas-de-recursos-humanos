# Documentation of HTML Structure: Header & Sidebar

Este documento describe el propósito, la estructura y el rol de los componentes principales del layout en esta plantilla base.

---

## Índice

- [Header](#Header)
- [Sidebar](#Sidebar)
- [Notas sobre Visibilidad basada en Roles](#Notas-sobre-Visibilidad-basada-en-Roles)
- [Consideraciones de Accesibilidad](#Consideraciones-de-Accesibilidad)
- [Por hacer](#Por-hacer)
- [Contacto](#Contacto)

---

## Header

### `<header class="header">`

- Elemento semántico de encabezado para la aplicación.
- Contiene el logo de la app y el título de la página.
- Diseño mobile-first: solo se muestra el logo en pantallas pequeñas.
- El título (`h1`) se revela en pantallas grandes mediante media queries.

### `<div class="header__container">`
- Contenedor flex para alineación y espaciado.
- Centra el contenido en móviles, alinea a la izquierda en tablets y superiores.

### `<a class="header__logo">`
- Elemento anchor que envuelve el logo de la app para navegar a la página principal.
- Incluye `aria-label` para accesibilidad.

### `<img class="header__logo-image">`
- La imagen real del logo.
- Usa texto `alt` para lectores de pantalla.

### `<h1 class="header__title">`
- Muestra el nombre de la aplicación: “Mesas de Recursos Humanos”.
- Oculto en móviles, visible en dispositivos más grandes mediante CSS.

---

## Sidebar

### `<aside class="sidebar">`

- Elemento semántico <aside> que contiene la navegación principal.
- Posicionado fijo **en la parte inferior en móviles** y **a la izquierda en tablets/escritorio**.
- El comportamiento responsivo se controla con media queries en CSS.

### `<nav class="sidebar__nav">`
- Bloque principal de navegación.
- Usa `aria-label="Main navigation"` para accesibilidad.

### `<ul class="sidebar__list">`
- Lista desordenada que contiene todos los ítems de navegación del sidebar.
- Se muestra en fila en móviles y en columna en escritorio.

### `<li class="sidebar__item">`
- Cada ítem de la lista corresponde a una opción de navegación.
- Algunos ítems tienen visibilidad basada en roles de usuario (ej. admin vs trabajador).
- La clase `d-none` se usa para ocultar elementos como el botón "Home" para trabajadores.

### `<a class="sidebar__link activated">`
- AElemento anchor que representa la acción de navegación.
- El modificador `.activated` indica la página activa actual.

### `<i class="sidebar__icon">`
- Ícono de Font Awesome usado como indicador visual de la acción.
- Ejemplos:
  - `fa-bell`: Notificaciones
  - `fa-user-tie`: Lista de trabajadores
  - `fa-house`: Inicio (para trabajadores)
  - `fa-book`: Manual
  - `fa-arrow-right-to-bracket`: Cerrar sesión

---

## Notas sobre Visibilidad basada en Roles

| Item                  | Visible para | Indicación en CSS    |
|-----------------------|--------------|----------------------|
| Notificaciones        | Admin        | Siempre visible      |
| Lista de trabajadores | Admin        | Siempre visible      |
| Inicio                | Trabajadores | Toggle con `.d-none` |
| Manual                | Todos        | Siempre visible      |
| Cerrar sesión         | Todos        | Siempre visible      |

---

## Consideraciones de Accesibilidad

- Todos los elementos anchor usan íconos descriptivos y etiquetas cuando aplican.
- La navegación está envuelta en `<nav>` con `aria-label`.
- La imagen del logo usa texto `alt` y está envuelta en un anchor con `aria-label`.

---

## Por hacer

- Agregar contenedor `<main class="main-content">` para inyección dinámica de contenido.
- Usar plantillas o JS para gestionar visibilidad según roles.
- Documentar vistas y componentes adicionales conforme evolucione el proyecto.

---

## Contacto

Para dudas o sugerencias sobre esta documentación o el proyecto, contactar a:

**Carlos Chablé**  
Email: carlos.chable@icloud.com  
Tel: +52 993 104 9732  

---

*Fin de la documentación base HTML*