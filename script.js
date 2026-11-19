
const deportes = [
  {
    nombre: "Fútbol",
    categoria: "equipo",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    descripcion: "Deporte de equipo en el que los participantes buscan marcar goles en la portería contraria.",
    actividades: [
      "Pases y control del balón",
      "Entrenamiento físico",
      "Coordinación y estrategia",
      "Partidos de práctica"
    ],
    requisitos: [
      "Ropa deportiva",
      "Ser estudiante del CBTis 227",
      "Respetar las reglas y al entrenador"
    ],
    horario: "Lunes y miércoles, 14:00 a 15:00"
  },
  {
    nombre: "Básquetbol",
    categoria: "equipo",
    imagen: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    descripcion: "Deporte en el que dos equipos intentan introducir el balón en la canasta contraria.",
    actividades: [
      "Bote y control del balón",
      "Pases y lanzamientos",
      "Técnicas defensivas y ofensivas",
      "Partidos de práctica"
    ],
    requisitos: [
      "Ropa y calzado deportivo",
      "Disposición para aprender",
      "Respetar a los compañeros"
    ],
    horario: "Martes y jueves, 14:00 a 15:00"
  },
  {
    nombre: "Voleibol",
    categoria: "equipo",
    imagen: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800",
    descripcion: "Deporte en el que dos equipos separados por una red intentan enviar el balón al campo contrario.",
    actividades: [
      "Saque y recepción",
      "Colocación del balón",
      "Remates y bloqueos",
      "Partidos de práctica"
    ],
    requisitos: [
      "Ropa deportiva",
      "Trabajo en equipo",
      "Seguir las indicaciones del entrenador"
    ],
    horario: "Lunes y miércoles, 15:00 a 16:00"
  },
  {
    nombre: "Ajedrez",
    categoria: "individual",
    imagen: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800",
    descripcion: "Juego de estrategia entre dos participantes que desarrolla la lógica, la concentración y la toma de decisiones.",
    actividades: [
      "Aprender reglas y movimientos",
      "Resolver problemas",
      "Practicar aperturas y finales",
      "Partidas y análisis"
    ],
    requisitos: [
      "Disposición para aprender",
      "Respetar turnos y reglas",
      "No se necesita experiencia previa"
    ],
    horario: "Martes, 13:00 a 14:00"
  },
  {
    nombre: "Atletismo",
    categoria: "individual",
    imagen: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
    descripcion: "Disciplina deportiva que reúne carreras, saltos y lanzamientos.",
    actividades: [
      "Calentamiento",
      "Ejercicios de velocidad",
      "Prácticas de resistencia",
      "Coordinación y técnica"
    ],
    requisitos: [
      "Ropa y calzado adecuados",
      "Llevar agua",
      "Seguir las indicaciones del entrenador"
    ],
    horario: "Martes y jueves, 15:00 a 16:00"
  },
  {
    nombre: "Tocho bandera",
    categoria: "equipo",
    imagen: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800",
    descripcion: "Deporte inspirado en el fútbol americano. Para detener una jugada se retira una bandera que lleva el jugador.",
    actividades: [
      "Pases y recepciones",
      "Desplazamientos y coordinación",
      "Estrategias de juego",
      "Partidos de práctica"
    ],
    requisitos: [
      "Ropa deportiva",
      "Trabajo en equipo",
      "Respetar las reglas y al entrenador"
    ],
    horario: "Miércoles y viernes, 14:00 a 15:00"
  }
];

const contenedor = document.getElementById("lista-deportes");
const modal = document.getElementById("modal");
const detalle = document.getElementById("modal-detalle");

function mostrarDeportes(filtro = "todos") {
  contenedor.innerHTML = "";

  const seleccionados = deportes.filter(deporte =>
    filtro === "todos" || deporte.categoria === filtro
  );

  seleccionados.forEach(deporte => {
    const indice = deportes.indexOf(deporte);

    const tarjeta = document.createElement("article");
    tarjeta.className = "deporte-card";

    tarjeta.innerHTML = `
      <img src="${deporte.imagen}"
           alt="Imagen de ${deporte.nombre}"
           loading="lazy">

      <div class="card-info">
        <h3>${deporte.nombre}</h3>
        <p>${deporte.descripcion}</p>
        <button class="ver-mas" data-indice="${indice}">
          Conocer más
        </button>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
}

function abrirDetalle(indice) {
  const deporte = deportes[indice];

  detalle.innerHTML = `
    <h2 id="modal-titulo">${deporte.nombre}</h2>

    <p>${deporte.descripcion}</p>

    <h3>Actividades</h3>
    <ul>
      ${deporte.actividades.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>Requisitos orientativos</h3>
    <ul>
      ${deporte.requisitos.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>Horario propuesto</h3>
    <p>${deporte.horario}</p>

    <p class="aviso">
      Horario y requisitos pendientes de confirmación por el CBTis 227.
    </p>
  `;

  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".filtro").forEach(boton => {
  boton.addEventListener("click", () => {
    document.querySelector(".filtro.activo")?.classList.remove("activo");

    boton.classList.add("activo");

    mostrarDeportes(boton.dataset.filtro);
  });
});

contenedor.addEventListener("click", evento => {
  const boton = evento.target.closest(".ver-mas");

  if (boton) {
    abrirDetalle(Number(boton.dataset.indice));
  }
});

function cerrarModal() {
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("cerrar-modal")
  .addEventListener("click", cerrarModal);

modal.addEventListener("click", evento => {
  if (evento.target === modal) {
    cerrarModal();
  }
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    cerrarModal();
  }
});

mostrarDeportes();
