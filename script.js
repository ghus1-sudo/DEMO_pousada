const zap = document.getElementById("zap");

zap.addEventListener("click", function(){
    window.open("https://wa.me/554196523656", "_blank");
});




const sobreImagem = document.querySelector("#sobreImagem");

const imagens = [
    "./IMG/pousada_externa.webp",
    "./IMG/pousada_externa2.jpg",
    "./IMG/pousada_externa3.jpg",
    "./IMG/pousada_externa4.jpg"
];

let indice = 0;

setInterval(function() {

    sobreImagem.classList.add("fade");

    setTimeout(function() {

        indice++;

        if (indice >= imagens.length) {
            indice = 0;
        }

        sobreImagem.src = imagens[indice];

        sobreImagem.classList.remove("fade");

    }, 700);

}, 4000);






const elementos = document.querySelectorAll(
    ".sobre-content, .sobre-img, .quarto, .experiencia, .galeria-grid img, .localizacao-content, .mapa, .cta-content"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


elementos.forEach((elemento) => {

    observer.observe(elemento);

});