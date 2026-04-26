# FullStackOpen - Parte 1: Introducción a React

## Contexto del Proyecto

Esta sección contiene las soluciones a los ejercicios de la **Parte 1** del curso FullStackOpen de la Universidad de Helsinki. El objetivo principal de este módulo es familiarizarse con los fundamentos de **React**, comprendiendo la arquitectura basada en componentes, el paso de datos y la interactividad mediante la gestión del estado.

## Contenido de la Parte 1

Se han desarrollado tres aplicaciones independientes a lo largo de esta parte:

* **Courseinfo (Información del curso):** Una aplicación que muestra información básica de un curso y sus módulos. Se enfoca en la refactorización de un componente monolítico en múltiples componentes más pequeños y reutilizables (`Header`, `Content`, `Part`, `Total`), comunicándolos entre sí mediante `props`.
* **Unicafe:** Una aplicación para recolectar el *feedback* de los clientes de una cafetería (Bueno, Neutral, Malo). Implementa el hook `useState` para rastrear las interacciones del usuario, calcula estadísticas en tiempo real (promedio y porcentaje de comentarios positivos) y utiliza renderizado condicional para mostrar los resultados solo cuando hay datos.
* **Anecdotes (Anécdotas):** Una aplicación que muestra anécdotas de ingeniería de software al azar y permite a los usuarios votar por sus favoritas. Combina el manejo de estado simple (índice actual) con estructuras de datos más complejas (un arreglo para almacenar los votos de cada anécdota), demostrando cómo encontrar el valor máximo en un estado dinámico.

---

## Reflexión y Desafíos Técnicos Superados

De acuerdo a lo requerido por el curso, aquí detallo mi experiencia con esta primera parte:

**Lo que he aprendido:**
* Consolidé las bases del desarrollo con React y la sintaxis JSX.
* Comprendí el flujo unidireccional de datos en React: cómo la información fluye desde los componentes padre hacia los hijos a través de las *props*.
* Aprendí a darle "memoria" e interactividad a los componentes funcionales utilizando el hook `useState`.
* Entendí la importancia de extraer partes de la interfaz en componentes separados para mantener un código limpio y mantenible (como los componentes `Button` y `StatisticLine`).

**Desafíos técnicos superados:**
* **La inmutabilidad del estado:** El mayor desafío inicial fue interiorizar que el estado en React nunca debe mutarse directamente. En la aplicación *Anecdotes*, para actualizar los votos de una anécdota específica, tuve que aprender a crear una copia del arreglo utilizando el operador de propagación (*spread syntax* `...`), modificar la copia y luego pasarla a la función actualizadora del estado.
* **Renderizado condicional:** En *Unicafe*, estructurar correctamente la interfaz para que mostrara el mensaje "No feedback given" cuando el estado inicial era cero requirió pensar lógicamente en cómo y cuándo el componente debe retornar un JSX u otro.
* **Lógica matemática en el renderizado:** Calcular la anécdota con más votos implicó utilizar `Math.max(...votes)` y `indexOf()` para sincronizar el estado del arreglo con la vista, lo cual fue un excelente ejercicio de lógica en JavaScript dentro del ecosistema de React.

---

## Herramientas Utilizadas

* **Librería principal:** React (Functional Components)
* **Gestión de estado:** Hooks (`useState`)
* **Lenguaje:** JavaScript (ES6+)

---

## Ejecución de los Proyectos

Cada proyecto es independiente. Para ejecutar cualquiera de las aplicaciones en tu entorno local, navega a la carpeta correspondiente e instala las dependencias:

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo (Vite)
npm run dev
