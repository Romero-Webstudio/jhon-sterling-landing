# Proceso de construcción de una página web con Claude Code (CLI)

**Origen de este documento:** extraído del proyecto real "Olimpo Alfa" (tienda Shopify, https://olimpo-alfa.myshopify.com), construida con Claude Code (CLI) más una IA de acompañamiento (Claude en Cowork) como capa de revisión. Este documento resume el proceso completo — qué funcionó, qué no, y las reglas de trabajo que valen la pena repetir — para servir de contexto a un nuevo proyecto: una landing page / marca personal para un entrenador de fitness, con otras herramientas (no Shopify).

---

## 1. Resumen del proyecto original

Se construyó una tienda de e-commerce (dropshipping) completa: tema visual personalizado (identidad negro/dorado, "deportivo pero elegante"), 9 secciones de home, header, botón flotante de WhatsApp, animaciones CSS, configuración de envíos a 4 países, 2 pasarelas de pago, 6 políticas legales, auditoría de calidad (accesibilidad, rendimiento, consistencia de marca) y lanzamiento público. Todo el código se construyó con **Claude Code** operado directamente por el usuario (no por el asistente de Cowork), mientras que Claude en Cowork actuó como capa de revisión: explicaba cada prompt/diff antes de aprobarlo, detectaba errores, y resolvía dudas de configuración fuera del código (Shopify Admin, pasarelas de pago, etc.).

## 2. Roles del proceso (modelo de trabajo que funcionó)

- **Usuario:** ejecuta todos los comandos de Claude Code en su propia terminal, aprueba o rechaza cada cambio propuesto.
- **Claude Code (CLI):** escribe y edita el código real (Liquid, CSS, JS, JSON), ejecuta comandos de shell, corre el servidor de desarrollo.
- **Claude en Cowork — rol de copiloto:** no ejecuta Claude Code directamente, nunca reemplaza al usuario en el manejo de la herramienta. Actúa como copiloto: revisa cada diff antes de que el usuario lo apruebe, explica qué hace cada cambio y por qué, traduce mensajes/errores de la terminal a lenguaje simple, detecta errores/riesgos antes de que se apliquen, y resuelve dudas externas al código (configuración de plataforma, pasarelas de pago, políticas). El usuario mantiene siempre el control: es quien decide y ejecuta, el copiloto asesora y valida.

**Por qué funcionó:** separar "quien escribe código" (Claude Code) de "quien revisa antes de aprobar" (el copiloto) redujo errores — varios bugs se atraparon antes de aplicarse (ver sección 4). Para el proyecto nuevo, vale la pena pedirle al agente que asuma este mismo rol de copiloto explícitamente desde el inicio.

## 3. Herramientas y stack utilizado

- **Claude Code (CLI)** — agente de código, ejecutado en terminal local (PowerShell/Windows en este caso).
- **Shopify CLI** (`shopify theme dev`, `shopify theme pull`, `shopify theme push`, `shopify theme check`, `shopify theme list`) — para desarrollo local con vista previa en vivo y despliegue.
- **Shopify Dev MCP** (`@shopify/dev-mcp`) — conectado a Claude Code vía `claude mcp add` para darle contexto específico de la plataforma.
- Lenguajes/formatos del proyecto: **Liquid** (plantillas), **JSON** (schemas de secciones y configuración), **CSS puro** (sin frameworks, animaciones nativas con `animation-timeline: view()`), **JavaScript** (mínimo, solo utilidades del tema).
- **Chrome (extensión conectada a Claude)** — usada por el asistente de Cowork para verificar visualmente el sitio en vivo y leer la consola del navegador de forma directa, sin depender de que el usuario copiara/pegara capturas.

## 4. Qué funcionó bien (buenas prácticas a repetir)

1. **Revisar cada diff antes de aprobar, nunca aprobar en bloque.** Se atraparon errores reales antes de que llegaran a producción (un typo de sintaxis, una suposición no verificada sobre un ícono existente, un cambio de escala accidental).
2. **Pedirle a Claude Code que verifique contra el código/HTML real en vez de asumir.** El bug más importante del proyecto (animaciones CSS que no se aplicaban) se resolvió cuando Claude Code inspeccionó el HTML renderizado real en vez de confiar en los nombres de sección del código fuente — descubrió que la plataforma añade un prefijo interno a los IDs que no aparece en ningún archivo fuente.
3. **Regla fija de sincronización antes de editar archivos compartidos.** Cuando el usuario subía imágenes manualmente desde el editor visual, y Claude Code luego editaba el mismo archivo de configuración sin haber sincronizado primero, esos cambios manuales se perdían. La solución fue una regla explícita: sincronizar (`pull`) los archivos relevantes antes de cualquier edición que los toque.
4. **Pedir una auditoría de calidad completa antes de lanzar, con hallazgos priorizados (crítico / importante / opcional) y sin aplicar cambios hasta revisarlos uno por uno.** Cubrió: linter propio de la plataforma, rendimiento (carga diferida de imágenes), accesibilidad (contraste de color, encabezados, landmarks), consistencia visual entre TODAS las páginas (no solo home), enlaces rotos, y errores de consola. Esto atrapó bugs invisibles a simple vista (ej. un modal que rompía la paleta de colores solo al hacer zoom en una imagen).
5. **Verificación final directa por el asistente de Cowork usando el navegador conectado**, en vez de confiar únicamente en lo que reportaba Claude Code (que no tiene acceso a un navegador real) — se navegó cada página clave y se leyó la consola directamente para confirmar que no había errores reales antes del lanzamiento.
6. **Cuando un intento de arreglo generó un problema nuevo, detenerse y decidir el alcance antes de seguir.** Un fix de accesibilidad rompió temporalmente el linter en 30 archivos de idioma; en vez de arreglarlo a ciegas, se evaluaron 3 opciones y se eligió la más simple (no usar el sistema de traducciones para un botón personalizado que no lo necesitaba).
7. **Publicar el tema como paso explícito y separado del desarrollo.** El entorno de desarrollo (`theme dev`) es temporal y no es lo mismo que el sitio publicado — hubo que hacer `theme push` de los archivos finales como un tema nuevo y publicarlo manualmente. No asumir que "se ve bien en desarrollo" significa "ya está en vivo".

## 5. Qué NO funcionó / errores y cómo se resolvieron

| Problema | Causa | Solución |
|---|---|---|
| Ediciones manuales (imágenes subidas desde el editor visual) se perdían al siguiente cambio de código | Claude Code editaba una copia local desactualizada | Regla fija: sincronizar (`theme pull`) los archivos afectados antes de cualquier edición |
| Animaciones CSS no se aplicaban a pesar de estar bien escritas | La plataforma renderiza los IDs de sección con un prefijo interno distinto al del código fuente | Verificar contra el HTML real renderizado, usar selectores por coincidencia parcial en vez de ID exacto |
| Error de subida: valor de configuración fuera de rango | No se revisó el límite máximo permitido por el esquema antes de escribir el valor | Revisar el esquema/límites antes de proponer un valor |
| Error de subida: tipo de bloque no permitido en una sección | Se intentó usar un bloque en una sección que no lo soporta | Revisar qué bloques acepta cada sección antes de moverlo, y volver a aplicar todo lo que no se había guardado por el intento fallido |
| Sesión de Claude Code perdió la memoria de la conversación tras reiniciar el computador | Reinicio de la app / actualización de versión | Reconstruir el estado inspeccionando los archivos y fechas reales en disco, nunca inventar un resumen |
| Terminal nueva no reconocía el comando de Claude Code | El PATH del sistema no se actualizó correctamente | Ajuste temporal por sesión, y confirmación de que un reinicio completo (no solo suspender) lo corrige de forma permanente |
| Un mensaje de consola no desaparecía tras una corrección aplicada | Probable caché de la API de la plataforma | Verificar de nuevo tras esperar y recargar; si persiste y es solo informativo (no bloquea funcionalidad real), no vale la pena seguir invirtiendo tiempo antes del lanzamiento |

## 6. Checklist reutilizable para el nuevo proyecto (landing page fitness)

Aunque la herramienta de hosting/plataforma cambie, el **proceso de trabajo con Claude Code se puede repetir igual**:

1. Definir identidad visual y de marca antes de escribir código (paleta de colores, tono, público objetivo).
2. Construir sección por sección, revisando cada diff antes de aprobar.
3. Establecer un servidor de vista previa local desde el principio, para ver cada cambio en tiempo real.
4. Si hay assets manuales (imágenes, videos) que se suben fuera del código, definir una regla clara de sincronización antes de que Claude Code vuelva a tocar esos archivos.
5. Pedir una auditoría de calidad completa antes de publicar: rendimiento, accesibilidad, consistencia visual en todas las páginas, enlaces rotos, errores de consola — con hallazgos priorizados, sin aplicar cambios hasta revisarlos.
6. Verificar visualmente el resultado real (no solo confiar en la descripción del agente) antes de dar por cerrado cualquier cambio.
7. Publicar como paso explícito y separado del desarrollo; confirmar que lo publicado es realmente lo último que se probó.
8. Documentar el estado del proyecto en un archivo aparte (como este) cuando se acumule mucho historial de conversación, en vez de copiar la conversación completa — es más liviano y útil para retomar en una sesión nueva o pasarlo a otro agente.

## 7. Diferencias a tener en cuenta para el proyecto nuevo

- No habrá Shopify CLI ni Liquid — el stack dependerá de la herramienta elegida (por ejemplo HTML/CSS/JS estático desplegado en GitHub Pages, Netlify o Vercel, discutido previamente en este mismo proyecto).
- No hay "tema de desarrollo" ni "publicar tema" — el equivalente será el flujo de control de versiones (commit → push → despliegue automático o manual, según la plataforma de hosting elegida).
- No hay motor de traducciones ni schema de secciones tipo Shopify — pero sigue aplicando la misma lógica de "revisar el esquema/estructura real antes de asumir cómo funciona algo".
- Si el sitio nuevo eventualmente vende productos/servicios, evaluar si necesita un botón de pago externo (Stripe/PayPal Payment Link) en vez de una plataforma de e-commerce completa — decisión ya conversada previamente en este proyecto.

---

*Documento generado a partir del historial real de construcción de la tienda Olimpo Alfa (proyecto de dropshipping), para servir de contexto a un nuevo proyecto de landing page personal en el nicho fitness.*
