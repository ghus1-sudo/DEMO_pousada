const zap = document.getElementById("zap");

zap.addEventListener("click", function(){
    window.open("https://wa.me/554196523656", "_blank");
});




const sobreImagem = document.querySelector("#sobreImagem");

const imagens = [
    "pousada_externa.webp",
    "pousada_externa2.jpg",
    "pousada_externa3.jpg",
    "pousada_externa4.jpg"
];

let indice = 0;

setInterval(() => {

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    const novaImagem = new Image();

    novaImagem.src = imagens[indice];

    novaImagem.onload = () => {

        sobreImagem.style.opacity = "0";

        setTimeout(() => {
            sobreImagem.src = imagens[indice];
            sobreImagem.style.opacity = "1";
        }, 175);

    };

}, 4000);






const elementos = document.querySelectorAll(
    ".sobre-content, .sobre-img, .quarto, .experiencia, .galeria-grid img, .localizacao-content, .mapa, .cta-content, .section-title, .informacao, summary"
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
