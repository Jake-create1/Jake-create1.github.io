(function () {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-role]');
  const noResults = document.getElementById('no-results');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      let visible = 0;

      cards.forEach(card => {
        const matches =
          filter === 'all' ||
          card.dataset.role     === filter ||
          card.dataset.industry === filter ||
          card.dataset.type     === filter;

        if (matches) {
          card.classList.remove('hidden');
          visible++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (noResults) {
        noResults.classList.toggle('visible', visible === 0);
      }
    });
  });
})();
