const startScreen = $('#overlay'); 
const playBtn = $('.btn__reset'); 
const keyboard = $('#qwerty'); 
const phrase = $('#phrase ul'); 
const tries = $('.tries img'); 

let missed = 0; 

const winMessage = document.createElement('h3');
winMessage.textContent = "Congrats! You won!";

const loseMessage = document.createElement('h3');
loseMessage.textContent = "You lost. Better luck next time!";

const phrases = [
  'Brush your teeth',
  'Do your homework',
  'Get good grades',
  'Wash your hands',
  'Eat your vegetables',
  'Be polite to others'
  
];

playBtn.on('click', () => {

  if (playBtn.text() === 'Start Game') {
    phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
    startScreen.hide('clip');

  }

  if (playBtn.text() === 'Play Again') {

    phrase.children().remove();
      phraseArray = getRandomPhraseAsArray(phrases);
      addPhraseToDisplay(phraseArray);
      keyboard.find('button').removeClass('chosen')
      .attr('disabled', false);

    missed = 0;
    tries.attr('src', 'images/liveHeart.png');
    startScreen.hide('clip');

  }

});

function getRandomPhraseAsArray(arr){
  let phraseQty = arr.length;
  let phrasePosition = Math.floor(Math.random() *  phraseQty);
  let selectedPhrase = arr[phrasePosition];
  let splitPhrase = selectedPhrase.split('');
  return splitPhrase;
};

let phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){

  for (let i = 0; i < arr.length; i += 1) {
    const character = arr[i];
    const li = document.createElement('li');
    li.textContent = character;
    if (li.textContent === ' ') {
      li.className = 'space';
    }
    else {
      li.className = 'letter';
    }
    phrase.append(li);
  };
}

function checkLetter(key){
  let response = null;
  const $letters = $('.letter');
  $letters.each( function (index, letter){
    const $letter = $(letter).text().toLowerCase();
    if ($letter === key.textContent) {
      $(letter).addClass('show');

      response = $letter;
    }
  });

  return response;
}

function clearScreen() {
  startScreen.removeClass('start win lose');
  startScreen.find('h3').remove();
}

function endGame(outcome, outcomeMessage) {
  startScreen.addClass(`${outcome}`).delay(400).show('clip');
  $('.title').after(outcomeMessage);
  playBtn.text('Play Again');
}

function checkWin() {
  const $allPhraseLetters = $('.letter').length;
  const $foundLetters = $('.show').length;
  if ($foundLetters === $allPhraseLetters) {
    clearScreen();
    endGame('win', winMessage);

  }

  else if (missed === tries.length) {
    clearScreen();
    endGame('lose', loseMessage);

  }
}

keyboard.on('click', (e) => {
  const key = e.target;
  if (key.tagName === 'BUTTON') {
    $(key).addClass('chosen')
      .attr('disabled', true);

    const letterFound = checkLetter(key);

    if (letterFound === null) {
      tries.eq(missed).attr('src', 'images/lostHeart.png');
      missed += 1;
    }

    checkWin();
  }
});
