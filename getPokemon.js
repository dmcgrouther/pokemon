const pokemonInputArea = document.getElementById('pokemon-input');
let pokemonInputAreaText;
const searchButton = document.getElementById("search");


async function my_async_fn(url) {
    let response = await fetch(url)
        .then(response => response.json())
        //below ?
        // .then(response.results.forEach(function(pokemon){
        //     fetchPokemonData(pokemon); 
        // }))
        //above ?        
    console.log(response); // Logs the response
    return response;
}

my_async_fn(`https://pokeapi.co/api/v2/pokemon?limit=151`);


async function getInfoOnOnePokemon(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
    console.log(response);
    return response;
}

const pokemonSearchClick = () => {
    pokemonInputAreaText = document.getElementById('pokemon-input').value;
    console.log(pokemonInputAreaText)
    console.log('pokedex is searching...')
    getInfoOnOnePokemon(pokemonInputAreaText)
}

searchButton.addEventListener('click', pokemonSearchClick);


// function renderPokemon(pokeData){
//     let allPokemonContainer = document.getElementById('poke-container');
//     let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
//     let pokeName = document.createElement('h4')
//     pokeName.innerText = pokeData.name
//     let pokeNumber = document.createElement('p')
//     pokeNumber.innerText = `#${pokeData.id}`
//     let pokeTypes = document.createElement('ul') 
//     //ul list will hold the pokemon types
//     createTypes(pokeData.types, pokeTypes) 
//     // helper function to go through the types array and create li tags for each one
//     pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
//     //appending all details to the pokeContainer div
//     allPokemonContainer.appendChild(pokeContainer);       
//     //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
//     }