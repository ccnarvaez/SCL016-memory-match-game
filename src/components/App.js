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
//console.log(webdev.items[0]);
//let test= webdev.items[0];
const App = () => {
  //const el = document.createElement('test');

  //el.className = 'cards';
  //el.textContent ='js';
  //console.log(el);
  //return el;
  


// Fisher-yates algoritm
let inputArray = Array.from(webdev.items); 
let sortedArray= inputArray.sort((a,b)=> 0.5-Math.random());
sortedArray.splice(4,6);
let spliceCounted= sortedArray.length-1;
for (let j=0; j<=spliceCounted; j++){ 
  sortedArray[j+4]=sortedArray[j];
}
let fullArrayCounted= sortedArray.length;
   for (let k=0; k<fullArrayCounted; k++){
     let sortedArrayItem=sortedArray[k];
     let randomIndex=Math.floor(Math.random()*fullArrayCounted);
     sortedArray[k]= sortedArray[randomIndex];
     sortedArray[randomIndex]=sortedArrayItem;
    }
    console.log(sortedArray);
  // Fisher-yates ends

  //  Call elements to cards
    let callBackSorted=document.getElementsByClassName("card_face card_face--back");
    for (let c=0; c <= 3; c++){
      callBackSorted[c].style.backgroundColor = sortedArray[c].bgColor;
      let cardsBackArray = callBackSorted[c].childNodes;
      let childImage= cardsBackArray[0];
      childImage.src = sortedArray[c].image;

      console.log(cardsBackArray);
      let idName= cardsBackArray[1].firstChild;
      idName.textContent = sortedArray[c].id;
      console.log(idName);
    }
  // end Call elements to cards  
  return sortedArray;
};
export default App;
