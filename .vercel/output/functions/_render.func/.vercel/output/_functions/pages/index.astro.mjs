import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderHead, b as renderComponent, e as renderSlot, f as createAstro, g as addAttribute } from '../chunks/astro/server_CyU9JrvL.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-screen flex justify-between items-center py-4 px-4 md:px-60 bg-primary shadow-md z-50"> <!-- Logo / Título --> <h1 class="text-medium font-bold text-secondary">
A<span class="text-dark">lexis</span> R<span class="text-dark">oldán</span> </h1> <!-- Botón de menú hamburguesa para móviles --> <div class="block md:hidden"> <button id="menu-toggle" class="focus:outline-none"> <svg class="w-8 h-8 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> <!-- Navegación --> <nav id="menu" class="hidden md:block absolute md:static top-16 left-0 md:top-auto md:left-auto w-full md:w-auto bg-primary md:bg-transparent shadow-md md:shadow-none"> <ul class="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 text-normal px-4 md:px-0 py-4 md:py-0"> <li> <a href="#about" class="text-dark hover:text-secondary transition-colors duration-300">¿Quién soy?</a> </li> <li> <a href="#experience" class="text-dark hover:text-secondary transition-colors duration-300">Experiencia</a> </li> <li> <a href="#skills" class="text-dark hover:text-secondary transition-colors duration-300">Skills</a> </li> <li> <a href="mailto:alexisroldandanemi@gmail.com" class="bg-secondary text-white px-4 py-2 rounded hover:bg-dark transition-colors duration-300">¡Contáctame!</a> </li> </ul> </nav> </header> <!-- JavaScript para manejar el menú hamburguesa --> `;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/Header.astro", void 0);

const $$Astro$h = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Portafolio de Alexis Roldán: Desarrollador frontend"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="stylesheet" href="/src/global.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-primary"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/layouts/Layout.astro", void 0);

const $$Astro$g = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class + "hover:", "class")} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#454545"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Linkedin.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="md:text-right my-10 md:mb-20 md:mt-28 bg-primary"> <div class="flex flex-col md:flex-row items-center justify-center text-center"> <div class="mb-8 md:mb-0 md:mr-8 lg:mr-12 md:w-auto"> <img src="/public/images/perfil.png" alt="Alexis Roldán" class="border-4 border-primary w-60 md:w-full max-w-xs md:max-w-sm object-cover mt-12 md:mt-0"> </div> <div class="flex flex-col items-center md:items-end w-full md:w-auto"> <p class="text-dark text-normal mb-2 md:mb-4">¡Hola! Soy Alexis Roldán</p> <h2 class="text-large font-bold text-end">
Desarrollador <span class="text-secondary">Frontend</span> </h2> <p class="mt-4 text-normal max-w-md text-dark">
Enfocado en seguir aprendiendo, escribir código limpio y hacer
        aplicaciones funcionales.
</p> <div class="flex flex-col md:flex-row items-center md:items-center mt-6 gap-10 justify-center"> <a href="https://www.linkedin.com/in/alexis-rold%C3%A1n-s%C3%A1nchez-74b918241/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "w-10 h-10 hover:ba" })} </a> <button class="px-6 py-2 border-2 border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-colors duration-300 text-normal">
Descargar CV
</button> </div> </div> </div> <div class="flex flex-col justify-center items-center"> <a href="#about" class="flex flex-col items-center"> <button class="animate-bounce bg-secondary text-white rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 hover:translate-y-1 mt-10"> <div class="md:text-3xl transform transition-transform duration-300 text-s">
↓
</div> </button> <div class="text-normal mt-2">Conoce más</div> </a> </div> </section>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/Hero.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="my-10 md:my-20 px-4 md:px-12 lg:px-32 bg-primary"> <!-- Título de la sección --> <h3 class="text-large font-bold mb-6 text-dark">Sobre mí.</h3> <!-- Contenedor de dos columnas --> <div class="flex flex-col md:flex-row items-center md:items-center justify-center"> <!-- Columna del texto --> <div class="md:w-1/2 mb-8 md:mb-0 md:mr-8"> <p class="text-normal leading-7 text-dark mb-4">
¡Hola!, Soy un desarrollador web especializado en frontend con formación
        en Ingeniería en Computación. Mi enfoque está en crear soluciones
        centradas en el usuario, combinando funcionalidad intuitiva con un buen
        diseño visual
</p> <p class="text-normal leading-7 text-dark mb-4">
Actualmente, estoy ampliando mis habilidades hacia el backend, buscando
        ser Fullstack, nunca parando de aprender.
</p> <p class="text-normal leading-7 text-dark">
Tengo la capacidad para identificar y resolver problemas de
        manera eficiente, siempre orientado a la mejora continua y al logro de
        resultados sobresalientes, tanto en equipo como individualmente.
</p> </div> <!-- Columna de la imagen --> <div class="md:w-1/2 flex justify-center items-center"> <img src="/public/images/aboutImage.png" alt="Aplicaciones y Finanzas" class="w-60 md:w-80 lg:w-96 object-contain"> </div> </div> <!-- Línea decorativa inferior --> <div class="border-t-4 border-secondary mt-8"></div> </section>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/AboutMe.astro", void 0);

const $$Astro$f = createAstro();
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const { id, role, company, date, isActive } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`experience-content ${isActive ? "" : "hidden"} px-5 ml-5`, "class")}> <h4 class="text-medium font-bold"> ${role} - <span class="text-secondary">${company}</span> </h4> <p class="text-gray-600 text-normal">${date}</p> <p class="text-normal text-dark leading-7 mb-4 mt-4"> ${renderSlot($$result, $$slots["default"])} </p> </div>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/experience/ExperienceCard.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="my-14 md:my-28 px-4 md:px-8 lg:px-32 bg-primary"> <!-- Título de la sección --> <h3 class="text-large md:text-large font-semibold mb-6 text-dark">
Experiencia.
</h3> <!-- Contenedor de pestañas y contenido --> <div class="flex flex-col md:flex-row"> <!-- Pestañas Verticales --> <div class="flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-dark mb-6 md:mb-0 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-dark"> <button class="tab-button text-left px-4 py-8 font-bold hover:text-secondary border-b-2 md:border-b-0 md:border-l-4 border-secondary text-secondary transition-all duration-300 text-medium" data-tab="necsus">
Necsus
</button> <button class="tab-button text-left px-4 py-8 text-dark font-bold hover:text-secondary border-b-2 md:border-b-0 md:border-l-4 border-transparent hover:border-secondary transition-all duration-300 text-medium" data-tab="grupo500">
Grupo 500 Noches
</button> <button class="tab-button text-left px-4 py-8 text-dark font-bold hover:text-secondary border-b-2 md:border-b-0 md:border-l-4 border-transparent hover:border-secondary transition-all duration-300 text-medium" data-tab="vidassistence">
VIDASSISTENCE
</button> <button class="tab-button text-left px-4 py-8 text-dark font-bold hover:text-secondary border-b-2 md:border-b-0 md:border-l-4 border-transparent hover:border-secondary transition-all duration-300 text-medium" data-tab="imass">
IMASS
</button> </div> <!-- Contenido de las Experiencias --> <div class="tab-content flex-1"> ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "id": "necsus", "role": "Desarrollador Frontend Jr.", "company": "Necsus", "date": "Abril 2024 - Actualidad", "isActive": true }, { "default": ($$result2) => renderTemplate`  <p class="text-normal">
En mi rol como desarrollador frontend en Necsus, he sido responsable
          de la resolución de issues y la depuración de código para mejorar la
          funcionalidad y rendimiento del sistema. He trabajado activamente en
          la identificación de errores y en su resolución, lo que resultó en una
          plataforma más estable y un aumento significativo en el rendimiento
          general del sistema.
</p> <p class="text-normal my-3">Técnologías usadas:</p> <ol class="text-normal flex gap-10 md:gap-16"> <div> <li>React</li> <li>HTML</li> <li>CSS</li> </div> <div> <li>TypeScript</li> <li>Gitlab</li> <li>SASS</li> </div> </ol> ` })} ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "id": "grupo500", "role": "Desarrollador Frontend", "company": "Rosoft", "date": "Enero 2024 - Abril 2024", "isActive": false }, { "default": ($$result2) => renderTemplate`  <p class="text-normal">
Creé un sitio funcional, atractivo y fácil de navegar, optimizado para
          SEO y con tiempos de carga significativamente reducidos gracias a la
          optimización de imágenes y scripts.
</p> <p class="text-normal my-3">Técnologías usadas:</p> <ol class="text-normal flex gap-10"> <div> <li>Nexy Js</li> <li>HTML</li> <li>CSS</li> </div> <div> <li>TypeScript</li> <li>Gitlab</li> <li>Tailwind CSS</li> </div> </ol> ` })} ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "id": "vidassistence", "role": "Desarrollador Web", "company": "Rosoft", "date": "Septiembre 2023 - Diciembre 2023", "isActive": false }, { "default": ($$result2) => renderTemplate`  <p class="text-normal">
Me encargué de liderar el desarrollo de una aplicación Android para la
          generación y administración de reportes médicos, lo que mejoró
          significativamente los tiempos de respuesta y seguimiento de pacientes
          por parte del equipo médico. Esta aplicación permitió a los usuarios
          finales generar reportes en tiempo real
</p> <p class="text-normal my-3">Técnologías usadas:</p> <ol class="text-normal flex gap-10"> <div> <li>React</li> <li>React Native</li> <li>CSS</li> </div> <div> <li>JavaScript</li> <li>Github</li> <li>Bootstrap</li> </div> </ol> ` })} ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "id": "imass", "role": "Becario como Desarrollador Frontend", "company": "IMASS", "date": "Marzo 2023 - Octubre 2023", "isActive": false }, { "default": ($$result2) => renderTemplate` <p class="text-normal">
En IMASS, fui parte del equipo encargado del desarrollo y diseño de
          una plataforma web para la administración de pólizas colectivas. Este
          sistema permitía a los usuarios gestionar pólizas de seguros de manera
          eficiente y segura. Trabajé en el diseño y desarrollo de la página
          "Seguros con Causa".
</p> <p class="text-normal my-3">Técnologías usadas:</p> <ol class="text-normal flex gap-10"> <div> <li>React</li> <li>HTML</li> <li>CSS</li> </div> <div> <li>Bootstrap</li> <li>Gitlab</li> <li>JavaScript</li> </div> </ol> ` })} </div> </div> <div class="border-t-4 border-secondary mt-8"></div> </section> `;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/Experience.astro", void 0);

const $$Astro$e = createAstro();
const $$JavaScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$JavaScript;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/JavaScript.astro", void 0);

const $$Astro$d = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/React.astro", void 0);

const $$Astro$c = createAstro();
const $$HTML = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$HTML;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/HTML.astro", void 0);

const $$Astro$b = createAstro();
const $$CSS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CSS;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/CSS.astro", void 0);

const $$Astro$a = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Tailwind.astro", void 0);

const $$Astro$9 = createAstro();
const $$Bootstrap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Bootstrap.astro", void 0);

const $$Astro$8 = createAstro();
const $$Next = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Next;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"> <circle cx="90" cy="90" r="90" fill="black"></circle> </mask> <g mask="url(#mask0_408_139)"> <circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"></circle> <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path> <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"></rect> </g> <defs> <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Next.astro", void 0);

const $$Astro$7 = createAstro();
const $$Java = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Java;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"> <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"></path> <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"></path> <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"></path> <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"></path> <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Java.astro", void 0);

const $$Astro$6 = createAstro();
const $$Python = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Python;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 64 64"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"></path><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"></path><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"></stop><stop offset="1" stop-color="#FFC331"></stop></linearGradient></defs></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Python.astro", void 0);

const $$Astro$5 = createAstro();
const $$Postgresql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Postgresql;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264"> <path d="M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26"></path> <path d="M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13" fill="#336791"></path> <path d="M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3" fill="#FFF"></path> <path d="M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z" fill="#FFF"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Postgresql.astro", void 0);

const $$Astro$4 = createAstro();
const $$MongoDb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MongoDb;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/MongoDb.astro", void 0);

const $$Astro$3 = createAstro();
const $$Figma = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Figma;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="54" height="80" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_912_3)"> <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"></path> <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"></path> <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"></path> <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"></path> <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"></path> </g> <defs> <clipPath id="clip0_912_3"> <rect width="53.3333" height="80" fill="white"></rect> </clipPath> </defs> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Figma.astro", void 0);

const $$Adobexd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 256 256" width="60" height="60"> <path fill="#470137" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"></path> <path fill="#ff61f6" d="m126.2 61.5-30 49.5 32 52.5c.2.4.3.8.2 1.2-.1.4-.5.1-1.1.2h-22.9c-1.6 0-2.7-.1-3.4-1.1-2.1-4.2-4.3-8.3-6.4-12.5-2.1-4.1-4.4-8.3-6.8-12.6-2.4-4.3-4.8-8.6-7.2-13h-.2c-2.1 4.3-4.4 8.6-6.7 12.9-2.3 4.3-4.6 8.6-6.8 12.8-2.3 4.2-4.6 8.5-6.9 12.6-.4 1-1.2 1.1-2.3 1.1h-22c-.4 0-.7.2-.7-.3-.1-.4 0-.8.2-1.1l31.1-51L36 61.4c-.3-.4-.4-.8-.2-1 .2-.3.6-.4 1-.4h22.7c.5 0 1 .1 1.4.2.4.2.7.5 1 .9 1.9 4.3 4.1 8.6 6.4 12.9 2.4 4.3 4.7 8.5 7.2 12.7 2.4 4.2 4.6 8.4 6.7 12.7h.2c2.1-4.4 4.3-8.7 6.5-12.9 2.2-4.2 4.5-8.4 6.8-12.6 2.3-4.2 4.5-8.5 6.7-12.6.1-.4.3-.8.6-1 .4-.2.8-.3 1.3-.2h21.1c.5-.1 1 .2 1.1.7.1.1-.1.5-.3.7zM172.4 167c-7.4.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8.5 0 1.2 0 2.1.1.9.1 1.9.1 3.1.2V52.4c0-.7.3-1.1 1-1.1h20.3c.5-.1.9.3 1 .7v95.4c0 1.8.1 3.8.2 6 .2 2.1.3 4.1.4 5.8 0 .7-.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5.1.9-10.2 1.4-15.4 1.4zm9.8-20v-44c-.9-.2-1.8-.4-2.7-.5-1.1-.1-2.2-.2-3.3-.2-3.9 0-7.8.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-.1 3.5.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7.9 5.5 1.3 8.3 1.3 1.5 0 2.9-.1 4.2-.2 1.3.1 2.4-.1 3.6-.5z"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Adobexd.astro", void 0);

const $$Astro$2 = createAstro();
const $$Gitlab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Gitlab;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="tanukiHomeDesktop" width="60" height="60"> <path d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z" fill="#E24329"></path> <path d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z" fill="#FC6D26"></path> <path d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z" fill="#FCA326"></path> <path d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z" fill="#FC6D26"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Gitlab.astro", void 0);

const $$Astro$1 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 250" width="256" height="250" fill="#fff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Github.astro", void 0);

const $$Astro = createAstro();
const $$Typescript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Typescript;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/icons/Typescript.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    // Frontend
    { name: "HTML-5", Component: $$HTML },
    { name: "CSS", Component: $$CSS },
    { name: "JavaScript", Component: $$JavaScript },
    { name: "TypeScript", Component: $$Typescript },
    { name: "React", Component: $$React },
    { name: "React Native", Component: $$React },
    { name: "Next", Component: $$Next },
    { name: "Microfrontend", Component: $$React },
    { name: "Tailwind", Component: $$Tailwind },
    { name: "Bootstrap", Component: $$Bootstrap },
    // Backend
    { name: "Java", Component: $$Java },
    { name: "Python", Component: $$Python },
    // Bases de Datos
    { name: "Postgresql", Component: $$Postgresql },
    { name: "MongoDb", Component: $$MongoDb },
    // DevOps
    { name: "GitHub", Component: $$Github },
    { name: "GitLab", Component: $$Gitlab },
    // Herramientas de Diseño
    { name: "Figma", Component: $$Figma },
    { name: "AdobeXd", Component: $$Adobexd }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="my-14 md:my-28 px-4 md:px-8 lg:px-32"> <h2 class="text-large font-bold text-gray-800 mb-6">Skills.</h2> <!-- Contenedor principal --> <div class="border-2 border-secondary rounded-xl p-8"> <!-- Grid de habilidades --> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"> ${skills.map((skill) => {
    const IconComponent = skill.Component;
    return renderTemplate`<div class="flex flex-col items-center">  ${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-16 h-16 mb-2" })} <p class="text-black-700 text-sm">${skill.name}</p> </div>`;
  })} </div> </div> </section>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/Skills.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary py-8 mt-16"> <div class="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-8"> <!-- Sección de información de contacto --> <div class="text-center md:text-left mb-8 md:mb-0"> <h2 class="text-large font-bold text-dark mb-2"> <span class="text-secondary">A</span>lexis <span class="text-secondary">R</span>oldán
</h2> <p class="text-dark"> <a href="mailto:alexisroldandanemi@gmail.com" class="hover:text-secondary transition-colors duration-300 text-normal">
alexisroldandanemi@gmail.com
</a> </p> <!-- Links a redes sociales --> <div class="flex justify-center md:justify-start mt-4 space-x-4"> <a href="https://www.linkedin.com/in/alexis-roldán-sánchez-74b918241" target="_blank" rel="noopener noreferrer" class="text-dark transition-colors duration-300"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "w-6 h-6 fill-current" })} </a> <a href="https://github.com/alexisroldancaloom" target="_blank" rel="noopener noreferrer" class="text-dark transition-colors duration-300"> ${renderComponent($$result, "Github", $$Github, { "class": "w-6 h-6 fill-current" })} </a> </div> </div> <!-- Sección de derechos de autor --> <div class="text-center mb-8 md:mb-0 md:text-left"> <p class="text-dark text-normal">&copy; Alexis Roldán, 2024</p> </div> <!-- Mapa del sitio --> <div class="text-center md:text-right"> <h3 class="text-medium font-bold text-dark mb-2">Mapa del Sitio</h3> <ul class="text-dark space-y-1 text-normal"> <div class="flex gap-10"> <div> <li> <a href="#hero" class="hover:text-secondary transition-colors duration-300">Presentación</a> </li> <li> <a href="#about" class="hover:text-secondary transition-colors duration-300">Sobre Mí</a> </li> </div> <div> <li> <a href="#experience" class="hover:text-secondary transition-colors duration-300">Experiencia</a> </li> <li> <a href="#skills" class="hover:text-secondary transition-colors duration-300">Habilidades</a> </li> </div> <div> <li> <a href="#contact" class="hover:text-secondary transition-colors duration-300">Contacto</a> </li> </div> </div> </ul> </div> </div> </footer>`;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alexis Rold\xE1n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, { "class": "fade-in-up" })} ${renderComponent($$result2, "Experience", $$Experience, { "class": "fade-in-up" })} ${renderComponent($$result2, "Skills", $$Skills, { "class": "fade-in-up" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/pages/index.astro", void 0);

const $$file = "C:/Users/AlexisRoldan/Desktop/q/portfolioAlexis/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
