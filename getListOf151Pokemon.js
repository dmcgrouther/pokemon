async function my_async_fn(url) {
    let response = await fetch(url)
        .then(response => response.json())      
    console.log(response); // Logs the response
    return response;
}

my_async_fn(`https://pokeapi.co/api/v2/pokemon?limit=151`);