const overlay = document.getElementById('overlay');
const closeCardBtn = document.getElementById('closeCardBtn');

// Function to show the card
function showCard() {
  overlay.classList.remove('hidden');
  document.body.classList.add('noscroll');
}

// Function to hide the card
function hideCard() {
  overlay.classList.add('hidden');
  document.body.classList.remove('noscroll');
}

// Apply hideCard function to close button
closeCardBtn.addEventListener('click', hideCard);

// Example: Attach showCard to multiple buttons
const showCardBtns = document.querySelectorAll('.showCardBtn');
showCardBtns.forEach(btn => {
  btn.addEventListener('click', showCard);
});

