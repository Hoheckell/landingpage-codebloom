// Reveal on scroll (enhancement — sem JS, conteúdo visível via fallback html.no-js no CSS)
document.documentElement.classList.remove('no-js');

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target); // revela uma vez só
    }
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
