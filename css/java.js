
const botao = document.getElementById("buscar");
const input = document.getElementById("pokemon");
const mensagem = document.getElementById("mensagem");

async function buscarPokemon() {
    const nome = input.value.trim().toLowerCase();

    if (nome === "") {
        mensagem.textContent = "Digite o nome de um Pokémon!";
        return;
    }

    mensagem.textContent = "Buscando Pokémon...";

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nome}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado");
        }

        const pokemon = await resposta.json();

        document.getElementById("nome").textContent =
            pokemon.name.toUpperCase();

        document.getElementById("numero").textContent =
            "#" + pokemon.id;

        document.getElementById("imagem").src =
            pokemon.sprites.front_default;

        document.getElementById("altura").textContent =
            pokemon.height / 10 + " m";

        document.getElementById("peso").textContent =
            pokemon.weight / 10 + " kg";

        document.getElementById("hp").textContent =
            pokemon.stats[0].base_stat;

        document.getElementById("ataque").textContent =
            pokemon.stats[1].base_stat;

        document.getElementById("defesa").textContent =
            pokemon.stats[2].base_stat;

        document.getElementById("velocidade").textContent =
            pokemon.stats[5].base_stat;

        document.getElementById("tipos").textContent =
            pokemon.types.map(tipo => tipo.type.name).join(", ");

        mensagem.textContent = "Pokémon encontrado!";

    } catch (erro) {
        mensagem.textContent =
            "Pokémon não encontrado. Confira o nome!";
    }
}

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
    buscarPokemon();
});

input.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        buscarPokemon();
    }
});
console.log("JavaScript carregado!");