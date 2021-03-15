import App from './components/App.js';

document.getElementById('root').appendChild(App());

// App structure: displays and buttons
   
//1. "Jugar"/ play button and display change (from homepage to game page)

let homePageBtn = document.getElementById('homePageBtn');
homePageBtn.addEventListener('click', homePageMove);


function homePageMove(){
    document.getElementById('homePage').style.display='none';
    document.getElementById('gamePage').style.display='block';
}
document.getElementById("0").addEventListener("click", Prueba);
function Prueba() {
    let imageCard = document.getElementById("11");
    imageCard.src = "https://simpleicons.org/icons/javascript.svg";
    document.getElementById("1").style.background = "#F7DF1E";
    console.log();
}
//const cardSelect = document.getElementsByClassName("card");
const cardSelect = document.querySelectorAll(".card");
console.log(cardSelect[0]);
//flip cards
 let card1 = document.getElementById("1");
  card1.addEventListener( "click", function() {
  card1.classList.toggle("is-flipped");
  //let devValue2=document.getElementById("22").firstChild.nodeValue;
  //console.log(devValue2);
  //if (devValue2 == "back") {
    //setTimeout(() => { card.classList.toggle("is-flipped"); }, 1500);
    
    //console.log("detecta");
  //}
 })
  let card2 = document.getElementById("2");
  card2.addEventListener( "click", function() {
  card2.classList.toggle("is-flipped");
 })
//}


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

//Victory Page access- go back 

let goToVictoryPage= document.getElementById('vPageBtn');
goToVictoryPage.addEventListener('click', victoryPage);

function victoryPage(){
    document.getElementById('gamePage').style.display='none';
    document.getElementById('victoryPage').style.display='block';

}

let goBackGP= document.getElementById('VictoryGoBack');
goBackGP.addEventListener('click', goBackGame)

function goBackGame(){
    document.getElementById('victoryPage').style.display='none'; 
    document.getElementById('gamePage').style.display='block';
      
}
