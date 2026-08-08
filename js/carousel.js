(() => {
  const slides = document.querySelectorAll('.hero-carousel-slide');
  if (slides.length < 2) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5000);
})();
