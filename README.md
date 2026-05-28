 # Proyecto

# Informe resumido — ClassUP

---

## 1. Resumen ejecutivo

La plataforma digital que conecta docentes y estudiantes universitarios con alumnos de niveles educativos inferiores para ofrecer clases particulares a distancia de forma accesible y verificada.

La propuesta genera valor para ambas partes: el tutor obtiene ingresos reales por sus conocimientos, y el alumno accede a ayuda de calidad verificada a precios muy por debajo del mercado informal. La plataforma monetiza mediante una comisión del 15% por sesión completada.

---

## 2. Solución propuesta

ClassUP opera como un marketplace de conocimiento entre pares donde la confianza está garantizada por verificación y calificaciones. El flujo es simple: el tutor se registra y verifica sus materias, el alumno busca y reserva una sesión, la plataforma gestiona el pago y ambos se califican al finalizar.

**Propuesta de valor:**

| Para el tutor | Para el alumno |
|---|---|
| Ingresos reales por conocimientos que ya tiene | Acceso a tutores verificados y calificados |
| Perfil profesional con historial de clases | Precios hasta un 60% menores al mercado informal |
| Pagos seguros y sin intermediarios incómodos | Matching por materia, nivel y disponibilidad horaria |
| Certificado de experiencia docente descargable | Preparación específica para ingreso universitario |

---

## 3. Objetivos del proyecto

**Objetivo general:** desarrollar una plataforma digital que conecte tutores estudiantiles verificados con alumnos que necesitan apoyo académico, reduciendo la brecha educativa y generando una fuente de ingresos accesible para jóvenes universitarios en Argentina.

**Objetivos específicos:**

1. Diseñar un sistema de verificación de materias que garantice la idoneidad del tutor sin credenciales costosas.
2. Crear un motor de matching por materia, nivel, precio, modalidad y disponibilidad horaria.
3. Integrar un sistema de pagos seguros que elimine la informalidad y proteja a ambas partes.
4. Implementar un sistema de calificaciones público y transparente que genere confianza.
5. Diseñar una sección específica para la preparación de ingresos universitarios (CBC, ingresatorios).
6. Garantizar una experiencia simple, accesible desde cualquier dispositivo móvil básico.

---

## 4. Funcionalidades principales

**Módulo Tutor:** registro y perfil verificado mediante constancia de materias aprobadas, gestión de disponibilidad con calendario integrado, historial de sesiones e ingresos, y cobro automático 24 horas después de cada sesión confirmada.

**Módulo Alumno:** búsqueda con filtros por materia, nivel, precio y modalidad; acceso al perfil completo del tutor antes de reservar; reserva con pago seguro integrado vía MercadoPago; calificación post-sesión pública; y sección especial de preparación para ingreso universitario.

**Módulo Administración:** panel de moderación de perfiles y verificación de documentación, dashboard de métricas (sesiones, ingresos, retención) y sistema de soporte para disputas.

---

## 5. Método de uso

**Flujo del tutor:**
1. Registro con email o Google, selección del rol "Tutor" y completado del perfil académico.
2. Carga de constancia de materias aprobadas para verificación en 24 a 48 horas.
3. Configuración de materias ofrecidas, precio por hora y disponibilidad semanal.
4. El perfil aparece en los resultados de búsqueda de alumnos que necesitan esa materia.
5. Recibe la notificación de reserva, confirma, dicta la clase y cobra automáticamente.

**Flujo del alumno:**
1. Registro con email o Google y selección del rol "Alumno".
2. Búsqueda por materia, nivel educativo, precio y modalidad preferida.
3. Revisión de perfiles disponibles con calificaciones, precios y disponibilidad.
4. Reserva de horario y pago desde la app mediante MercadoPago.
5. Toma la clase y califica al tutor al finalizar la sesión.

---

## 6. Stack tecnológico

| Capa | Tecnología | Justificación |
|---|---|---|
| Frontend | React + React Router | Componentes reutilizables, SPA fluida y responsive |
| Backend | Django + DRF | API REST robusta, ORM potente, autenticación JWT |
| Base de datos | PostgreSQL | Relacional, escalable, ideal para marketplaces |
| Pagos | MercadoPago SDK | El más adoptado en Argentina, sin fricción local |
| Control de versiones | Git + GitHub | Colaboración en equipo y CI/CD con GitHub Actions |
| Contenedores | Docker | Entorno reproducible, fácil de demostrar y desplegar |
| Documentación API | Swagger / drf-spectacular | API autodocumentada, profesional y evaluable |
| Almacenamiento | Cloudinary | Fotos de perfil y documentos de verificación |
