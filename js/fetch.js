/*En mi proyecto no voy a utilizar fetch pero bueno aca va uno que te trae todos los nombres 
de los Pokmon a un consol log ...inspeccionar la pagina en index y verificar en consola.  */

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json()) 
  .then(data => console.log(data))

