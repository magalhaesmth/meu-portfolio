document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const mensagemInput = document.getElementById("mensagem");

    document.getElementById("whatsapp-button").addEventListener("click", function () {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const numero = "5544998033233";
        const texto = `Olá! Meu nome é ${nome} (${email}).%0A%0A${mensagem}`;
        const link = `https://wa.me/${numero}?text=${texto}`;
        window.open(link, "_blank");
    });

    document.getElementById("email-button").addEventListener("click", function () {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const assunto = encodeURIComponent("Nova mensagem do seu site");
        const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);
        const link = `mailto:matheusurbano2002@hotmail.com?subject=${assunto}&body=${corpo}`;
        window.location.href = link;
    });
});
