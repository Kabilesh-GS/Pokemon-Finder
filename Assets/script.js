let input = document.getElementById('input');
let submit = document.getElementById('submit');
let image = document.getElementById('image');
let nameCont = document.getElementById('name');
let weight = document.getElementById('weight');

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
      let PokeImage = data.sprites.front_default

      nameCont.innerHTML = PokeName;
      image.src = PokeImage;
      image.style.display = 'block';
      weight.innerHTML = `Weight : ${PokeWeight}`;
    }
    catch(error){
      console.error(error);
    }
  }
});