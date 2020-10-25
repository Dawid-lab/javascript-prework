
// wybor twojego ruchu
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier';
  }

else if(playerInput == '3'){
    playerMove = 'nożyce';
}  

printMessage('Twój ruch to: ' + playerMove);

// teraz komputera ruch losowy

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba komputera to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == '1'){
    computerMove = 'kamień';
  }

else if(randomNumber == '2'){
    computerMove = 'papier';
    }

else if(randomNumber == '3'){
    computerMove = 'nożyce';
  }

printMessage('Komputer: ' + computerMove);

//wygrane

if( playerMove == 'kamień' && computerMove == 'nożyce'){
    printMessage('Wynik meczu: Wygrywasz!');
}

else if( playerMove == 'papier' && computerMove == 'kamień'){
    printMessage('Wynik meczu: Wygrywasz!');
}

else if( playerMove == 'nożyce' && computerMove == 'papier'){
    printMessage('Wynik meczu: Wygrywasz!');
}

//remis

else if( playerMove == computerMove ){
  printMessage('Wynik meczu : Remis, spróbuj jeszcze raz');
}
// bledny ruch
else if( playerMove == 'nieznany ruch'){
  printMessage('Wykonałeś nieznany ruch.Wynik meczu nierostrzygnięty!');
}
// przegrana
else {
  printMessage('Przegrałeś!')
}

function buttonClicked(){
  printMessage('Guzik został kliknięty');
}

let testButton = document.getElementById('test-button');

testButton.addEventListener('click', buttonClicked);







