const pokeContainer = document.querySelector(".poke-continer");
const searchInput = document.querySelector(".search-input");
const pokeCount = 50;

const initPoke = async () => {
    for (let i = 1; i < pokeCount; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(URL);
    let data = await res.json();
    createPokeCard(data)
}

const createPokeCard = (pokemon) => {

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
    const imgId = pokemon.id;
    const id = pokemon.id.toString().padStart(3, "0");
    const type = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1).toLowerCase();
    const weight = pokemon.weight;

    const pokeEl = document.createElement("div");
    pokeEl.classList.add("poke-card");


    pokeEl.innerHTML = `
    <div class="poke-image">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"
            alt="">
    </div>
    <div class="poke-name">
         ${name}
    </div>
    <div class="poke-id">
        #${id}
    </div>
    <div class="poke-weight">${weight}</div>
    <div class="poke-type">Type: ${type}</div>`
    pokeContainer.appendChild(pokeEl);

}
initPoke();

searchInput.addEventListener("input", () => {
    const pokeNames = document.querySelectorAll(".poke-name");
    let search = searchInput.value.toLowerCase();

    pokeNames.forEach((pokemon) => {

        pokemon.parentElement.style.display = "flex";

        if (!pokemon.innerHTML.toLowerCase().includes(search)) {
            pokemon.parentElement.style.display = "none";
        }

    });
});