let input = document.getElementById('input');
let submit = document.getElementById('submit');
let image = document.getElementById('image');

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

      let PokeName = data.name;
      let PokeImage = data.sprites.front_default

      image.src = PokeImage;
      image.style.display = 'block';
    }
    catch(error){
      console.error(error);
    }
  }
});