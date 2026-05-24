(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const STRENGTH = 0.35;
  const RADIUS   = 80;

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < RADIUS) {
        const pull = (RADIUS - dist) / RADIUS;
        el.style.transform = `translate(${dx * STRENGTH * pull}px, ${dy * STRENGTH * pull}px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();
