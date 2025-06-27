# Documentación de la Carpeta `base` - Archivos CSS

Este documento explica el propósito y contenido de cada archivo CSS ubicado en la carpeta `base` de este proyecto.

---

## Índice

- [Normalize.css](#Normalizecss)
- [Fonts.css](#Fontscss)
- [Typography.css](#Typographycss)
- [Variables.css](#Variablescss)
- [Buenas prácticas y recomendaciones](#Buenas-prácticas-y-recomendaciones)
- [Contacto](#Contacto)

---

## Normalize.css

### Propósito

Este archivo se encarga de **normalizar y resetear los estilos base del navegador** para garantizar que la aplicación web tenga una apariencia consistente en diferentes navegadores y dispositivos.

### Contenido principal

- Reseteo de márgenes, paddings, bordes y fuentes en todos los elementos (`*`).
- Definición de `box-sizing: border-box` para todos los elementos.
- Ajustes específicos para mejorar la legibilidad en sistemas iOS y macOS (`-webkit-font-smoothing`, `-moz-osx-font-smoothing`).
- Normalización de etiquetas semánticas HTML5 (artículos, secciones, etc.) para asegurar que sean `display: block`.
- Reseteo de listas, tablas, citas, inputs, botones y otros elementos interactivos.
- Estilos para imágenes, vídeos y otros medios para que sean responsivos (`max-width: 100%`).
- Ajustes para inputs numéricos, campos de texto y botones para mejor UX.
- Estilos para el foco (`:focus`) con un outline visible y accesible, usando la variable CSS `--color-highlight`.

### Notas importantes

- Utiliza variables CSS para colores de fondo y texto para facilitar cambios temáticos futuros.
- Optimizado para dispositivos Apple (Safari, iOS).
- Incluye soporte para scroll suave y comportamiento de scroll específico para evitar rebotes no deseados.

---

## Fonts.css

### Propósito

Define las **fuentes tipográficas locales** utilizadas en la aplicación, asegurando que se carguen correctamente sin depender exclusivamente de fuentes externas.

### Contenido principal

- Definición con `@font-face` para las fuentes **Space Grotesk** (para títulos) y **Work Sans** (para cuerpo de texto).
- Cada fuente tiene declarados los diferentes pesos necesarios (regular, medium, bold).
- Uso de `font-display: swap` para mejorar la experiencia de carga y evitar texto invisible.
- Declaración de variables CSS para fuentes principales (`--font-heading` y `--font-body`), incluyendo una lista de fuentes fallback.

### Notas importantes

- Las rutas relativas a las fuentes (`url(...)`) deben coincidir con la estructura de carpetas del proyecto.
- El formato correcto para fuentes TrueType es `'truetype'`.
- Facilita la escalabilidad y mantenibilidad al centralizar la gestión de fuentes.

---

## Typography.css

### Propósito

Contiene los estilos tipográficos **para textos y títulos** de la aplicación, con tamaños responsivos y legibles.

### Contenido principal

- Asignación de la fuente de encabezados (`h1` a `h6`) usando la variable `--font-heading`.
- Tamaños de fuente definidos con `clamp()` para que se adapten dinámicamente según el tamaño de la pantalla.
- Propiedades de diseño tipográfico como `line-height` y `letter-spacing` para mejorar la legibilidad.
- Estilos para texto general (`body`, `p`, `a`, `li`, etc.) con fuente `--font-body` y tamaños responsivos.
- Colores de texto aplicados con variables CSS (`--color-text`).

### Notas importantes

- `clamp()` asegura que la tipografía sea fluida y responsiva sin necesidad de media queries adicionales.
- Los valores de `line-height` y `letter-spacing` están pensados para maximizar accesibilidad y confort visual.

---

## Variables.css

### Propósito

Contiene todas las **variables CSS personalizadas** utilizadas para definir colores, tipografía, bordes, sombras y otros aspectos reutilizables a lo largo del proyecto.

### Contenido principal

- Variables para la paleta de colores, tanto para texto como para fondos, con nombres claros y semánticos.
- Variables para colores y fondos específicos de etiquetas de estado (success, warning, error, info).
- Variables para bordes (`--border-color-dark`, `--border-color-light`).
- Variables para radios de borde (`--radius-sm`, `--radius-md`, `--radius-lg`).
- Variables para sombras (`--shadow-sm`, `--shadow-md`, `--shadow-lg`).
- Variables para la jerarquía visual mediante `z-index`.
- Variables para las familias tipográficas (`--font-heading`, `--font-body`).

### Notas importantes

- Todas las variables están agrupadas dentro de un solo bloque `:root` para optimizar el rendimiento.
- Facilita la modificación de la apariencia global y soporta temas futuros.
- Asegura consistencia y mantenibilidad en todo el CSS.

---

## Buenas prácticas y recomendaciones

- **Usar variables CSS** para colores, fuentes y tamaños permite una gestión sencilla y evita la duplicación de valores.
- **Separar archivos CSS** por funcionalidad (base, tipografía, variables) ayuda a la escalabilidad y legibilidad.
- **Implementar tipografía responsiva** con `clamp()` ofrece una experiencia adaptativa sin necesidad de muchas media queries.
- **Priorizar accesibilidad** con estilos para foco visibles y colores con suficiente contraste.
- **Mantener rutas relativas correctas** para archivos de fuentes e imágenes.
- **Evitar colores puros blanco y negro** y usar tonos cercanos para evitar fatiga visual.

---

## Contacto

Para dudas o sugerencias sobre esta documentación o el proyecto, contactar a:

**Carlos Chablé**  
Email: carlos.chable@icloud.com  
Tel: +52 993 104 9732  

---

*Fin de la documentación base CSS*