//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import webdev from '../data/webdev/webdev.js';
console.log(webdev.items[0]);
let test= webdev.items[0];
const App = () => {
  const el = document.createElement('test');

  el.className = 'cards';
  el.textContent ='js';
  console.log(el);
  return el;
  
};



export default App;
