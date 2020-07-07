const pokeperson = document.getElementById('pokeperson')

let pokemonNumber = 1;
let pokemonName = 'bulbasaur'

// let website = `https://pokemon.gameinfo.io/en/pokemon/${pokemonNumber}-${pokemonName}`;

// console.log(website);


const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

// const vgmUrl= 'https://www.vgmusic.com/music/console/nintendo/nes';
const vgmUrl= `https://pokemon.gameinfo.io/en/pokemon/${pokemonNumber}-${pokemonName}`;

got(vgmUrl).then(response => {
  const $ = cheerio.load(response.body);
  console.log('david')
  console.log($('p')[4].children[0].data);
  pokeperson.innerHTML = $('p')[4].children[0].data;
}).catch(err => {
  console.log(err);
});

