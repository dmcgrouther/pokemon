async function my_async_fn(url) {
    let response = await fetch(url)
        .then(response => response.json())      
    console.log(response); // Logs the response
    return response;
}

my_async_fn(`https://pokeapi.co/api/v2/pokemon?limit=151`);

function fetchPokemonData(pokemon){
    let url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
            console.log(pokeData)
            console.log(pokeData.name)
        })
}

function fetchKantoPokemonAndListEachOneByOne(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(response => response.json())
        .then(function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                fetchPokemonData(pokemon)
            })
        })
}

fetchKantoPokemonAndListEachOneByOne();

function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
    let pokeTypes = document.createElement('ul') 
    //ul list will hold the pokemon types
    createTypes(pokeData.types, pokeTypes) 
    // helper function to go through the types array and create li tags for each one
    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       
    //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
  }

renderPokemon(`https://pokeapi.co/api/v2/pokemon/charmander`)