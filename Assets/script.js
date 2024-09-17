let input = document.getElementById('input');
let submit = document.getElementById('submit');
let image = document.getElementById('image');
let nameCont = document.getElementById('name');
let weight = document.getElementById('weight');
let ID = document.getElementById('ID');
let height = document.getElementById('height');
let abilities = document.getElementById('abilities');
let PokeCard = document.querySelector('.PokeCard');
let health = document.getElementById('Health');
let speed = document.getElementById('speed');
let attack = document.getElementById('attack');
let defence = document.getElementById('defence');

PokeCard.style.display = 'none';
input.style.width = '300px';
input.style.height = '30px';
input.style.borderRadius = '7px'
input.style.border = 'solid 2px #2c71b7'

submit.addEventListener('click', () => {
  let pokemon = input.value;

  findPokemon();
  async function findPokemon() {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if(!response.ok){
        throw new Error ("Couldn't fetch data");
      }
      if(pokemon == ''){
        alert('Enter a Pokemon');
      }

      const data = await response.json();
      console.log(data); 

      let PokeWeight = data.weight;
      let PokeName = data.name.toUpperCase();
      let PokeImage = data.sprites.front_default;
      let PokeHeight = data.height;
      let PokeID = data.id;
      let PokeAttack = data.stats[1].base_stat;
      let PokeHP = data.stats[0].base_stat;
      let PokeDefence = data.stats[2].base_stat;
      let PokeSpeed = data.stats[5].base_stat;
      PokeCard.style.display = 'block';

      nameCont.innerHTML = PokeName;
      image.src = PokeImage;
      image.style.width = '200px';
      image.style.display = 'block';
      weight.innerHTML = PokeWeight;
      height.innerHTML = PokeHeight;
      ID.innerHTML = `#${PokeID}`;
      health.innerHTML = PokeHP;
      speed.innerHTML = PokeSpeed;
      attack.innerHTML = PokeAttack;
      defence.innerHTML = PokeDefence;
    }
    catch(error){
      console.error(error);
    }
  }
});