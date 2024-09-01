let input = document.getElementById('input');
let submit = document.getElementById('submit');

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
    }
    catch(error){
      console.error(error);
    }
  }
});