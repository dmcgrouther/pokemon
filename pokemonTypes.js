async function getPokemonTypes() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/types`)
        .then(response => response.json())
    console.log(response);
    return response
}

getPokemonTypes();