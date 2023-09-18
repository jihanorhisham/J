const flashcard = document.querySelector('.flashcard');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let isFlipped = false;

leftButton.addEventListener('click', () => {
  if (!isFlipped) {
    flashcard.style.transform = 'rotateY(-180deg)';
    isFlipped = true;
  } else {
    flashcard.style.transform = 'rotateY(0deg)';
    isFlipped = false;
  }
});

rightButton.addEventListener('click', () => {
  if (!isFlipped) {
    flashcard.style.transform = 'rotateY(180deg)';
    isFlipped = true;
  } else {
    flashcard.style.transform = 'rotateY(0deg)';
    isFlipped = false;
  }
});
