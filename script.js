const projectContainer = document.querySelector("#project-container");
const prevButton = document.querySelector("#carousel-prev-button");
const nextButton = document.querySelector("#carousel-next-button");

const projectCards = document.querySelectorAll(".project-card");
const currentOpenedCardSpan = document.querySelector("#carousel-current-card");
const totalProjectCardsSpan = document.querySelector("#carousel-total-cards");

let activeCardIndex = 0;
totalProjectCardsSpan.innerText = projectCards.length;

function renderCarousel() {
  getCurrentOpenedCard();
  disableButton();
  switchProjectCard();
}

function switchProjectCard() {
  const translateXPercentValue = activeCardIndex * -100;
  projectCards.forEach((projectCard) => {
    projectCard.style.transform = `translateX(${translateXPercentValue}%)`;
  });
}

function disableButton() {
  if (activeCardIndex <= 0) {
    prevButton.setAttribute("disabled", true);
  } else {
    prevButton.removeAttribute("disabled");
  }

  if (activeCardIndex + 1 >= projectCards.length) {
    nextButton.setAttribute("disabled", true);
  } else {
    nextButton.removeAttribute("disabled");
  }
}

function getCurrentOpenedCard() {
  currentOpenedCardSpan.innerText = activeCardIndex + 1;
}

prevButton.addEventListener("click", () => {
  if (activeCardIndex > 0) {
    activeCardIndex--;
  }
  renderCarousel();
});

nextButton.addEventListener("click", () => {
  if (activeCardIndex + 1 < projectCards.length) {
    activeCardIndex++;
  }
  renderCarousel();
});

renderCarousel();
