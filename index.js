// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="button-bookmark"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
