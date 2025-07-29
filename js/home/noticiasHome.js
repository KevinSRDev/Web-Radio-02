const boxNoticias = document.getElementById('boxNewsCards')

let noticias = [];
let tarjetasDeNoticias;


class Noticia {
   constructor(titulo, foto, parrafo){
      this.titulo = titulo;
      this.foto = foto;
      this.parrafo = parrafo;
   }
}

let notica_01 = new Noticia ("F1 estrena pista", "src/img/news/new-01.jpg", "Campesinos e indígenas de la subregión de Obando participaron en los Diálogos Territoriales del SENA en Pupiales, construyendo propuestas para fortalecer la formación, el emprendimiento y el desarrollo rural con identidad y equidad")

let notica_02 = new Noticia ("Sena Radio", "./src/img/news/new-02.jpg", "Campesinos e indígenas de la subregión de Obando participaron en los Diálogos Territoriales del SENA en Pupiales, construyendo propuestas para fortalecer la formación, el emprendimiento y el desarrollo rural con identidad y equidad")

let notica_03 = new Noticia ("Colombia Unida", "./src/img/news/new-03.jpg", "Campesinos e indígenas de la subregión de Obando participaron en los Diálogos Territoriales del SENA en Pupiales, construyendo propuestas para fortalecer la formación, el emprendimiento y el desarrollo rural con identidad y equidad")

let notica_04 = new Noticia ("Energia Hidrica", "./src/img/news/new-04.jpg", "Campesinos e indígenas de la subregión de Obando participaron en los Diálogos Territoriales del SENA en Pupiales, construyendo propuestas para fortalecer la formación, el emprendimiento y el desarrollo rural con identidad y equidad")

let notica_05 = new Noticia ("Energia Renovable", "./src/img/news/new-05.jpg", "Campesinos e indígenas de la subregión de Obando participaron en los Diálogos Territoriales del SENA en Pupiales, construyendo propuestas para fortalecer la formación, el emprendimiento y el desarrollo rural con identidad y equidad")

let notica_06 = new Noticia ("Bienvenida", "./src/img/news/new-06.jpg", "Campesinos e indígenas de la subregión de Obando participaron en los Diálogos Territoriales del SENA en Pupiales, construyendo propuestas para fortalecer la formación, el emprendimiento y el desarrollo rural con identidad y equidad")

noticias.push(notica_01, notica_02, notica_03, notica_04, notica_05, notica_06);

window.addEventListener("load", mostrarNoticias);

function mostrarNoticias(){
   noticias.forEach((noticia) => {
      tarjetasDeNoticias = `
      <div id="link-cardsNew" class="cardsNews" onclick="linkNoticia()">
         <div class="boxImgCardNew">
            <img src=${noticia.foto} alt="News">
         </div>
         <div class="boxdownCard">
            <h3 class="title-News">${noticia.titulo}</h3>
            <p class="descritionNews">${noticia.parrafo}</p>
            <button id="btn-link-new" class="moreNews" onclick="linkNoticia()">
               Más
            </button>
         </div>
      </div>
      `
      boxNoticias.innerHTML += tarjetasDeNoticias
   });
}