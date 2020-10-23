

// wybor twojego ruchu
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
    playerMove = 'papier';
  }

if(playerInput == '3'){
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
  
  if(randomNumber == '2'){
    computerMove = 'papier';
    }
  
  if(randomNumber == '3'){
    computerMove = 'nożyce';
  }

printMessage('Komputer: ' + computerMove);

//wynik gry  gdy twoj ruch to kamień

if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Wynik meczu : Remis, spróbuj jeszcze raz!');
}

else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wynik meczu: Przegrywasz, spróbuj jeszcze raz!');
}

else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wynik meczu: Wygrywasz!');
}

//wynik gry  gdy twoj ruch to papier

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wynik meczu: Wygrywasz!');
}

else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Wynik meczu : Remis, spróbuj jeszcze raz');
}

else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wynik meczu: Przegrywasz, spróbuj jeszcze raz!');
}

//wynik gry  gdy twoj ruch to nożyce

if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wynik meczu: Przegrywasz, spróbuj jeszcze raz!');
}

else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wynik meczu: Wygrywasz!');
}

else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Wynik meczu : Remis, spróbuj jeszcze raz');
}

if( playerMove == 'nieznany ruch'){
    printMessage('Wykonałeś nieznany ruch.Wynik meczu nierostrzygnięty!');
}





