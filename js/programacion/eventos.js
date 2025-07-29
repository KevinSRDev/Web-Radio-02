const boxEventos = document.getElementById("boxEvent");

let eventos = [];
let tarjetasDeEventos;

class Evento {
  constructor(titulo, foto, parrafo, fecha) {
    this.titulo = titulo,
    this.foto = foto,
    this.parrafo = parrafo,
    this.fecha = fecha;
  }
}

let evento_01 = new Evento(
  "Titulo de Evento",
  "../src/img/programacion-eventos/evento-01.jpg",
  "📻 ¡Te invitamos al espacio donde las ondas hacen magia! Únete a nuestro evento web sobre programas de radio: historias, música, voces inolvidables y cómo se crea la magia del micrófono. 🎙️ Ven a charlar, aprender y compartir lo que más te gusta del mundo radiofónico. ¡Nos conectamos en vivo!",
  "29/07/2025"
);

let evento_02 = new Evento(
  "Titulo de Evento",
  "../src/img/programacion-eventos/evento-02.jpg",
  "📻 ¡Te invitamos al espacio donde las ondas hacen magia! Únete a nuestro evento web sobre programas de radio: historias, música, voces inolvidables y cómo se crea la magia del micrófono. 🎙️ Ven a charlar, aprender y compartir lo que más te gusta del mundo radiofónico. ¡Nos conectamos en vivo!",
  "29/07/2025"
);

let evento_03 = new Evento(
  "Titulo de Evento",
  "../src/img/programacion-eventos/evento-03.jpg",
  "📻 ¡Te invitamos al espacio donde las ondas hacen magia! Únete a nuestro evento web sobre programas de radio: historias, música, voces inolvidables y cómo se crea la magia del micrófono. 🎙️ Ven a charlar, aprender y compartir lo que más te gusta del mundo radiofónico. ¡Nos conectamos en vivo!",
  "29/07/2025"
);

let evento_04 = new Evento(
  "Titulo de Evento",
  "../src/img/programacion-eventos/evento-04.jpg",
  "📻 ¡Te invitamos al espacio donde las ondas hacen magia! Únete a nuestro evento web sobre programas de radio: historias, música, voces inolvidables y cómo se crea la magia del micrófono. 🎙️ Ven a charlar, aprender y compartir lo que más te gusta del mundo radiofónico. ¡Nos conectamos en vivo!",
  "29/07/2025"
);

let evento_05 = new Evento(
  "Titulo de Evento",
  "../src/img/programacion-eventos/evento-05.jpg",
  "📻 ¡Te invitamos al espacio donde las ondas hacen magia! Únete a nuestro evento web sobre programas de radio: historias, música, voces inolvidables y cómo se crea la magia del micrófono. 🎙️ Ven a charlar, aprender y compartir lo que más te gusta del mundo radiofónico. ¡Nos conectamos en vivo!",
  "29/07/2025"
);

eventos.push(evento_01, evento_02, evento_03, evento_04, evento_05);

window.addEventListener("load", mostrarEventos);

function mostrarEventos() {
  eventos.forEach((evento) => {
    tarjetasDeEventos = `
        <div class="dateProhram">
            <h2 class="titleEvent">${evento.titulo}</h2>
            <div class="moreInfoEvent">
                <div class="boxImgInfo">
                    <img src=${evento.foto} alt="Imagen de ${evento.titulo}">
                </div>
                <div class="boxInfoText">
                    <p class="textInfo">${evento.parrafo}</p>
                    <h3 class="dateEvent">
                        <span>Fecha</span> - ${evento.fecha}
                    </h3>
                </div>
            </div>
        </div>
        `;
        boxEventos.innerHTML += tarjetasDeEventos;
  });
}
