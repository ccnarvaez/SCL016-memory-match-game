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

//CARDS COMPONENTS CALLBACK

import webdev from '../data/webdev/webdev.js';
import webDev_Definition from '../data/webdev/webDev_Definition.js';

// FISHER YATES ALGORITM
 let inputArray = Array.from(webdev.items); 
 let sortedArray= inputArray.sort(()=> 0.5-Math.random());
 sortedArray.splice(4,6);
 let spliceCounted= sortedArray.length-1;

    for (let j=0; j<=spliceCounted; j++){ 
      sortedArray[j+4]=sortedArray[j];
    }

  function fisherRestart(){
        let fullArrayCounted= sortedArray.length;  
        for (let k=0; k<fullArrayCounted; k++){
          let sortedArrayItem=sortedArray[k];
          let randomIndex=Math.floor(Math.random()*fullArrayCounted);
          sortedArray[k]= sortedArray[randomIndex];
          sortedArray[randomIndex]=sortedArrayItem;
        }
    
//CALL BACK COMPONENT FROM SORTED ARRAY
let callBackSorted=document.getElementsByClassName("card_face card_face--back");
  
    for (let c=0; c <= 7; c++){
      callBackSorted[c].style.backgroundColor = sortedArray[c].bgColor;
      let cardsBackArray = callBackSorted[c].childNodes;
      let childImage= cardsBackArray[0];
      childImage.src = sortedArray[c].image;
      let idName= cardsBackArray[1].firstChild;
      idName.textContent = sortedArray[c].id;
    }

//TURN BACK CARDS
  const flipIt = document.querySelectorAll(".is-flipped");
  if (flipIt.length != 0){
   
    for (let x=0; x <= flipIt.length-1; x++){
        flipIt[x].classList.remove("is-flipped");
        flipIt[x].classList.remove("card_face--back");
        flipIt[x].classList.add("card");
    }
  }
}// **fisherYates curly bracket

//CARDS FLIPPED
let game1;
let game2;
let tried = 0;
let win = 0;
let gameCounter = 1;
let card1;
const cardSelect = document.querySelectorAll('.card');

  for (let i=0; i<=7; i++){ 
    //a. Flip cards     
      let allCards = cardSelect[i];
      //let checkClass = cardSelect[i].className;
      //console.log(checkClass);
      //if (checkClass == "card"){
      allCards.addEventListener( 'click', function(){
      //}     
          allCards.classList.toggle('is-flipped'); 
          const cardSelected1 = allCards.childNodes;
          sound();
          
        function sound(){
          let audiolabel = document.createElement("audio")
          audiolabel.setAttribute("src", "boinks.mp3")
          audiolabel.play()
        }
        // c. Compare cards: first move
       
        if (gameCounter == 1){ 
          card1 = allCards;
          game1 = cardSelected1[3].lastChild.textContent;
          gameCounter++;
        }
      
        // d. Compare cards: second move
        else if (gameCounter == 2){
          game2 = cardSelected1[3].lastChild.textContent;
          gameCounter++;

          if (allCards==card1){
            win--;
          }

          if (game1 != game2){
            setTimeout(() => { allCards.classList.toggle("is-flipped"), 
            card1.classList.toggle("is-flipped");}, 800);
            gameCounter = 1;
            tried++;   
          }
              
              else if (game1 == game2){
                  gameCounter = 1;
                  win++;
                  tried++;
                  const infoArray = Array.from(webDev_Definition.information);
                  const found = infoArray.findIndex(program => program.id === game1);
                  document.getElementById('text').innerHTML=infoArray[found].info;
                  
                  allCards.classList.toggle('card_face--back');
                  card1.classList.toggle('card_face--back');
      
                      // Victory
                    if (win == 4){
                        setTimeout(function(){
                          document.getElementById('gamePage').style.display='none';
                          document.getElementById('victoryPage').style.display='block';
                          resetScore();}, 1500); 
                    }
               } 
          } 

          // RESTART BUTTON
          let shuffleBtn= document.getElementById('restartGame');
          shuffleBtn.addEventListener('click', shuffleAgain);
          
          function resetScore(){
            win=0;
            tried=0;
            document.getElementById('tried').innerHTML='INTENTOS:'+' '+tried;
            document.getElementById("text").innerHTML="Vamos otra vez!!";
            return;
          }

          function shuffleAgain(){
              fisherRestart();
              resetScore();
          
            }

        
        // SCORE COUNTER
              document.getElementById('tried').innerHTML='INTENTOS:'+' '+tried;
              if (tried<10){
                document.getElementById('resultsVP').innerHTML= 'Terminaste el juego en '+' '+tried+' '+'intentos,'+' '+ 'Eres super geeky';
              }       
              else if (tried >10 && tried<20){
                document.getElementById('resultsVP').innerHTML= 'Terminaste el juego en '+' '+tried+' '+'intentos,'+' '+ 'Estas empezando tu camino geeky';
              }
              else if (tried>20){
                  document.getElementById('resultsVP').innerHTML= 'Terminaste el juego en '+' '+tried+' '+'intentos,'+' '+ 'Eres un geeky olvidadizo';
              }
             return;
       }) // flipGame
      }
      
  
    
export default fisherRestart;