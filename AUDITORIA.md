# Auditoria del sitio web

## Proyecto

**Repositorio:** [Cielo201356/Semana_1](https://github.com/Cielo201356/Semana_1)

**Fecha:** 17 de septiembre de 2026

## Hallazgos y correcciones

- Se corrigio la codificacion `UFT-8` por `UTF-8`.
- Se elimino el cierre incorrecto de `head` dentro del documento.
- Se corrigio el atributo `id` del pie de pagina para que los enlaces de Contacto funcionen.
- Se elimino la referencia a `foto.jpg`, porque el archivo no existia en el repositorio.
- Se reemplazo la imagen faltante por un avatar accesible con las iniciales `CV`.
- Se corrigio el ID del boton de habilidades en JavaScript.
- Se corrigio `addEventListerner` por `addEventListener`.
- Se corrigio `front-family` por `font-family`.
- Se corrigio `disaplay` por `display`.
- Se agregaron `aria-controls` y `aria-expanded` al control de habilidades.
- Se agrego el espacio faltante en el texto del copyright.

## Validacion

- La pagina carga correctamente en el navegador.
- El boton de habilidades oculta y muestra la lista correctamente.
- El atributo `aria-expanded` cambia entre `true` y `false`.
- El pie de pagina muestra el ano actual y los datos de contacto.
- `git diff --check` no reporta errores de espacios.

## Publicacion

Los cambios fueron publicados en la rama `main` del repositorio de GitHub.

**Ultimo commit:** `329a548` - `Corregir sitio para GitHub Pages`
