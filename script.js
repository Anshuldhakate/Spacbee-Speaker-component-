


const nextArrow = document.querySelector('.next-arrow');
const prevArrow = document.querySelector('.prev-arrow');
const carousel = document.querySelector('.speakers-carousel');
const detailedView = document.querySelector('.detailed-view');
const closeButton = document.querySelector('.close-button');
const speakerCards = document.querySelectorAll('.speaker-card');

// Elements inside the detailed view
const detailedImg = document.getElementById('detailed-img');
const detailedName = document.getElementById('detailed-name');
const detailedRole = document.getElementById('detailed-role');
const detailedCompany = document.getElementById('detailed-company');

// Function to rotate cards
function rotateNext() {
  const firstCard = carousel.firstElementChild;
  carousel.appendChild(firstCard);
}

function rotatePrev() {
  const lastCard = carousel.lastElementChild;
  carousel.insertBefore(lastCard, carousel.firstElementChild);
}

// Show the detailed view with selected card data
function showDetailedView(card) {
  detailedImg.src = card.dataset.img;
  detailedName.textContent = card.dataset.name;
  detailedRole.textContent = card.dataset.role;
  detailedCompany.textContent = card.dataset.company;

  detailedView.classList.add('visible');
}

// Close the detailed view
function closeDetailedView() {
  detailedView.classList.remove('visible');
}

// Add event listeners to cards
speakerCards.forEach(card => {
  card.addEventListener('click', () => showDetailedView(card));
});

closeButton.addEventListener('click', closeDetailedView);
nextArrow.addEventListener('click', rotateNext);
prevArrow.addEventListener('click', rotatePrev);
