const botoesQuarto = document.querySelectorAll(".btn-escolher");
const selectAcomodacao = document.getElementById("acomodacao");
const formulario = document.getElementById("formulario");


botoesQuarto.forEach(botao => {

    botao.addEventListener("click", () => {

        const quarto = botao.dataset.quarto;

        selectAcomodacao.value = quarto;

        formulario.scrollIntoView({
            behavior: "smooth"
        });

    });

});


const formHospedagem = document.getElementById("formHospedagem");


if (formHospedagem) {

    formHospedagem.addEventListener("submit", function(event) {

        event.preventDefault();


        const acomodacao =
            document.getElementById("acomodacao").value;

        const checkin =
            document.getElementById("checkin").value;

        const checkout =
            document.getElementById("checkout").value;

        const hospedes =
            document.getElementById("hospedes").value;

        const nome =
            document.getElementById("nome").value;

        const observacoes =
            document.getElementById("observacoes").value;


        const dataCheckin =
            new Date(checkin + "T00:00:00")
                .toLocaleDateString("pt-BR");

        const dataCheckout =
            new Date(checkout + "T00:00:00")
                .toLocaleDateString("pt-BR");


        let mensagem = `Olá! Gostaria de consultar uma hospedagem.

Acomodação: ${acomodacao}
Check-in: ${dataCheckin}
Check-out: ${dataCheckout}
Hóspedes: ${hospedes}
Nome: ${nome}`;


        if (observacoes.trim() !== "") {

            mensagem += `
Observações: ${observacoes}`;

        }


        const numero = "5571999999999";


        const url =
            `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;


        window.open(url, "_blank");

    });

}