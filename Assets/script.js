let input = document.getElementById('input');
let submit = document.getElementById('submit');
let image = document.getElementById('image');
let nameCont = document.getElementById('name');
let weight = document.getElementById('weight');
let ID = document.getElementById('ID');
let height = document.getElementById('height');
let abilities = document.getElementById('abilities');

submit.addEventListener('click', () => {
  let pokemon = input.value;

  findPokemon();
  async function findPokemon() {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if(!response.ok || pokemon == ''){
        throw new Error ("Couldn't fetch data");
      }

      const data = await response.json();
      console.log(data); 

      let PokeWeight = data.weight;
      let PokeName = data.name;
      let PokeImage = data.sprites.front_default;
      let PokeHeight = data.height;
      let PokeID = data.id;
      let PokeAttack = data.stats[1].base_stat;
      let PokeHP = data.stats[0].base_stat;
      let PokeDefence = data.stats[2].base_stat;
      let PokeSpeed = data.stats[5].base_stat;

      nameCont.innerHTML = PokeName;
      image.src = PokeImage;
      image.style.display = 'block';
      weight.innerHTML = `Weight : ${PokeWeight}`;
      height.innerHTML = `Height : ${PokeHeight}`;
      ID.innerHTML = `#${PokeID}`;
      abilities.innerHTML = `Health : ${PokeHP}<br>
                             Speed : ${PokeSpeed}<br>
                             Attack : ${PokeAttack}<br>
                             Defence : ${PokeDefence}`;
    }
    catch(error){
      console.error(error);
    }
  }
});