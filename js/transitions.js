(function () {
  const overlay = document.querySelector('.page-overlay');
  const main    = document.querySelector('main');
  if (!overlay || !main) return;

  // Entrance animation
  main.classList.add('page-enter');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      main.classList.remove('page-enter');
    });
  });

  // Exit animation on internal link clicks
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('http') || href.startsWith('//') ||
        link.getAttribute('target') === '_blank') return;

    e.preventDefault();
    overlay.classList.add('active');
    main.classList.add('page-enter');

    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });

  // If navigating back, reset overlay
  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      overlay.classList.remove('active');
      main.classList.remove('page-enter');
    }
  });
})();
