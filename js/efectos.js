// Inicializar WOW.js para animaciones al hacer scroll
new WOW().init();

/**
 * Aplica un efecto de typing a un elemento.
 * @param {string} selector - Selector del elemento al que se aplicará el efecto.
 * @param {number} velocidad - Velocidad en milisegundos entre caracteres.
 */
function aplicarEfectoTyping(selector, velocidad = 10) {
  const elemento = document.querySelector(selector);

  // Verificar si el elemento existe
  if (!elemento) {
    return; //no se aplica el efecto sí no hay ese elemento
  }

  const texto = elemento.textContent;
  elemento.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(typeWriter, velocidad);
    }
  }

  typeWriter();
}

// Función para animar una sección con efectos más suaves y variados
function animateSection(sectionId, index) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Configuración inicial
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Aplicamos un retraso escalonado basado en el índice
        const delay = index * 100; // 100ms de retraso entre cada sección
        setTimeout(() => {
          requestAnimationFrame(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
          });
        }, delay);
        observer.unobserve(section);
      }
    });
  }, { 
    threshold: 0.15, 
    rootMargin: "0px 0px -10% 0px" // Inicia la animación un poco antes
  });

  observer.observe(section);
}

// Aplicar el efecto de typing al título inicial
aplicarEfectoTyping('#titulo_inicial', 100);
aplicarEfectoTyping('#titulo_nosotros', 100);
aplicarEfectoTyping('#titulo_servicios', 100);

// Aplicar animaciones con efecto de cascada
document.addEventListener("DOMContentLoaded", () => {

  // Animar elementos por separado
  const primera_imagen = document.getElementById("primera_imagen");
  const segunda_imagen = document.getElementById("segunda_imagen");
  const titulo_inicial2 = document.getElementById("titulo_inicial2");
  const subtitulo_inicial = document.getElementById("subtitulo_inicial");
  const subtitulo_inicial2 = document.getElementById("subtitulo_inicial2");
  const boton_contactanos = document.getElementById("boton_contactanos"); 
  const parrafo_nosotros = document.getElementById("parrafo_nosotros");
  const titulo_pilares = document.getElementById("titulo_pilares");
  const carrusel_pilares = document.getElementById("carrusel_pilares");
  const titulos_proyectos = document.getElementById("titulos_proyectos");
  const parrafo_proyectos = document.getElementById("parrafo_proyectos");
  const tercera_imagen = document.getElementById("tercera_imagen");
  const titulo_asesoria = document.getElementById("titulo_asesoria");
  const contenido_consultoria = document.getElementById("contenido_consultoria");
  const contenido_capacitacion = document.getElementById("contenido_capacitacion");
  const titulo_clientes = document.getElementById("titulo_clientes");
  const parrafo_clientes = document.getElementById("parrafo_clientes");
  const carrusel_clientes = document.getElementById("carrusel_clientes");
  const titulo_contactanos = document.getElementById("titulo_contactanos");
  if (primera_imagen) {
    animateSection("primera_imagen", 6); // Índice 6 para la imagen
  }
  if (segunda_imagen) {
    animateSection("segunda_imagen", 4); // Índice 4 para la imagen
  }
  if (titulo_inicial2) {
    animateSection("titulo_inicial2", 5); // Índice 5 para el título
  }
  if (subtitulo_inicial) {
    animateSection("subtitulo_inicial", 6); // Índice 6 para el subtítulo
  }
  if (subtitulo_inicial2) {
    animateSection("subtitulo_inicial2", 7); // Índice 7 para el subtítulo
  }
  if (boton_contactanos) {
    animateSection("boton_contactanos", 7); // Índice 7 para el subtítulo
  }
  if (parrafo_nosotros) {
    animateSection("parrafo_nosotros", 7); // Índice 7 para el parrafo
  }
  if (titulo_pilares) {
    animateSection("titulo_pilares", 5); // Índice 5 para el título
  }
  if (carrusel_pilares) {
    animateSection("carrusel_pilares", 5); // Índice 5 para la seccion
  }
  if (titulos_proyectos) {
    animateSection("titulos_proyectos", 5); // Índice 5 para el título
  }
  if (parrafo_proyectos) {
    animateSection("parrafo_proyectos", 5); // Índice 5 para el título
  }
  if (tercera_imagen) {
    animateSection("tercera_imagen", 7); // Índice 7 para la imagen
  }
  if (titulo_asesoria) 
  {
    animateSection("titulo_asesoria", 7); // Índice 7 para el título
    const contenido_asesoria = document.getElementById('contenido_asesoria');
    contenido_asesoria.classList.add('animate__animated', 'animate__bounceIn', 'animate__delay-1s');
  }
  if (contenido_consultoria) 
  {
    animateSection("contenido_consultoria", 8); // Índice 8 para el contenido
  }
  if (contenido_capacitacion) 
    {
    animateSection("contenido_capacitacion", 9); // Índice 9 para el contenido
  }
  if (titulo_clientes) 
  {
    animateSection("titulo_clientes", 5); // Índice 5 para el título
  }
  if (parrafo_clientes) 
  {
    animateSection("parrafo_clientes", 6); // Índice 6 para el parrafo
  }
  if (carrusel_clientes) 
  {
    animateSection("carrusel_clientes", 7); // Índice 7 para el carrusel
  }
  if (titulo_contactanos) 
  {
    animateSection("titulo_contactanos", 5); // Índice 5 para el título
  }

});