
 /*                                         // wybor twojego ruchu
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
playerMove = 'kamień';
} else if(playerInput == '2'){
playerMove = 'papier';
} else if(playerInput == '3'){
 playerMove = 'nożyce';
}  
printMessage('Twój ruch to: ' + playerMove);
                                                                   // teraz komputera ruch losowy
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba komputera to: ' + randomNumber);
let computerMove = 'nieznany ruch';
if(randomNumber == '1'){
computerMove = 'kamień';
} else if(randomNumber == '2'){
computerMove = 'papier';
} else if(randomNumber == '3'){
computerMove = 'nożyce';
}
printMessage('Komputer: ' + computerMove);
                                                                      //wygrane

if( playerMove == 'kamień' && computerMove == 'nożyce'){
 printMessage('Wynik meczu: Wygrywasz!');
} else if( playerMove == 'papier' && computerMove == 'kamień'){
 printMessage('Wynik meczu: Wygrywasz!');
} else if( playerMove == 'nożyce' && computerMove == 'papier'){
printMessage('Wynik meczu: Wygrywasz!');
} else if( playerMove == computerMove ){                                 //remis
printMessage('Wynik meczu : Remis, spróbuj jeszcze raz');
} else if( playerMove == 'nieznany ruch'){                              // bledny ruch
printMessage('Wykonałeś nieznany ruch.Wynik meczu nierostrzygnięty!');
} else {
printMessage('Przegrałeś!')                                           // przegrana
}

*/
{
const playGame = function(playerInput) {
clearMessages();
  //wynik wyboru gracza i komputera
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
}
//wybor gracza 
console.log('Gracz wpisał: ' + playerInput);
const playerMove = getMoveName(playerInput);
// wybor komputera
const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
const computerMove = getMoveName(randomNumber);
//Rezultat wyboru gracza i komputera
const displayResult = function(argComputerMove, argPlayerMove) {
  console.log('moves:', argComputerMove, argPlayerMove);
  //wygrane
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wynik meczu: Wygrałeś!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wynik meczu: Wygrałeś!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wynik meczu: Wygrałeś!');
  } else if (argPlayerMove == argComputerMove) {                                 //remis
    printMessage('Wynik meczu : Remis, spróbuj jeszcze raz');
  } else if (argPlayerMove == 'nieznany ruch') {                                  // bledny ruch
    printMessage('Wykonałeś nieznany ruch.Wynik meczu nierostrzygnięty!');
  } else {  
    printMessage('Wynik meczu: Przegrałeś!');                                                  // przegrana
  }
}
printMessage('Twój ruch to: ' + playerMove);
printMessage('Komputera ruch to: ' + computerMove);
displayResult(computerMove, playerMove)
}

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

}






























