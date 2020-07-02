const pokemonInputArea = document.getElementById('pokemon-input');
let pokemonInputAreaText;
const searchButton = document.getElementById("search");
const pokemonNameArea = document.getElementById("pokemon-name");
const spriteArea = document.getElementById("sprite-area");
let pokeImage;

async function getInfoOnOnePokemonAndAddInfoToPage(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
    console.log(response);
    
    let pokeId = response.id
    console.log(`pokeId is ${pokeId}`)

    pokemonNameArea.innerHTML = response.name;

    pokeImage = document.createElement('img');
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;
    spriteArea.append(pokeImage);

    return response;
}

const pokemonSearchClick = () => {
    pokemonInputAreaText = document.getElementById('pokemon-input').value;
    console.log(pokemonInputAreaText)
    console.log('pokedex is searching...')
    getInfoOnOnePokemonAndAddInfoToPage(pokemonInputAreaText)
}

searchButton.addEventListener('click', pokemonSearchClick);