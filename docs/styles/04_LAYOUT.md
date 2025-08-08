# Documentación de la Carpeta `layout` - Archivos CSS

Este documento explica el propósito y contenido de cada archivo CSS ubicado en la carpeta `layout` de este proyecto.  

---

## Índice

- [Header.css](#Headercss)
- [Sidebar.css](#Sidebarcss)
- [Contacto](#Contacto)

---

## Header.css

### .header
- Posición fija en la parte superior (`top: 0`) con ancho completo (`width: 100%`).
- Altura fija: 6rem en móviles, cambia a 10rem en pantallas mayores a 768px.
- Fondo con efecto vidrio (blur) usando `backdrop-filter` y semitransparente.
- Índice z para mantenerlo sobre otros elementos.

### .header__container
- Contenedor flexible (flexbox) que centra vertical y horizontalmente sus elementos.
- Relleno horizontal de 2rem para separación.
- En pantallas mayores a 768px, alinea el contenido al inicio (izquierda).

### .header__logo
- Contenedor flex para centrar el logo.
- Altura fija: 4rem en móvil, 6rem en desktop.
- Ancho automático para ajustar proporción.

### .header__logo img
- Imagen que ocupa toda la altura del contenedor.
- Mantiene la proporción con `object-fit: contain`.

### .header__title
- Oculto en móvil (`display: none`).
- Visible en pantallas mayores a 768px con margen izquierdo para separación.

---

## Sidebar.css

### .sidebar
- Barra de navegación fija en la parte inferior para móviles.
- Ancho completo (`width: 100%`) y altura fija (`height: 6rem`).
- Fondo translúcido estilo vidrio (liquid glass) usando `backdrop-filter`.
- En pantallas >= 768px (modo tablet/desktop):
  - Se convierte en sidebar vertical fijo en la izquierda.
  - Comienza debajo del header (`top: 10rem`).
  - Altura: `calc(100vh - 10rem)`.
  - Dirección de los elementos cambia a columna.

### .sidebar__nav
- Contenedor del listado de navegación.
- En desktop:
  - Ocupa toda la altura y se comporta como contenedor `flex` vertical (`flex-direction: column`).
  - Scroll vertical habilitado con estilos personalizados.
    - `scrollbar-width: thin` en Firefox.
    - `::-webkit-scrollbar` personalizado:
        - Barra delgada de 0.6rem.
        - Pulgar con color principal semitransparente y transición en hover.
        - Botones de flechas del scroll ocultos (`display: none`) en todos los navegadores.

### .sidebar__list
- Lista que contiene todos los ítems del sidebar.
- En móvil:
  - Distribución horizontal (`flex-direction: row`) con `justify-content: space-around`.
- En desktop:
  - Columna vertical con `gap: 2rem` entre ítems.
  - Espacio vertical interno (`padding-block: 2rem`).
  - Scroll interno habilitado si el contenido excede el espacio visible.
  - Comportamiento de scroll controlado para una experiencia fluida.

### .sidebar__item
- Cada ítem tiene tamaño fijo (4rem móvil, 6rem desktop).
- No se reduce su tamaño al reducir la ventana (`flex-shrink: 0`).
- El último ítem (`:last-child`):
  - Tiene `margin-top: auto` para ubicarse al final del sidebar en desktop.
  - Además, se aplica estilo especial para destacar su icono:
    - El icono (`.sidebar__icon`) cambia a color destacado (`--color-highlight`).

### .sidebar__link
- Cada ítem es un enlace centrado con grid.
- Bordes redondeados y sombra para resaltar visualmente.
- Transición suave de color en hover y focus.
- En desktop:
  - Bordes más redondeados (`--radius-lg`).
- Versión activa:
  - `.sidebar__link.activated` representa el ítem actualmente activo o seleccionado.
    - Tiene borde de 0.2rem de color oscuro (`--border-color-dark`).
    - Fondo claro (`--color-bg-main`).
    - Sombra más intensa (`--shadow-lg`).

### .sidebar__icon
- Icono centrado dentro del enlace.
- Tamaño 1.6rem móvil, 2.4rem desktop.

---

## Notas generales
- Mobile-first: todos los estilos se definen primero para móviles y luego se ajustan con media queries a partir de 768px.
- Se utiliza flexbox para organización adaptable y eficiente.
- Los estilos de scroll están optimizados para funcionar en la mayoría de navegadores modernos.
- Variables CSS permiten modificar fácilmente colores, sombras y radios en todo el proyecto.
- La clase `.activated` es útil para indicar visualmente qué opción del menú está actualmente seleccionada.

---

## Contacto

Para dudas o sugerencias sobre esta documentación o el proyecto, contactar a:

**Carlos Chablé**  
Email: carlos.chable@icloud.com  
Tel: +52 993 104 9732  

---

*Fin de la documentación layout CSS*