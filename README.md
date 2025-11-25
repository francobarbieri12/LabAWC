# Laboratorio de Aplicaciones Web Cliente: Proyecto E-commerce

Este proyecto es una aplicación web de E-commerce desarrollada utilizando **JavaScript (DOM, Fetch, Local Storage)**, HTML5 y CSS3, diseñada para cumplir con estándares de **responsividad, experiencia de usuario (UX)** y **accesibilidad**.

La aplicación consume datos de productos a través de una API externa para simular un catálogo real de productos.

---

## Tecnologías Utilizadas

| Categoría | Tecnología | Uso | Recurso Opcional/Recomendado |
| :--- | :--- | :--- | :--- |
| **Estructura** | HTML5 | Estructuración semántica del contenido. | |
| **Estilos** | CSS3 | Estilizado, layout y diseño visual. | [Bootstrap 5](https://getbootstrap.com/) |
| **Lógica** | JavaScript (Vanilla) | Manipulación del DOM, gestión de eventos y lógica de la aplicación. | |
| **Datos** | Fetch API | Realización de peticiones HTTP para obtener datos de productos. | |
| **Estado** | Local Storage | Persistencia de datos (ej. carrito de compras, favoritos) en el navegador. | |
| **API** | **Fake Store API** | Fuente de datos para el catálogo de productos. | [https://fakestoreapi.com/](https://fakestoreapi.com/) |

---

## Requisitos y Enfoque del Proyecto

La app debe cumplir con los siguiente requisitos:

### I. Diseño Responsive

La aplicación debe garantizar una experiencia de visualización y uso óptima en cualquier dispositivo (móviles, tabletas y escritorios).

* **Objetivo:** Adaptar el diseño (layout, tipografía, imágenes) automáticamente al tamaño de la pantalla.
* **Herramienta de Prueba:** [Responsively App](https://responsively.app/)

### II. Experiencia de Usuario (UX)

El diseño debe ser consistente en toda la aplicación, utilizando una paleta de colores,
tipografía y elementos visuales coherentes

* **Consistencia:** Aplicación de una paleta de colores, tipografía y espaciado consistentes en toda la interfaz.
* **Recursos Clave:**
    * **Tipografía:** [Google Fonts](https://fonts.google.com/)
    * **Elementos Interactivos:** Buenas prácticas en el diseño de botones ([Balsamiq](https://balsamiq.com/learn/articles/button-design-best-practices/), [Make it Clear](https://makeitclear.com/ux-ui-tips-a-guide-to-creating-buttons/)).
    * **Notificaciones:** Uso de modales y alertas agradables ([SweetAlert2](https://sweetalert2.github.io/)).
    * **Inspiración/Componentes:** [Dribbble E-commerce](https://dribbble.com/search/e-commerce), [Swiper Demos](https://swiperjs.com/demos) (para carruseles, si aplica).

### III. Políticas de Accesibilidad

Utilizar etiquetas semánticas de HTML 5 para el estructurado de la página.

* **Estructuración Semántica:** Uso obligatorio de etiquetas HTML5 como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, etc.
* **Recursos:**
    * [7 Claves de Accesibilidad Web](https://accesibilidadenlaweb.com.ar/7claves/)
    * [Referencia de Etiquetas HTML](https://www.w3schools.com/tags/tag_html.asp)

## Distribución de Tareas

El trabajo se realizó de forma grupal, distribuyendo las tareas según las siguientes responsabilidades:

#### Kalil Fernández @Kalilalee
- **Responsable de los puntos 1 a 3**
- Estructuración inicial del proyecto
- Implementación del listado de productos
- Desarrollo del modal de detalle de cada producto

#### Franco Barbieri @francobarbieri12
- **Responsable de los puntos 4 a 6**
- Implementación del carrito en el sidebar
- Gestión del localStorage para el carrito
- Notificación para gestionar productos en el carrito

#### Nicolás Ludwig @nludw1g
- **Responsable de los puntos 7 a 9**
- Lógica de búsqueda de los productos
- Implementación de finalizar compra y notificación
- Eliminación total del carrito