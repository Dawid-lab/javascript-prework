
/*                                            // wybor twojego ruchu
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
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);
// wybor komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

//Rezultat wyboru gracza i komputera
function displayResult(argComputerMove, argPlayerMove) {
  console.log('moves:', argComputerMove, argPlayerMove);
  //wygrane
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wynik meczu: Wygrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wynik meczu: Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wynik meczu: Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {                              //remis
    printMessage('Wynik meczu : Remis, spróbuj jeszcze raz');
  } else if (argPlayerMove == 'nieznany ruch') {                              // bledny ruch
    printMessage('Wykonałeś nieznany ruch.Wynik meczu nierostrzygnięty!');
  } else {
    printMessage('Przegrałeś!');                                                // przegrana
  }
}


displayResult(argComputerMove, argPlayerMove)




















