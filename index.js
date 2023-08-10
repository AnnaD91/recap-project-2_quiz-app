// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="button-bookmark"]');
const answerButton = document.querySelector('[data-js="toggle-button"]');

const cardAnswer = document.querySelector('[data-js="card-answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  cardAnswer.classList.toggle("hidden");

  if (cardAnswer.classList.contains("hidden")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
