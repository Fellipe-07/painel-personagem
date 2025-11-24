const botoes = document.querySelectorAll(".personagens button");
const nomes = [
     'Aurora, a Guardiã das Tempestades',
     'Orion, o Cronista Estelar',
     'Nyra, a Sombra Rebelde',
     'Tiberion, o Forjador de Almas'
];

let votos = [0, 0, 0, 0, 0];
const listaRanking = document.querySelector("#lista-ranking");
function mostrarRankingIndividual() {
    listaRanking.innerHTML = "";

    const rankingOrdenado = nomes
        .map((nome, index) => ({ nome, votos: votos[index] }))
        .sort((a, b) => b.votos - a.votos);

    rankingOrdenado.forEach((item) => {
        const p = document.createElement("p");
        p.div = "#lista-ranking";
        p.textContent = `${item.nome}: ${item.votos} voto(s)`;
        listaRanking.appendChild(p);
    });


}

botoes.forEach((botao, index) => {
    botao.addEventListener("click", function (e) {
        e.preventDefault();

        votos[index]++;

        mostrarRankingIndividual();
    });
});