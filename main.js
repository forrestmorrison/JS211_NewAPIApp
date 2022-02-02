// Pokemon API
// show abilities & moves
// show stats

let playersArray = [];

let selectPokemon = (pokemon) => {
    return function(){
        let pokemonArena = document.getElementById("arena");
        pokemonArena.insertAdjacentHTML("beforeend", "<div id='player1'>"+ pokemon.name +"</div>");
        // let player1 = document.createElement("");
        console.log(pokemon);
    }
}

let displayPokemon = (pokeParam) => {

    let pokedex = pokeParam.results;
    console.log(pokedex);

    let pokemonList = document.getElementById("pokemon-list");
    // pokemonList.insertAdjacentHTML("afterend")

    pokedex.forEach((item, index)=>{

        let newListItem = document.createElement("LI");
        newListItem.innerText = item.name;
        newListItem.onclick = selectPokemon(item);
        pokemonList.appendChild(newListItem);
        console.log(index, item);
})
    
}

const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then(response => response.json())
        .then(json => displayPokemon(json))
        .catch(error => console.log(error))
}


