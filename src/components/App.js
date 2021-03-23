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


// FISHER YATES ALGORITM
 let inputArray = Array.from(webdev.items); 
 let sortedArray= inputArray.sort((a,b)=> 0.5-Math.random());
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
    
      console.log(sortedArray);
    
  
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

    //TURN CARDS
    const flipIt = document.querySelectorAll(".is-flipped");
    //const flipIt2 = document.querySelectorAll(".card_face--back")
    console.log(flipIt);
    //console.log(flipIt2);
    console.log(flipIt.length);
    if (flipIt.length != 0){
      console.log("hay cartas dadas vuelta");
      for (let x=0; x <= flipIt.length-1; x++){
        console.log(flipIt[x]);
        flipIt[x].classList.remove("is-flipped");
        flipIt[x].classList.remove("card_face--back");
        flipIt[x].classList.add("card");
       }
    }

  }; 

  //flip cards
      let game1;
      let game2;
      let tried = 0;
      let win = 0;
      let gameCounter = 1;
      let card1;
      const cardSelect = document.querySelectorAll('.card');
      console.log(cardSelect);
    for (let i=0; i<=7; i++){ 
        //a. Flip cards     
        let allCards = cardSelect[i];
        let checkClass = cardSelect[i].className;
        console.log(checkClass);
        //if (checkClass == "card"){
        allCards.addEventListener( "click", flipGame);
        //}  
          function flipGame() {
          allCards.classList.toggle("is-flipped"); 
          let cardSelected1 = allCards.childNodes;
      
      
          // b. get geeky webdev messages
          //let infoArray = Array.from(webDev_Definition.information); 
          //let geekySpeaks= document.querySelector('.contentBackground'); 
      
          // **Necesito conseguir una manera de sincronizar la carta clickeada con la info de infoArray**
          //geekySpeaks.textContent= infoArray[i].info;
            
          
        // c. Compare cards: first game
        if (gameCounter == 1){ 
          card1 = allCards;
          game1 = cardSelected1[3].lastChild.textContent;
          console.log("la jugada uno es:" + game1);
          gameCounter++;
        }
      
        // d. Compare cards: second game
        else if (gameCounter == 2){
          game2 = cardSelected1[3].lastChild.textContent;
          console.log("la jugada 2 es:" + game2);
          gameCounter++;
              if (game1 != game2){
                  console.log("son distintas");
                  setTimeout(() => { allCards.classList.toggle("is-flipped"), card1.classList.toggle("is-flipped");  }, 800);
                  gameCounter = 1;
                  tried++;   
              }
      
               else if (game1 == game2){
                  gameCounter = 1;
                  win++;
                  tried++;
                  const infoArray = Array.from(webDev_Definition.information);
                  const found = infoArray.findIndex(program => program.id === game1);
                  console.log(found);
                  document.getElementById("text").innerHTML=infoArray[found].info;
                  
                  allCards.classList.toggle("card_face--back");
                  card1.classList.toggle("card_face--back");
                  console.log(allCards.className);
                  console.log(card1.className);
      
                      // Victory
                    if (win == 4){
                        setTimeout(victoryPage, 1500); 
                      
                          function victoryPage(){
                                document.getElementById('gamePage').style.display='none';
                                document.getElementById('victoryPage').style.display='block';
                                resetScore();
                               
                          }
                    
                      }
                 }
           
          } 

          // 5.Restart button- gamePage location
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

        
        // Score counter
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
       } // flipGame
      }
      
  
    
export default fisherRestart;
