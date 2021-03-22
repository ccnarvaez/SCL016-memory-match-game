
//document.getElementById('root').appendChild(App());

import sortedArray from './components/App.js';
import fisherRestart from './components/App.js';
import webDev_Definition from '../data/webdev/webDev_Definition.js';

// App structure: displays and buttons
   
//1. "Jugar"/ play button and display change (from homepage to game page)

let homePageBtn = document.getElementById('homePageBtn');
homePageBtn.addEventListener('click', homePageMove);


function homePageMove(){
    document.getElementById('homePage').style.display='none';
    document.getElementById('gamePage').style.display='block';
    fisherRestart();
}


const cardSelect = document.querySelectorAll('.card');



//flip cards
let game1;
let game2;
let tried = 0;
let win = 0;
let gameCounter = 1;
let card1;

for (let i=0; i<=7; i++){ 
    //a. Flip cards    
    let allCards = cardSelect[i];
    allCards.addEventListener( "click", function() {
    allCards.classList.toggle("is-flipped"); 
    //console.log(allCards);
    let cardSelected1 = allCards.childNodes;
    //console.log(cardSelected1);


    //  get geeky webdev messages
    let infoArray = Array.from(webDev_Definition.information); // Definitions' array
    let geekySpeaks= document.querySelector('.contentBackground'); // html position selection

        // **Necesito conseguir una manera de sincronizar la carta clickeada con la info de infoArray**
        geekySpeaks.textContent= infoArray[i].info;
        //**************
    
    // b. Compare cards: first game
    if (gameCounter == 1){
        card1 = allCards;
        console.log("esta deberia ser la clase" + card1);
        game1 = cardSelected1[3].lastChild.textContent;
        console.log("la jugada uno es:" + game1);
        gameCounter++;
    }

    // b. Compare cards: second game
    else if (gameCounter == 2){
        game2 = cardSelected1[3].lastChild.textContent;
        console.log("la jugada 2 es:" + game2);
        gameCounter++;
        if (game1 != game2){
            console.log("son distintas");
            setTimeout(() => { allCards.classList.toggle("is-flipped"), card1.classList.toggle("is-flipped");  }, 950);
            gameCounter = 1;
            tried++;
            
           
        }

    
    // c. Same cards   
 
            else if (game1 == game2){
                gameCounter = 1;
                win++;
                tried++;
               // console.log(win);

                //c.1. Victory
                if (win == 4){
                    setTimeout(victoryPage, 1500);   
                }
            
                
            }

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
     
})      
}

           
//2. "?"/ Instructions button and display moving (from homepage to instructions page)
let instructionsBtn = document.getElementById('instructionsBtn');
instructionsBtn.addEventListener('click', instructionsMove);

function instructionsMove(){
    document.getElementById('homePage').style.display='none';
    document.getElementById('instructionsPage').style.display='inline';
}

//3. Close instructions
let closeInstructionsBtn=document.getElementById('closeInstructions');
closeInstructionsBtn.addEventListener('click', closeInstructions);

function closeInstructions(){
    document.getElementById('instructionsPage').style.display='none';
    document.getElementById('homePage').style.display='block';
}

// 4. Close game page
let closeGameBtn= document.getElementById('closeGamePage');
closeGameBtn.addEventListener('click', closeGame);

function closeGame(){
    document.getElementById('gamePage').style.display='none';
    document.getElementById('homePage').style.display='block';
    
}

// 5.Restart button- gamePage location
let shuffleBtn= document.getElementById('restartGame');
shuffleBtn.addEventListener('click', shuffleAgain);

function shuffleAgain(){
    fisherRestart();
    win = 0;
    tried=0;
    document.getElementById('tried').innerHTML=tried;
}

//Victory Page access- go back 
function victoryPage(){
    document.getElementById('gamePage').style.display='none';
    document.getElementById('victoryPage').style.display='block';
}

let goBackGP= document.getElementById('VictoryGoBack');
goBackGP.addEventListener('click', goBackGame)

function goBackGame(){
    document.getElementById('victoryPage').style.display='none'; 
    document.getElementById('gamePage').style.display='block';
    fisherRestart();
    win = 0;
    tried=0;
    document.getElementById('tried').innerHTML=tried;
    
    
}


