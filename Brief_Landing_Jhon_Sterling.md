# Brief de Contenido y Estructura — Landing Page Jhon Sterling

Documento de contexto para construir la landing page con Claude Code. Preparado por Cowork como copiloto, a partir del análisis de todos los documentos, certificados, conversaciones e imágenes en la carpeta "Jhon Sterling". Este archivo es la fuente de verdad del proyecto: pégalo o referencia su ruta al iniciar la sesión de Claude Code para que tenga todo el contexto de una vez.

---

## 1. Resumen del proyecto

Landing page / sitio de una sola página para Jhon Sterling (nombre real Jhon Rafael Lozano Rosero), entrenador personal, modelo fitness y coach online, con base en Yumbo/Cali, Valle del Cauca, Colombia. Objetivo: presentar su experiencia y credenciales, mostrar sus planes de entrenamiento y asesoría, y dirigir todo el tráfico hacia el cierre de venta por WhatsApp, que es como Jhon opera hoy.

**Alcance de esta primera versión (MVP):** solo landing informativa + sección de preguntas frecuentes optimizada para IA (FAQ SEO). No incluye tienda de guías/ebooks ni pasarela de pago — eso queda para una fase 2.

**Rol de trabajo:** el usuario (Brayan) construye el sitio con Claude Code CLI en su propio computador. Cowork actúa como copiloto: revisa cambios, resuelve dudas de arquitectura, contenido y despliegue, sin escribir código directamente en el repositorio.

**Este brief es la base, no una camisa de fuerza.** Claude Code no tiene que seguirlo al pie de la letra: si identifica una mejora de diseño, UX, copy o estructura que sirve mejor a la propuesta de valor (sección 3) y al nivel de acabado esperado (ver sección 6.1), puede proponerla y aplicarla directamente, dejando una nota breve de qué cambió y por qué respecto a lo que decía el brief originalmente.

---

## 2. Marca e identidad visual

**Nombre a usar en el sitio:** "Jhon Sterling" (coincide con sus usuarios de redes @sterlingjhon / @sterlingjhon1). El logo formal dice "TEAM STERLING" — se usa como marca/sello visual (logo, favicon, firma de marca), mientras que en el copy y los textos se habla en primera persona como "Jhon Sterling". No es una contradicción: es común que el logo lleve el nombre de "equipo/marca" y el copy hable del entrenador por su nombre personal. Si en algún momento Jhon prefiere unificarlo completamente a uno solo, es un cambio de texto, no de diseño.

**Logo — dos versiones, para dos usos distintos:** el logo completo (monograma "TS" + corona + texto "TEAM STERLING") tiene muchos detalles finos y florituras. A tamaño pequeño esos detalles se vuelven ilegibles, así que hay que usar la versión correcta según el espacio disponible:

- `Logo/Logo_transparente.png` — el lockup completo (monograma + corona + texto), fondo transparente. Usar en el Hero (a buen tamaño, como elemento central o de apertura) y en el Footer, donde hay espacio para que se lea bien. No usar en espacios menores a ~120px de alto.
- `Logo/Logo_monograma_TS.png` — solo el monograma "TS", sin texto ni corona, recortado y con fondo transparente. Usar en el menú de navegación (header) y en el favicon/ícono de pestaña — cualquier lugar donde el logo se vea pequeño. A ese tamaño, con solo el monograma se sigue leyendo bien; con el lockup completo no.

Como referencia de tamaño mínimo: en el header/nav, el monograma no debería verse más pequeño que unos 40-48px de alto — si actualmente se ve más chico que eso, aumentarlo es la corrección directa al problema de "el logo se ve muy pequeño".

**Paleta de color oficial** (el verde fue confirmado directamente por el cliente; el resto son acentos consistentes con el logo y el flyer):

| Uso | Color | Hex |
|---|---|---|
| Verde de marca (oficial, confirmado) | Verde | `#226021` — RGB(34, 96, 33) |
| Fondo principal / secciones oscuras | Negro | `#0A0A0A` |
| Acento dorado (líneas decorativas, corona, detalles) | Dorado | `#C9A227` |
| Texto sobre fondo oscuro | Blanco hueso | `#F5F3EC` |
| Texto secundario / bordes sutiles | Gris cálido | `#8A8578` |

Tono visual: elegante, "premium", casi de escudo/realeza (la corona en el logo lo confirma) combinado con fotografía de alto contraste de fitness — no es un estilo "gym urbano neón", sino más sobrio y aspiracional.

**Tono de voz:** directo, motivador, cercano — como se nota en sus propias palabras ("parce", "chévere", "súper"). Las dos frases de marca que ya existen en el flyer de Jhon (no se inventaron para este proyecto, ya eran suyas):
- "No es solo entrenar, es transformar tu vida." — **usada en el Footer** (ver sección 6.1.2), como frase de cierre. Quedaba pendiente desde el inicio del proyecto encontrarle un lugar; el footer encaja bien porque es lo último que ve el visitante y no compite con otros titulares ya usados en Hero/Resultados/Contacto.
- "Cuando nadie ve, resultados que todos notan." — ya no se usa como titular del Hero (ver sección 3.1, se reemplazó por una frase que conecta mejor con el subtítulo). Tampoco se usa ya tal cual en Resultados: Brayan la sintió poco fluida como título ("no conecta ni llama la atención"), así que se pulió a dos líneas con la misma esencia (nadie ve / todos notan) — versión final: "El esfuerzo que nadie ve." / "El resultado que todos notan." (ver sección 6, punto 6 y 6.2), con la segunda línea resaltada en dorado con la clase `.accent`, igual que el titular del Hero.

---

## 3. Propuesta de valor y temas de marca personal

Estas dos secciones se construyeron combinando estrategia de marca, copywriting de conversión y marketing de posicionamiento — no es un resumen adicional de datos, es la lógica que debería guiar cada decisión de copy, jerarquía visual y contenido futuro del sitio, para que no quede como "una landing más de entrenador personal" sino con una narrativa propia y defendible.

### 3.1 Propuesta de valor

**A quién le habla:** hombres y mujeres en Cali/Yumbo (y, en modalidad online, en cualquier parte de Colombia) que quieren cambiar su composición corporal en serio — no buscan "un profe de gimnasio", buscan resultados medibles y no saben en quién confiar en un mercado saturado de entrenadores de redes sociales sin respaldo real.

**El problema que resuelve:** la oferta de entrenamiento personal en redes se divide casi siempre en dos extremos — perfiles que se ven bien pero no tienen formación certificada detrás, o profesionales licenciados que no logran demostrar resultados propios convincentes. El cliente termina sin saber a quién creerle.

**Diferenciador — titular y subtítulo del Hero (versión final, actualizada tras revisión):**
Titular: "Certificado en la teoría. Probado en la tarima."
Subtítulo: "Formación universitaria, cursos especializados y una disciplina que entreno primero en mí, antes de llevarla a ti. Entrenamiento, nutrición y seguimiento en un solo lugar."

*(Se reemplazó la versión anterior — "Formación certificada. Resultados propios en tarima..." como titular — porque no conectaba bien con el subtítulo; titular y subtítulo ahora se leen como una sola idea en vez de dos mensajes pegados.)*

**Los tres pilares que sostienen esa promesa, con su prueba:**

1. **Respaldo académico real** — Licenciado en Educación Física y Deportes (Universidad del Valle) + 5 certificaciones especializadas (COFIT, Uniplus) en biomecánica, alta intensidad, nutrición, suplementación y entrenamiento para mujeres. Esto lo separa de la mayoría de "coaches" que solo tienen seguidores, no papeles.
2. **Resultado demostrado en carne propia** — compite y se presenta en tarima (fotos "Muscle Stars"). No enseña una teoría que no vive: es evidencia física de que su método funciona.
3. **Método completo, no fragmentado** — entrenamiento + nutrición + suplementación + seguimiento en un solo plan, presencial u online, en vez de que el cliente tenga que contratar por separado a un nutricionista, un entrenador y comprar una guía de suplementos aparte.

Estos tres pilares deben quedar explícitos — por ejemplo en una franja corta tipo "por qué entrenar conmigo" justo debajo del Hero — no solo implícitos dentro de la biografía larga.

### 3.2 Temas de marca personal (pilares de contenido)

Más allá de vender sesiones, esto es de qué "habla" la marca Jhon Sterling / Team Sterling. Sirve tanto para el copy del sitio como referencia para futuro contenido en redes:

1. **Disciplina silenciosa, resultados visibles** — ligado directamente a la frase ya existente "Cuando nadie ve, resultados que todos notan". Es el eje emocional de la marca: el trabajo duro que nadie ve frente al resultado que sí se nota. Debería ser la frase que ancla el Hero.
2. **Ciencia detrás del físico** — Jhon no es solo estética, es conocimiento aplicado (biomecánica, nutrición, suplementación). Este pilar le da autoridad a la sección de credenciales y contenido real a las respuestas del FAQ SEO: es la prueba de que no improvisa.
3. **Transformación real de otros** — los 9 casos de éxito ya recopilados en `Transformaciones/` no son solo una galería, son la prueba social de que el método funciona en gente común, no solo en un atleta de competencia. Es el contrapeso necesario al pilar anterior: uno demuestra que él lo vive, este que también funciona para otros.
4. **Mentalidad de atleta / estilo de vida aspiracional** — las fotos de tarima y competencia no son solo fotos bonitas: comunican constancia y ambición, el "hacia dónde va" alguien que entrena con Jhon, no solo el punto de partida.
5. **Equipo, no solo cliente** — el nombre "Team Sterling" (y no, por ejemplo, "Jhon Sterling Fitness") ya sugiere pertenencia a un grupo, no una transacción aislada. Vale la pena reforzar ese lenguaje de comunidad en el copy de la sección de contacto/cierre, y no dejarlo solo como nombre de logo. (Titular final revisado, ver sección 6 punto 8: "Cuando escribes, no entras solo." / "Entras al equipo.")

Estos cinco pilares no necesitan una sección propia en el sitio — se distribuyen: el 1 en el Hero, el 2 en Sobre mí/credenciales y en el FAQ, el 3 en Resultados, el 4 en las fotos del Hero/Galería, y el 5 en el cierre/Contacto.

---

## 4. Sobre Jhon (contenido para la sección "Sobre mí")

**Bio corta (para el hero o tarjeta de presentación):**
Entrenador personal con más de 10 años de experiencia, Licenciado en Educación Física y Deportes (Universidad del Valle) y modelo fitness competitivo. Más de 400 clientes transformados combinando entrenamiento inteligente, nutrición y disciplina real.

**Bio larga (versión sintetizada — reemplaza la anterior, que repetía en texto corrido la misma lista de certificaciones que ya aparece abajo en los badges; se acorta a dos párrafos con más fuerza narrativa, sin perder ningún dato de la propuesta de valor):**

"Jhon Rafael Lozano Rosero entrena y compite desde 2015. Licenciado en Educación Física y Deportes por la Universidad del Valle, combina esa formación con cursos especializados en biomecánica, alta intensidad, nutrición y suplementación del Congreso Internacional COFIT, y con la prueba más contundente de todas: su propio físico, forjado también en tarima como modelo fitness competitivo y embajador de marcas como Herpo, Koaj, Diane and Geordie, Daniel Tovilla y Saligia.

Ha guiado a más de 400 personas hacia su mejor versión, entrenando hoy en Mundo Fitness (sede Yumbo) y por videollamada para quien prefiera entrenar desde donde esté. Más de 40 mil personas siguen su proceso en Instagram y 11 mil en TikTok."

**Credenciales para mostrar como sellos/badges de confianza — cada una con un ícono representativo (ver notas de implementación abajo):**
- Licenciado en Educación Física y Deportes — Universidad del Valle → ícono de birrete/gorro de graduación
- Tarjeta Profesional de Entrenador Deportivo (COCED) vigente → ícono de carnet/tarjeta de identificación
- Diplomado en Entrenamiento Personal y Nutrición Deportiva — Uniplus Academy (120h) → ícono de diploma/certificado (rollo o documento con sello)
- IV Congreso Internacional COFIT 2025 — asistente profesional (20h) → ícono de personas/auditorio (congreso)
- Certificados: biomecánica aplicada, alta intensidad, entrenamiento para mujeres, planificación nutricional, suplementación deportiva → ícono de medalla/insignia (agrupa los 5 cursos cortos en un solo badge)

*Implementación:* mismo estilo de ícono SVG en línea (stroke, `currentColor`, color dorado) que ya se usó en los íconos de "lo que incluye" de la sección Servicios — para mantener consistencia visual, no introducir un segundo lenguaje de íconos.

**Redes y contacto:**
- Instagram: instagram.com/sterlingjhon
- TikTok: @sterlingjhon1
- WhatsApp directo: wa.me/message/2NK4SSRX5HADH1
- Ubicación: Yumbo, Valle del Cauca (zona Cali)

**Gimnasio donde entrena presencialmente (dato corregido — no es Ultra Instinto Gym, revisar y reemplazar en todo el sitio si ya se había escrito así):**
- Nombre: Mundo Fitness, sede Yumbo
- Dirección para mostrar en el sitio: Cl. 10 #20-635, frente a Gaviota de la Colina, Arroyo Hondo, Yumbo, Valle del Cauca
- Texto de búsqueda exacto para el mapa (usar tal cual para el query de Google Maps, es el que ubica el pin correctamente): `Gaviota de la colina, Cl. 10 #20 - 635 Frente a, Yumbo, Arroyo Hondo, Yumbo, Valle del Cauca, Colombia`
- Sitio web / instalaciones: https://mundofitnessjamundi.com.co/instalaciones/
- Uso en el sitio: mencionar el nombre del gimnasio en la sección Sobre mí (ya corregido en la bio larga arriba), y en la sección de Contacto agregar: (1) la dirección en texto, (2) un mapa de Google Maps incrustado, y (3) un botón "Cómo llegar" que abra Google Maps con indicaciones. Esto porque ahí es donde se desarrolla el entrenamiento presencial — le da al visitante la posibilidad de ubicar y llegar al lugar antes de decidirse.

**Ajuste posterior (pedido por Brayan):** además de lo anterior, agregar mención + botón hacia el sitio general del gimnasio (`https://mundofitnessjamundi.com.co/`, la home, no solo la subpágina de instalaciones que ya está enlazada en Contacto como "Ver instalaciones"). Revisado dónde queda mejor sin duplicar lo que ya existe:
  1. **Sobre mí:** en la bio larga, la frase "entrenando hoy en Mundo Fitness (sede Yumbo)" — convertir "Mundo Fitness" en un enlace de texto a `https://mundofitnessjamundi.com.co/` (`target="_blank" rel="noopener"`). Es la primera mención del gimnasio en el sitio, tiene sentido que ya sea clickeable ahí.
  2. **Contacto → bloque "Entrenamiento presencial":** agregar un tercer botón junto a los ya existentes "Cómo llegar" y "Ver instalaciones" (mismo estilo `btn btn-outline`), con texto **"Conoce Mundo Fitness Jamundí"**, apuntando a la home `https://mundofitnessjamundi.com.co/`. No reemplaza a "Ver instalaciones" (que sigue apuntando a la subpágina de fotos de instalaciones) — son complementarios: uno lleva a las fotos del lugar, el otro al sitio general del gimnasio.

**Cómo incrustar el mapa (sin necesidad de API key, funciona en un sitio estático):**
- Iframe de embed: `https://www.google.com/maps?q=<dirección codificada para URL>&output=embed`
- Botón "Cómo llegar": enlace a `https://www.google.com/maps/search/?api=1&query=<dirección codificada para URL>`, abierto en una pestaña nueva.
- En ambos casos, usar el texto de búsqueda exacto de arriba, codificado correctamente para URL (espacios, `#`, comas, etc.).

---

## 5. Servicios y precios

| Plan | Modalidad | Incluye | Precio |
|---|---|---|---|
| Personalizado (1 persona) | Presencial en Yumbo | Plan de alimentación personalizado, plan de entrenamiento, guía de suplementación, entrenamiento presencial, medidas antropométricas | 8 sesiones: $500.000 · 12 sesiones: $550.000 · 16 sesiones: $600.000 |
| Semipersonalizado (2–4 personas) | Presencial en Yumbo | Igual al anterior, en grupo reducido | 8 sesiones: $320.000 · 12 sesiones: $400.000 · 16 sesiones: $520.000 |
| Entrenamiento online por videollamada | Virtual | Igual al presencial, sesión por videollamada | Mismos precios del plan personalizado |
| Asesoría online | Virtual, por trimestre | Plan nutricional, plan de entrenamiento, guía de suplementación, soporte de dudas por WhatsApp | $550.000 por trimestre |
| Plan de alimentación | Virtual | Solo plan nutricional | Desde $100.000/mes |

**Nota importante:** no hay pasarela de pago en el sitio para este MVP. Cada plan debe tener un botón que abra WhatsApp con un mensaje pre-armado (ej. "Hola Jhon, quiero información sobre el plan Personalizado de 12 sesiones"), así se mantiene su flujo actual de cierre de venta manual. Medios de pago que maneja Jhon (mencionar solo si se pregunta, no necesariamente en el sitio): Nequi, Bancolombia, Llave.

---

## 6. Estructura sugerida de la página (una sola página, navegación por anclas)

1. **Hero** — logo, nombre "Jhon Sterling", frase de marca principal, foto de impacto (una de las fotos de tarima o pose atlética), botón CTA "Escríbeme por WhatsApp" y botón secundario "Ver planes".
2. **Barra de estadísticas** (nueva) — franja corta justo debajo del Hero con 3-4 números grandes: +10 años de experiencia, +400 clientes transformados, +40 mil seguidores en Instagram. Es un patrón que usan consistentemente los sitios de la competencia revisados (ver sección 6.1) para generar credibilidad inmediata antes de que el visitante siga leyendo.
3. **Sobre mí** — bio larga + badges de credenciales + foto casual (no de tarima, para mostrar cercanía).
4. **Cómo funciona** (nueva) — 3 o 4 pasos numerados y simples, por ejemplo: 1) Escríbeme por WhatsApp, 2) Cuéntame tu objetivo, 3) Recibe tu plan personalizado, 4) Empieza a entrenar. Reduce la fricción de "no sé cómo es el proceso" antes de que alguien se decida a escribir.
5. **Servicios y planes** — tarjetas con los 5 planes de la tabla anterior, cada una con su botón de WhatsApp prellenado.
6. **Resultados / Galería** — título de sección (versión final, pulida a partir del tagline original de Jhon — ver sección 2): "El esfuerzo que nadie ve." / "El resultado que todos notan." (segunda línea en dorado, clase `.accent`, mismo tratamiento que el titular del Hero). Formato: carrusel tipo "libro" (una transformación a la vez, con navegación anterior/siguiente y botón de "me gusta"), no grid estático — ver plan detallado y textos ya redactados en la sección 6.2. Contenido: las 9 fotos de `Transformaciones/` dentro del mismo carrusel — 8 con texto narrativo y la novena (`Transformacion_1.jpeg`) con su cita real de agradecimiento como texto.
7. **Preguntas frecuentes (FAQ SEO)** — ver metodología en sección 7. Presentarlas como acordeón (clic para expandir cada pregunta), no como bloque de texto plano — se ve más cuidado y es más fácil de escanear.
8. **Contacto / CTA final** — franja de cierre con los tres canales (WhatsApp, Instagram, TikTok) y ubicación (Yumbo). Título final (revisado, Brayan sintió que "Cuando entras, entras al equipo" no conectaba): **"Cuando escribes, no entras solo."** / *"Entras al equipo."* (segunda línea en color de acento, mismo tratamiento que Hero y Resultados) — conecta directamente la acción del CTA (escribir) con la pertenencia al equipo, en vez de dejar "entras" sin referente claro. Gancho motivacional debajo: "Nadie llega a su mejor versión solo. El primer paso es escribir." Los tres botones de contacto (WhatsApp, Instagram, TikTok) deben llevar su ícono correspondiente además del texto — el de Instagram con su color de marca reconocible (degradado morado/rosa/naranja), no en el color plano cream que usan WhatsApp y TikTok, ya que sin color no se reconoce como el ícono de Instagram.
9. **Footer** — pendiente de construir (no existía ninguna etiqueta `<footer>` al revisar el sitio). Logo pequeño (usar el monograma, no el logo completo — mismo criterio de legibilidad del nav), redes sociales como íconos, y año dinámico (`new Date().getFullYear()`) en la línea de copyright.

### 6.1 Nivel de acabado visual — referencias y ajustes

Se revisaron tres sitios de la competencia/industria (entrenamiento personal y coaching fitness) para comparar nivel de acabado: trainerathomemedellin.com, bodytech.com.co/complementarios/entrenamiento y coach.smartfit.com/co. Patrones concretos que aparecen en los tres y que actualmente el sitio de Jhon no tiene, y que sí vale la pena incorporar:

- **Barra de estadísticas con números grandes** justo después del Hero (ver punto 2 arriba) — presente en los tres sitios revisados como refuerzo de credibilidad inmediata.
- **Sección "cómo funciona" con pasos numerados** (ver punto 4 arriba) — Smart Fit Coach la usa con 4 pasos; reduce la sensación de "landing genérica de venta" y la acerca a un producto/servicio bien pensado.
- **Grid de beneficios con iconos**, no solo párrafos de texto — por ejemplo, para lo que incluye cada plan (nutrición, entrenamiento, seguimiento, medidas), un ícono simple por beneficio ayuda a escanear la página más rápido que un párrafo largo.
- **Testimonios con nombre y cita corta**, en formato tarjeta — no reemplazan las fotos de transformación, las complementan (Smart Fit Coach combina ambos).
- **FAQ en acordeón** en vez de texto plano continuo.
- **Alternar el layout entre secciones** (texto-izquierda/imagen-derecha en una sección, e invertido en la siguiente) en vez de repetir siempre el mismo patrón — genera sensación de diseño intencional, no de plantilla.
- **Espaciado generoso entre secciones** (aire/whitespace) — los tres sitios evitan amontonar contenido; cada sección respira antes de pasar a la siguiente.

Esto no cambia el contenido ni la estructura general que ya definimos, es una capa de refinamiento visual/UX sobre lo mismo — aplica principalmente a Hero, Servicios y FAQ, que son las secciones más "genéricas" si no se cuidan estos detalles.

### 6.1.1 Ronda de ajustes de color y jerarquía visual (pedidos por Brayan tras revisar todo el sitio)

- **Logo del Hero:** más grande que el tamaño actual (96px de alto) y centrado horizontalmente, como elemento propio encima del bloque de texto ("Entrenador personal · Cali / Yumbo" / "Certificado en la teoría. Probado en la tarima.").
- **Subtítulo del Hero** ("Formación universitaria, cursos especializados y una disciplina que entreno primero en mí...") — justificado (`text-align: justify`), con la misma regla ya aplicada en Sobre mí: sin `hyphens: auto`, no se deben introducir guiones nuevos.
- **"Jhon Sterling" (el `<h2>` de Sobre mí):** resaltar en verde, pero el verde claro (`--color-green-light`, `#2f7f2d`), no el verde oscuro de marca (`--color-green`, `#226021`) — este último se ve apagado sobre el fondo negro del sitio.
- **Título del FAQ** ("Todo lo que necesitas saber antes de escribir"): resaltar con color de la paleta, siguiendo el mismo patrón de dos tonos ya usado en Hero y Resultados — por ejemplo "Todo lo que necesitas saber" en crema + "antes de escribir" en dorado (`.accent`).
- **Ícono de Instagram en Contacto:** actualmente hereda el color plano `cream` de `.btn-outline` (por `currentColor`), igual que WhatsApp y TikTok — sin su color de marca no se reconoce como Instagram. Debe llevar su degradado/color de marca reconocible, sin tocar el estilo de los otros dos íconos.

### 6.1.2 Segunda ronda: nuevas fotos, header y footer

- **Fotos de acción en Cómo funciona y Planes:** ambas secciones son actualmente solo texto (Cómo funciona: 4 pasos numerados sin imagen; Planes: grid de tarjetas sin imagen). Se agregan las 2 fotos nuevas (ver sección 8) — una en cada sección, en un layout de dos columnas (texto/pasos a un lado, foto grande al otro), con tratamiento homogéneo entre ambas: mismo recorte/proporción, mismos bordes redondeados, misma posición relativa, para que se sientan parte de una sola decisión de diseño y no un agregado suelto.
- **Header más visual:** actualmente `.site-header` es una barra plana (`rgba(10,10,10,0.88)` con blur y un borde inferior gris tenue, sin acento de color). Debe resaltar más — por ejemplo con un borde inferior en degradado verde/dorado en vez del gris actual, o un sutil acento de color en el fondo. No debe perder legibilidad del texto de navegación ni volverse pesado visualmente (sigue siendo una barra sticky que se ve en todo momento al hacer scroll).
- **Footer:** los íconos de redes sociales un poco más grandes que como hayan quedado en la primera versión, y agregar una frase de cierre con impacto. En vez de inventar una frase nueva, se usa la segunda frase de marca original de Jhon que llevaba pendiente de ubicación desde el inicio del proyecto (ver sección 2): **"No es solo entrenar, es transformar tu vida."** — filosófica, desafiante en el sentido correcto (invita a la transformación, no solo al ejercicio), y auténtica (es de Jhon, no inventada). Va arriba de la línea de copyright, con algo de énfasis visual (por ejemplo en itálica o con la tipografía de display), sin competir en tamaño con los títulos de las secciones anteriores.

**Ajuste posterior (tras ver el footer construido):** el layout inicial (`.footer-inner { display:flex; justify-content:space-between }`) puso el logo a la izquierda, la frase+copyright al centro y los íconos a la derecha, en una sola fila — se ve descentrado. Se cambia a una **columna centrada**: logo arriba, luego la frase "No es solo entrenar, es transformar tu vida." destacada, luego los íconos de redes sociales, y por último la línea de copyright — todo alineado al centro horizontalmente (`text-align: center` / `align-items: center` en un `flex-direction: column`), para que el footer se sienta homogéneo y no como tres bloques sueltos en una fila.

**Crédito del desarrollador (pedido por Brayan):** agregar al final del footer, debajo de la línea de copyright, una línea pequeña de crédito: **"Sitio web realizado por Ing. Brayan Romero"**. Va en un tamaño de fuente menor que el copyright (texto discreto, no compite visualmente con nada), como último elemento de la columna centrada.

### 6.1.3 Tratamiento visual "premium" de las fotos de Jhon (pedido por Brayan)

Brayan notó que las fotos de Jhon se ven "planas" contra el fondo negro y pidió un efecto visual que las haga ver de mayor calidad — mencionó un efecto de "flotar" que había visto en un sitio anterior. Se decidió (a criterio de Claude, con aprobación de Brayan: "como consideres, se vea premium de calidad") combinar tres elementos:

1. **Marco en degradado:** borde delgado (2px) con degradado diagonal verde claro → dorado → verde claro (`--color-green-light` → `--color-gold` → `--color-green-light`), el mismo lenguaje de color que ya usa el acento inferior del header (`.site-header::after`) — refuerza que es un mismo sistema visual, no un elemento nuevo aislado. Reemplaza los bordes planos actuales (`.hero-photo` tiene un borde dorado de 1px, `.about-photo` uno gris de 1px, `.feature-photo` no tiene borde).
2. **Sombra elevada ("flotar"):** una sombra suave y difuminada, desplazada hacia abajo, que separa la foto del fondo negro dándole sensación de estar suspendida — combinación de una sombra oscura amplia (ambiente/profundidad) más una segunda sombra más sutil con un tinte cálido dorado (coherencia de marca). Reemplaza la sombra plana que ya tiene `.hero-photo` y agrega sombra a `.about-photo` y `.feature-photo`, que hoy no tienen.
3. **Animación de flotación sutil:** un movimiento vertical muy leve y continuo (subir/bajar unos pocos píxeles en un ciclo de varios segundos, tipo `ease-in-out infinite`), casi imperceptible pero que le da vida a la foto. Debe respetar `prefers-reduced-motion: reduce` (desactivar la animación para quien lo tenga activado, por accesibilidad).

**Dónde aplica:** solo a las 4 fotos "protagonistas" de una sola imagen — Hero (`.hero-photo`), Sobre mí (`.about-photo`), Cómo funciona y Planes (`.feature-photo`, usada en ambas). **Dónde NO aplica:** las 9 fotos del carrusel de Resultados se dejan sin este tratamiento — ahí el objetivo es que se lean como evidencia/documental de transformación real, no como piezas decorativas, así que se mantienen limpias tal como están.

Se conserva el `border-radius: 10px` y `aspect-ratio: 4/5` que ya tienen las cuatro fotos — el ajuste es solo borde, sombra y animación, no el recorte ni el tamaño.

**Ajuste posterior — tratamiento (más comedido) para el carrusel de Resultados:** Brayan notó que las tarjetas del carrusel también se ven planas (`.result-card` hoy es solo un borde gris de 1px casi invisible sobre fondo negro, sin sombra). Se decide (a criterio de Claude, aprobado por Brayan) darle un tratamiento más sutil que el de las 4 fotos protagonistas, para no restarle credibilidad documental a la sección — nada de marco en degradado ni animación de flotación aquí, solo:

1. **Sombra elevada en la tarjeta completa** (`.result-card`, no en la foto individual): una sombra suave y oscura, sin tinte dorado, que dé sensación de que la tarjeta completa flota levemente sobre el fondo.
2. **Borde un poco más definido:** subir ligeramente la opacidad del borde gris actual (`rgba(138,133,120,0.2)`) para que la tarjeta tenga más presencia, sin cambiar de color.
3. **Viñeta sutil en el fondo interior** (`.result-media`, hoy negro sólido plano): un degradado radial muy leve (negro suave hacia los bordes) para que no se vea como una caja negra vacía alrededor de la foto.

Con esto queda una jerarquía visual clara: las 4 fotos protagonistas son "marketing premium" (marco + flotación), las tarjetas del carrusel son "prueba real, cuidada pero sobria" (solo sombra + viñeta), sin competir entre sí.

**Ajuste posterior — borde en degradado también en las fotos del carrusel (pedido por Brayan):** además de la sombra y la viñeta, las fotos dentro de `.result-media` llevan el mismo borde en degradado (2px, `var(--color-green-light)` → `var(--color-gold)` → `var(--color-green-light)`, 135deg) que ya tienen las 4 fotos protagonistas — así el carrusel también conecta con el lenguaje de color del header. La diferencia con las fotos protagonistas se mantiene: el carrusel **no** lleva la sombra doble con tinte dorado ni la animación de flotación (esas quedan exclusivas de las 4 fotos "marketing"), solo el borde de color se suma a lo que ya tenía (sombra neutra en la tarjeta + viñeta de fondo).

### 6.1.4 Mockup de WhatsApp en Contacto (pedido por Brayan)

Brayan vio en otra página un mockup de celulares mostrando el seguimiento de una app de entrenamiento ("Smart Fit Coach") y preguntó si se podía agregar algo similar en Contacto. **Nota de honestidad importante:** Jhon no tiene una app propia de seguimiento — su seguimiento real es por WhatsApp directo (ver sección 6, Cómo funciona). Poner el mockup de una app inexistente sería engañoso, así que se adapta la idea de forma honesta: un mockup de un celular mostrando una **conversación real de WhatsApp con Jhon** (no una app ficticia), con el mismo estilo visual moderno que le gustó a Brayan pero 100% fiel a cómo funciona el servicio de verdad.

**Contenido de la conversación (refleja exactamente el flujo ya documentado en "Cómo funciona"):**
1. Cliente: "Hola Jhon, quiero información sobre tus planes de entrenamiento" — el mismo texto exacto que ya se usa en el enlace `wa.me` del botón de WhatsApp en todo el sitio, para que sea coherente con lo que la persona realmente escribiría al hacer clic.
2. Jhon: "¡Hola! Claro, cuéntame qué buscas: bajar grasa, ganar músculo o recomposición corporal 💪"
3. Cliente: "Quiero empezar a entrenar presencial en Yumbo"
4. Jhon: "Perfecto, armamos tu plan personalizado. Aquí tienes toda la info 👇"

**Implementación:** se construye con HTML/CSS puro (marco de celular + burbujas de chat), sin necesidad de una captura de pantalla real ni de un asset de imagen nuevo. El marco del celular usa la paleta del sitio (negro/dorado), y las burbujas de chat mantienen el verde característico de WhatsApp (para que se reconozca de inmediato como WhatsApp — es una señal de confianza). **Dónde va:** en la columna izquierda de Contacto (`.contact-copy`), debajo de los botones de WhatsApp/Instagram/TikTok, como elemento visual de apoyo — no reemplaza nada de lo que ya existe (mapa, dirección, botones de ubicación en la columna derecha se quedan igual).

**Ajuste posterior — gancho + botón junto al mockup (pedido por Brayan):** en la referencia que vio, el mockup de celulares iba acompañado de un titular llamativo arriba ("El seguimiento... te garantiza") y un botón grande y vistoso abajo ("¡Inscríbete ahora!"). Se replica esa misma estructura persuasiva alrededor del mockup de WhatsApp, adaptada honestamente:

- **Gancho (arriba del mockup):** una frase corta y llamativa, en un tamaño de fuente mayor al texto normal del párrafo, tipo: **"Así de fácil empieza tu cambio."** — no es una promesa/garantía (eso sería deshonesto sin datos que lo respalden), es una invitación directa que conecta con lo que se ve justo debajo (la conversación real).
- **Botón (debajo del mockup):** un botón grande, en dorado sólido (`--color-gold`), notablemente más grande/vistoso que los botones `btn-primary`/`btn-outline` que ya existen en el sitio — con texto **"¡Escríbeme ahora!"** (adaptado de "Inscríbete", porque aquí no hay inscripción formal, es un mensaje directo). Usa el mismo enlace `wa.me` que el resto de los botones de WhatsApp del sitio.

Con esto, el mockup queda enmarcado como su propia mini-sección persuasiva dentro de la columna de Contacto: gancho → conversación real → botón de acción, replicando la estructura que le gustó a Brayan pero con contenido 100% honesto.

### 6.2 Plan detallado de la sección Resultados (carrusel tipo "libro")

Se revisaron directamente las 9 fotos de `Transformaciones/`. **Revisión (a pedido de Brayan):** las 9 se incluyen dentro del mismo carrusel — `Transformacion_1.jpeg` ya no se separa en una tarjeta de testimonio aparte, se integra como la novena tarjeta. Nota honesta que vale la pena tener presente: a diferencia de las otras 8, esta foto no es técnicamente un antes/después de cuerpo (son dos fotos de contexto distinto — gimnasio y una celebración — sin comparación física clara), es una historia de Instagram donde una clienta agradece públicamente a Jhon. Aun así funciona bien dentro del carrusel porque trae algo que ninguna otra tiene: **una cita textual 100% real y verificable** ("El apoyo de este señor, @sterlingjhon. ¡Gracias!"), así que en vez de forzar una narrativa de transformación inventada, esa tarjeta usa directamente su propio comentario como texto — es, de hecho, el testimonio más auténtico de las 9.

**Por qué no se inventan citas ni nombres para las otras 8:** ninguna de esas fotos trae un testimonio de texto propio (nombres o frases del cliente). Por honestidad y para no fabricar comillas atribuidas a personas reales identificables, cada tarjeta lleva una **descripción narrativa corta en tercera persona** (2 líneas, tipo "storytelling" del proceso: punto de partida → qué se trabajó → resultado visible) en vez de una cita inventada en primera persona. Cuando Jhon consiga testimonios reales de estas mismas personas (ver sección 8, pendiente), se reemplaza el texto narrativo por su cita textual sin tocar el diseño.

**Orden final (revisado por Brayan tras ver el carrusel construido — reordenó las 9 tarjetas por impacto visual/ritmo, no por historia cronológica), con el texto ya redactado para cada tarjeta:**

1. `Transformacion_3.jpeg` — "Más tonificación, más fuerza y una relación distinta con el ejercicio: pasó de ser una obligación a ser parte de su semana."
2. `Transformacion_7.jpeg` — "Ganó volumen muscular donde antes no había definición. Semanas de entrenamiento de fuerza progresivo y constancia, sin atajos ni dietas milagro."
3. `Transformacion_1.jpeg` — cita real (no inventada, se muestra tal cual, idealmente con comillas/estilo distinto para diferenciarla de las 8 narrativas): *"El apoyo de este señor, @sterlingjhon. ¡Gracias!"* — atribución: "Clienta de Team Sterling, vía Instagram" (sin nombre propio porque no está confirmado).
4. `Transformacion_2.jpeg` — "De un físico blando y sin definición a un torso trabajado y marcado. Entrenamiento de fuerza constante y un plan de nutrición ajustado a su rutina."
5. `Transformacion_4.jpeg` — "De una figura sin entrenar a un cuerpo trabajado y definido. La prueba de que entrenar con propósito no busca 'adelgazar', busca construir fuerza y seguridad."
6. `Transformacion_8.jpeg` — "De un punto de partida con sobrepeso a un físico fuerte y definido, con la confianza que solo da ver el esfuerzo reflejado en el espejo."
7. `Transformacion_5.jpeg` — "Espalda, brazos y composición corporal completamente transformados. Meses de entrenamiento progresivo, sin prisa pero sin pausa."
8. `Transformacion_9.jpeg` — "Menos grasa, más energía y una actitud distinta frente al espejo. La clave no fueron las dietas extremas, fue la constancia semana a semana."
9. `Transformacion_6.jpeg` — "De sobrepeso a un abdomen marcado y un cuerpo atlético. La combinación de entrenamiento dirigido y disciplina alimenticia hizo el trabajo."

(Nota: con este reordenamiento, la tarjeta de testimonio real — `Transformacion_1.jpeg` — ya no queda al final sino en la posición 3. Es una decisión válida de Brayan, solo se deja anotado porque antes cerraba el carrusel con esa nota auténtica y ahora queda en medio.)

**Correcciones aplicadas tras la primera revisión en vivo (ver también hallazgos de Brayan):**
- Se confirmó que las 9 fotos están íntegras en `Transformaciones/` — no falta ninguna. Las 9 van dentro del carrusel (ver arriba), no 8 + 1 testimonio aparte.
- **Bug de navegación (confirmado leyendo `js/main.js`):** el carrusel calcula la diapositiva actual dividiendo `scrollLeft` entre el ancho del viewport (`currentIndex()`), leído en el momento del clic. Si se hace clic en "Siguiente" varias veces seguidas (o incluso una sola vez, dependiendo del navegador) mientras el scroll suave anterior todavía se está animando, ese cálculo lee una posición intermedia y salta varias tarjetas de una vez en lugar de avanzar una por una. Por el mismo motivo, al llegar al final, el índice calculado puede quedar desalineado y los botones "Anterior"/"Siguiente" dejan de responder correctamente. Solución pedida a Claude Code: llevar el índice actual en una variable de estado que se actualice de forma explícita en cada clic (no derivarlo solo de `scrollLeft` en caliente), e ignorar/bloquear clics nuevos mientras la transición anterior no haya terminado (por ejemplo escuchando el evento `scrollend`).
- **Límites del carrusel:** no debe dar la vuelta (no es "carrusel infinito", es tipo libro con primera y última página), pero en la primera tarjeta el botón "Anterior" debe quedar visualmente deshabilitado, y en la última tarjeta el botón "Siguiente" debe quedar visualmente deshabilitado — así se nota que se llegó al límite en vez de que el botón simplemente no responda sin explicación.
- **Posición de las flechas:** se piden a los lados (izquierda/derecha), centradas verticalmente sobre la imagen — no debajo de la tarjeta como quedaron en la primera versión. Los puntos indicadores y el contador "x / 9" se mantienen debajo.
- **Bug de fondo encontrado en la segunda revisión:** el problema real de que el carrusel "se frena" no era la lógica de JavaScript (esa ya quedó bien corregida con estado explícito), sino un conflicto de CSS: `.carousel-slide` tenía `scroll-snap-stop: always;`, que combinado con `scroll-snap-type: x mandatory` bloquea por completo los `scrollTo(..., behavior:'smooth')` en Chrome (se confirmó midiendo `scrollLeft` en vivo: se quedaba fijo en 0 aunque el contador sí avanzaba). Solución: quitar `scroll-snap-stop: always;`, o si el scroll suave sigue sin funcionar, animar la transición manualmente en JS o usar `behavior:'auto'` (salto directo, aceptable para este formato "tipo libro").

**Cierre del tema (resuelto):** después del segundo arreglo, el carrusel seguía pareciendo "congelado" al probarlo en el navegador real de Brayan — se aisló la causa revisando la consola: no era el código del sitio, era una extensión de Chrome instalada en su navegador (relacionada con cupones/checkout) interfiriendo con el comportamiento de scroll de la página. Se confirmó probando en una ventana de incógnito (con extensiones desactivadas): navega perfecto de la 1 a la 9 y de regreso, sin trabarse. Sección Resultados/Galería queda cerrada y funcionando.

**Detalle a considerar en `Transformacion_4.jpeg`:** la imagen trae superpuesta de origen la etiqueta "@ULTRAINSTINTOGYM" (el gimnasio anterior, ya corregido en el resto del sitio — ver sección 4). Es un detalle menor de una foto histórica de Instagram, no un dato sensible, pero por consistencia de marca vale la pena que Jhon decida: dejarla tal cual (la mayoría de visitantes no la va a notar) o recortarla si el diseño lo permite sin cortar el cuerpo de la foto. No bloquea construir la sección.

**Formato de interacción — "tipo libro" (según pidió Brayan):**
- Una tarjeta grande a la vez (imagen antes/después + texto narrativo debajo), no un grid con las 9 fotos sueltas.
- Botones "Anterior" / "Siguiente" (flechas) para pasar de una a otra, más swipe táctil en celular (la mayoría del tráfico es móvil) y flechas de teclado para accesibilidad.
- Indicador de posición tipo "3 / 9" o puntos, para que se sienta como pasar páginas de un libro.
- Botón de "me gusta" (ícono de corazón) en cada tarjeta: al hacer clic se rellena y aumenta un contador visual. **Importante — límite técnico a tener claro:** como el sitio no tiene backend en este MVP (ver sección 10), ese contador es solo local en el navegador de quien lo ve, no un contador real compartido entre todos los visitantes — se reinicia si recarga la página. Sirve como detalle de interacción/gamificación, no como métrica real. Si más adelante se quiere un contador de verdad compartido, se necesitaría una base de datos simple (Fase 2).
- Sin autoplay — que cada quien pase las fotos a su propio ritmo, coherente con la idea de "leer" cada historia con calma.

---

## 7. Estrategia de FAQ optimizada para IA (SEO)

Basado en la metodología que Jhon mismo compartió en la transcripción SEO.txt: en vez de un blog tradicional, se arma una sola página/sección de preguntas frecuentes, redactadas en el formato que prefieren los "AI overviews" (respuestas directas y concisas), agrupadas por clusters temáticos, para maximizar la probabilidad de que un cliente potencial en Cali/Yumbo que le pregunte a ChatGPT o Gemini "quién es un buen entrenador personal en Cali" termine encontrando a Jhon citado.

Cada respuesta es corta (2-4 líneas), factual, y basada únicamente en la información real de este brief — no se inventan datos ni plazos que Jhon no pueda cumplir (por ejemplo, no se promete un número de semanas para ver resultados, porque no es un dato real confirmado).

### 7.1 Preguntas y respuestas ya redactadas, listas para implementar (16, en 5 clusters)

**Cluster: Sobre el servicio**

1. **¿Qué incluye un plan de entrenamiento personalizado con Jhon Sterling?** Incluye plan de alimentación personalizado, plan de entrenamiento, guía de suplementación, entrenamiento presencial en Yumbo y toma de medidas antropométricas. Es un método completo: entrenamiento, nutrición y seguimiento en un solo plan.
2. **¿Cuánto cuesta un entrenador personal en Cali/Yumbo con Jhon Sterling?** El plan personalizado (1 persona) va desde $500.000 por 8 sesiones hasta $600.000 por 16 sesiones. También hay un plan semipersonalizado (2-4 personas) desde $320.000. Escribe por WhatsApp para una cotización exacta según tu objetivo.
3. **¿Jhon Sterling atiende también por videollamada?** Sí. El entrenamiento online por videollamada tiene el mismo contenido y los mismos precios que el plan personalizado presencial, ideal para quien no vive en Cali/Yumbo o prefiere entrenar desde casa.
4. **¿Cuál es la diferencia entre el plan personalizado y el semipersonalizado?** El personalizado es entrenamiento 1 a 1; el semipersonalizado es en grupo reducido de 2 a 4 personas, con el mismo contenido (nutrición, entrenamiento, suplementación, medidas) a un precio menor por persona.

**Cluster: Sobre resultados**

5. **¿En cuánto tiempo se ven resultados con entrenamiento personalizado?** Depende de tu punto de partida, objetivo y constancia — no hay un plazo único válido para todos. Lo que sí es constante es el método: entrenamiento, nutrición y seguimiento juntos, no por separado, lo que acelera resultados reales frente a entrenar sin un plan integral.
6. **¿Jhon Sterling ayuda con definición muscular o solo con ganancia de masa?** Ayuda con ambos objetivos. Cada plan se personaliza según la meta de la persona: pérdida de grasa y definición, ganancia de masa muscular, o una combinación de las dos.
7. **¿Hay pruebas reales de resultados con Jhon Sterling?** Sí — en la sección Resultados del sitio hay transformaciones reales de clientes, antes y después. Jhon también compite como modelo fitness y muestra su propio físico en tarima, como evidencia de que aplica en sí mismo el método que enseña.

**Cluster: Sobre nutrición**

8. **¿El plan de entrenamiento incluye asesoría nutricional?** Sí. Todos los planes de entrenamiento (personalizado, semipersonalizado y online) incluyen plan de alimentación y guía de suplementación, no solo la parte de ejercicio.
9. **¿Qué es la asesoría online y qué diferencia tiene con el plan presencial?** Es un servicio trimestral 100% virtual ($550.000 por trimestre) que incluye plan nutricional, plan de entrenamiento, guía de suplementación y soporte de dudas por WhatsApp — sin sesiones de entrenamiento presencial ni por videollamada.
10. **¿Se puede contratar solo el plan de alimentación, sin entrenamiento?** Sí, existe un plan de alimentación independiente, solo nutricional, desde $100.000 al mes.

**Cluster: Sobre credenciales**

11. **¿Jhon Sterling es un entrenador certificado?** Sí. Es Licenciado en Educación Física y Deportes por la Universidad del Valle y cuenta con Tarjeta Profesional de Entrenador Deportivo (COCED) vigente, además de formación especializada adicional.
12. **¿Qué formación tiene Jhon Sterling?** Licenciatura en Educación Física y Deportes (Universidad del Valle), Diplomado en Entrenamiento Personal y Nutrición Deportiva (Uniplus Academy, 120h), asistencia profesional al IV Congreso Internacional COFIT 2025, y certificados en biomecánica aplicada, alta intensidad, entrenamiento para mujeres, planificación nutricional y suplementación deportiva.
13. **¿Jhon Sterling compite como atleta?** Sí, compite y se presenta en tarima como modelo fitness competitivo, y es embajador de marcas como Herpo, Koaj, Diane and Geordie, Daniel Tovilla y Saligia — su formación teórica va acompañada de resultados propios y demostrables.

**Cluster: Sobre logística**

14. **¿Dónde entrena Jhon Sterling de forma presencial?** En Mundo Fitness, sede Yumbo (Cl. 10 #20-635, frente a Gaviota de la Colina, Arroyo Hondo, Yumbo, Valle del Cauca). La ubicación exacta y el mapa están en la sección de Contacto del sitio.
15. **¿Cómo se contacta a Jhon Sterling?** Por WhatsApp directo desde el botón del sitio, o por Instagram (@sterlingjhon) y TikTok (@sterlingjhon1).
16. **¿Jhon Sterling entrena a distancia o solo en Cali/Yumbo?** Ambas modalidades: entrenamiento presencial en Yumbo, y entrenamiento online por videollamada o asesoría virtual para cualquier parte de Colombia.

### 7.2 Notas de implementación para Claude Code

- Formato acordeón: cada pregunta es un encabezado clickeable que expande/colapsa su respuesta — no mostrar las 16 respuestas abiertas de una vez.
- Agrupar visualmente por los 5 clusters (con un pequeño subtítulo por cluster: "Sobre el servicio", "Sobre resultados", "Sobre nutrición", "Sobre credenciales", "Sobre logística"), no como una lista plana de 16 preguntas sueltas — ayuda a escanear y refuerza la lógica de clusters temáticos de la metodología SEO (ver arriba).
- Marcar la sección con datos estructurados `FAQPage` de schema.org (JSON-LD), con cada pregunta/respuesta de esta lista tal cual — esto ya estaba pedido en la sección 10 (notas técnicas) y es clave para que los AI overviews y buscadores puedan citar a Jhon directamente.
- No es necesario que las 16 estén abiertas ni visibles todas al cargar — mejor para SEO tenerlas en el HTML (para que se indexen) pero colapsadas visualmente por defecto.

---

## 8. Assets: lo que ya tenemos vs. lo que falta

**Ya disponible en la carpeta del proyecto** (ver estructura de carpetas en la sección 9):
- Logo (`Logo/Logo.jpeg`), ya en verde oficial — pendiente solo la versión con fondo transparente (tarea de Claude Code, no del cliente).
- 8 fotografías de Jhon en `Fotos de Jhon/` (retrato profesional, poses de tarima de competencia "Muscle Stars", fotos casuales en exteriores).
- 2 fotos de acción agregadas después, también en `Fotos de Jhon/`: `Accion_1.jpeg` (flexionando bíceps, terraza con baranda de vidrio, expresión seria/de confianza) y `Accion_2.jpeg` (manos detrás de la cabeza, sonriendo, cruzando la calle — energía más relajada/alegre). Uso sugerido: `Accion_2.jpeg` en Cómo funciona (encaja con el tono cercano/"empezar es fácil" de esa sección) y `Accion_1.jpeg` en Planes (refuerza confianza justo antes de la decisión de compra) — Claude Code puede invertir el criterio si visualmente funciona mejor al revés, es una sugerencia no una regla fija.
- 9 fotografías de transformación de clientes en `Transformaciones/` — ya llegaron. Algunas son capturas de historias de Instagram con texto superpuesto (etiquetas, menciones a @sterlingjhon) y otras son collages "antes/después" ya diseñados y listos para usar tal cual. Las capturas de historia van a necesitar un recorte/limpieza ligero (quitar barras negras y elementos de la interfaz de Instagram que no aportan) antes de integrarlas prolijamente al diseño de la sección de Resultados.
- Toda la información de credenciales, experiencia y precios (este documento ya la consolida).
- Copys de marca (frases, redes, color oficial confirmado).

**Pendiente de parte de Jhon/Brayan (no bloquea el lanzamiento del MVP):**
- Testimonios de texto o capturas de WhatsApp adicionales — Jhon los va a conseguir; mientras tanto, algunas de las fotos de `Transformaciones/` ya traen texto de agradecimiento que sirve como testimonio visual.

Con las fotos de transformación ya disponibles, la sección de Resultados puede construirse completa desde esta primera versión.

---

## 9. Organización de la carpeta y control de versiones

La misma carpeta "Jhon Sterling" (conectada tanto a Cowork como a Claude Code) es ahora el espacio de trabajo del proyecto — no hace falta duplicarla en otro lugar. Está organizada así:

- `Fotos de Jhon/` — fotos del entrenador, se usan en el sitio.
- `Logo/` — logo de marca, se usa en el sitio.
- `Transformaciones/` — fotos de resultados de clientes, se usan en el sitio.
- `Transcripciones/` — conversaciones y metodología SEO, material de referencia para redactar contenido, **no** se sube al repositorio.
- `Informacion de Jhon/` — certificados, diploma, hoja de vida y demás documentos con datos personales (cédula, teléfono, dirección). **Nunca debe subirse a GitHub.**
- `Brief_Landing_Jhon_Sterling.md` y `Proceso_Construccion_Web_Claude_Code.md` — documentación del proyecto, sí se pueden versionar.

Ya se creó un archivo `.gitignore` en la raíz de esta carpeta que excluye `Informacion de Jhon/` y `Transcripciones/` de git. Esto es importante: cuando Claude Code corra `git init` y `git add .` en esta misma carpeta, esas dos carpetas quedarán automáticamente fuera del control de versiones y nunca llegarán a GitHub, aunque físicamente sigan aquí en tu computador. Así se puede usar una sola carpeta para todo (documentos privados + código del sitio) sin riesgo de publicar por accidente los datos personales de Jhon.

Un detalle a verificar antes del primer commit: confirma con Claude Code que el `.gitignore` ya existe *antes* de correr `git add .` por primera vez — si un archivo llega a quedar incluido en un commit, sigue existiendo en el historial de git aunque después lo borres, así que es mejor prevenirlo desde el principio.

**Organización de GitHub (decidido por Brayan):** en vez de subir el repositorio a su cuenta personal de GitHub, Brayan creó una organización gratuita dedicada a sus proyectos freelance — **`Romero-Webstudio`** (`github.com/Romero-Webstudio`) — para mantener separados sus proyectos personales de los de clientes a medida que crezca su base de clientes. El repositorio de este proyecto (`jhon-sterling-landing`) se crea **dentro de esa organización**, no bajo su usuario personal.

---

## 10. Notas técnicas para Claude Code

- **Stack:** HTML/CSS/JS estático, sin framework pesado — no se requiere backend para este MVP (el "checkout" es un enlace de WhatsApp).
- **Responsive / mobile-first:** la mayoría del tráfico de un entrenador que se promociona en Instagram/TikTok va a venir de celular — priorizar esa experiencia.
- **Tipografía de los párrafos de Sobre mí:** justificados (`text-align: justify`), sin activar guiones automáticos de partición de palabras (`hyphens: auto`) — el texto ya no debe llevar guiones, ni los que había como puntuación (ver bio corregida en sección 4) ni los que un navegador podría insertar automáticamente al justificar. Si alguna línea queda con espacios muy abiertos por la justificación, es preferible eso a que aparezcan guiones.
- **Estructura de imágenes preparada para el futuro:** aunque en el MVP no hay panel de administración, conviene que las fotos de "Sobre mí" y "Resultados" no queden escritas sueltas dentro del HTML, sino referenciadas desde un archivo de datos simple (por ejemplo un JSON con rutas de imagen y texto alternativo). Esto no añade complejidad ahora, pero deja el terreno listo para conectar en una fase 2 un panel tipo **Decap CMS** (gratuito, basado en Git, se integra con GitHub sin backend adicional) que le permitiría a Jhon subir o quitar sus propias fotos sin ayuda técnica.
- **Repositorio y control de versiones:** todo el proyecto se sube a un repositorio de GitHub desde el inicio, con commits a medida que se construye — así queda trackeado como pidió Brayan.
- **Despliegue:** conectar el repositorio de GitHub a Vercel para despliegue automático en cada push, con URL de vista previa gratuita para que Jhon revise el borrador antes de comprar el dominio. Cuando el dominio esté listo, se conecta desde el panel de Vercel sin tocar código.
- **Botones de WhatsApp:** usar enlaces `https://wa.me/<numero>?text=<mensaje codificado>` para que cada plan abra WhatsApp con el mensaje correspondiente ya escrito.
- **SEO técnico básico:** metadatos (title, description) enfocados en "entrenador personal Yumbo/Cali", datos estructurados tipo `LocalBusiness`/`Person` si es sencillo de implementar, y la sección FAQ marcada con el schema `FAQPage` de schema.org para ayudar a que motores de búsqueda e IA la interpreten correctamente.

---

## 11. Fases del proyecto

**Fase 1 (ahora — MVP):** landing de una página con las secciones descritas en el punto 5, FAQ SEO, despliegue en GitHub + Vercel con URL de vista previa, sin dominio propio todavía.

**Fase 2 (después de validar con Jhon):** dominio propio conectado, sección/tienda de guías temáticas tipo "Guía para mejorar tu pectoral en 3 meses" (mesociclo de 3 meses, ~$90.000, con rutina, pesos y videos), y panel de autogestión de imágenes (Decap CMS) para que Jhon actualice sus propias fotos.

---

## 12. Próximo paso

Con este brief, el siguiente paso es abrir Claude Code en esta misma carpeta ("Jhon Sterling"), darle este documento como contexto inicial (igual que se hizo con `Proceso_Construccion_Web_Claude_Code.md` en el proyecto anterior), y empezar por la sección Hero + Sobre mí para validar el estilo visual antes de construir el resto de secciones. El primer commit debe hacerse después de verificar que el `.gitignore` ya está en la raíz de la carpeta.
