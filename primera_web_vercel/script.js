// Filtro por género
const chips = document.querySelectorAll('.chip');
const games = document.querySelectorAll('.game');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    games.forEach(game => {
      game.hidden = filter !== 'todos' && game.dataset.genre !== filter;
    });
  });
});

// Mostrar u ocultar «¿Por qué destaca?»
document.querySelectorAll('.more').forEach(button => {
  button.addEventListener('click', () => {
    const extra = button.nextElementSibling;
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    extra.hidden = open;
  });
});
