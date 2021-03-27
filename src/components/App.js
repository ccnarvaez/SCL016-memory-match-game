//CARDS COMPONENTS CALLBACK - import data from this files
import webdev from '../data/webdev/webdev.js';
import webDev_Definition from '../data/webdev/webdevDefinition.js';

// FISHER YATES ALGORITM
//storage data from webdevs components and create sort array with 8 items
 let inputArray = Array.from(webdev.items); 
 let sortedArray= inputArray.sort(()=> 0.5-Math.random());
 sortedArray.splice(4,6);
 let spliceCounted= sortedArray.length-1;

//Creating array with duplicate items
    for (let j=0; j<=spliceCounted; j++){ 
      sortedArray[j+4]=sortedArray[j];
    }
  
//CALL BACK COMPONENT FROM SORTED ARRAY - put it into the card face back
function cardComponents(){   
  let callBackSorted=document.getElementsByClassName("card_face card_face--back");
  for (let c=0; c <= 7; c++){
    if (callBackSorted[c] !== undefined){ 
       callBackSorted[c].style.backgroundColor = sortedArray[c].bgColor;
       let cardsBackArray = callBackSorted[c].childNodes;
       let childImage= cardsBackArray[0];
       childImage.src = sortedArray[c].image;
       let idName= cardsBackArray[1].firstChild;
       idName.textContent = sortedArray[c].id;
    }
  }
  return
}

//TURN BACK CARDS when the game restart
  function staticCards(){
    const flipIt = document.querySelectorAll(".is-flipped");
    if (flipIt.length != 0){
     
      for (let x=0; x <= flipIt.length-1; x++){
          flipIt[x].classList.remove("is-flipped");
          flipIt[x].classList.remove("card_face--back");
          flipIt[x].classList.add("card");
      }
    }
  return
  }
  //Geting random order and random array to start game
  function randomArray(){
      let sortedArrayItem;
      let randomIndex;
      const fullArrayCounted= sortedArray.length;  
     
      for (let k=0; k<fullArrayCounted; k++){
          sortedArrayItem=sortedArray[k];
          randomIndex=Math.floor(Math.random()*fullArrayCounted);
          sortedArray[k]= sortedArray[randomIndex];
          sortedArray[randomIndex]=sortedArrayItem;
      }
    cardComponents()
    staticCards() 
  }

//CARDS FLIPPED
let game1;
let game2;
let tried = 0;
let win = 0;
let gameCounter = 1;
let card1;
const cardSelect = document.querySelectorAll('.card');

// SOUND
function sound(){
  let audiolabel = document.createElement("audio")
  audiolabel.setAttribute("src", "buttonClick.mp3")
  audiolabel.play()
}

// RESET SCORE
function resetScore(){
  win=0;
  tried=0;
  document.getElementById('tried').innerHTML='INTENTOS:'+' '+tried;
  document.getElementById("text").innerHTML="Vamos otra vez!!";
}

//RESET BUTTON
function restartButton()  {
  let shuffleBtn= document.getElementById('restartGame');
  shuffleBtn.addEventListener('click', shuffleAgain);

  function shuffleAgain(){
      randomArray();
      resetScore();
    }
}

// SCORE COUNTER
function scoreCounter(){
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
  return tried;
}

//Game moves
  for (let i=0; i<=7; i++){ 
  //a. Flip cards     
  const allCards = cardSelect[i];
  if (allCards !== undefined){
      allCards.addEventListener( 'click', function(){     
      allCards.classList.toggle('is-flipped'); 
      const cardSelected1 = allCards.childNodes;
    
    
      // b. Compare cards: first move
      if (gameCounter == 1){ 
        card1 = allCards;
        game1 = cardSelected1[3].lastChild.textContent;
        gameCounter++;
          }
      
    // c. Compare cards: second move
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
       
          restartButton();    
          sound();
          scoreCounter()
               
       })} // flipGame
      }
      
export default randomArray;

