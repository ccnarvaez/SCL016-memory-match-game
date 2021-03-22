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


//Llamar componentes de cartas

import webdev from '../data/webdev/webdev.js';
import webDev_Definition from '../data/webdev/webDev_Definition.js';
    // Fisher-yates algoritm
    // 1. Array of objects which contents elements called from webdev components archive
    let inputArray = Array.from(webdev.items); 
    
    
    // 2. Choosing random elements from inputObject: random sort method
    let sortedArray= inputArray.sort((a,b)=> 0.5-Math.random());

    // 3. input array cut (we just need 4 components)
    sortedArray.splice(4,6);
    let spliceCounted= sortedArray.length-1;

    //4. Full array with double elements. We need that to getting match cards
    for (let j=0; j<=spliceCounted; j++){ 
      sortedArray[j+4]=sortedArray[j];
    }

    //5. Now, we are going to present sortedArray elements in random order: Fisher Yates  Algoritm
    function fisherRestart(){
        let fullArrayCounted= sortedArray.length;  
        for (let k=0; k<fullArrayCounted; k++){
        let sortedArrayItem=sortedArray[k];
        let randomIndex=Math.floor(Math.random()*fullArrayCounted);
        sortedArray[k]= sortedArray[randomIndex];
        sortedArray[randomIndex]=sortedArrayItem;
        }
    
      console.log(sortedArray);
    
  
    //6. call back component from sortedArray 
    let callBackSorted=document.getElementsByClassName("card_face card_face--back");

  
    for (let c=0; c <= 7; c++){
      callBackSorted[c].style.backgroundColor = sortedArray[c].bgColor;
      let cardsBackArray = callBackSorted[c].childNodes;

      let childImage= cardsBackArray[0];
      childImage.src = sortedArray[c].image;

      console.log(cardsBackArray);
      let idName= cardsBackArray[1].firstChild;
      idName.textContent = sortedArray[c].id;
      console.log(idName);

    }
    //turn the cards for restart
    const flipIt = document.querySelectorAll(".is-flipped");
    console.log(flipIt);
    console.log(flipIt.length);
    if (flipIt.length != 0){
      console.log("hay cartas dadas vuelta");
      for (let x=0; x <= flipIt.length-1; x++){
        console.log(flipIt[x]);
        flipIt[x].classList.remove("is-flipped");
        flipIt[x].classList.add("card");
       }
    }
  }; 
export default fisherRestart;
