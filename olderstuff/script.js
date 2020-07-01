console.log('pika!')

// function fetchKantoPokemon(endpoint, limit){
//     const response = `${endpoint}?limit=${limit}`
//     .then(response => response.json())
//     .then(allpokemon => console.log(allpokemon))
//   }

// fetchKantoPokemon('https://pokeapi.co/api/v2/pokemon', 151)


function fetchKantoPokemon(endpoint, limitNumber){
    fetch(`${endpoint}?limit=${limitNumber}`)
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon))

    const pokemonObtained = fetch(`${endpoint}?limit=${limitNumber}`)
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon))

    console.log(pokemonObtained)
  }

fetchKantoPokemon('https://pokeapi.co/api/v2/pokemon',151)