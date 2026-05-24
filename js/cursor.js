(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot  = document.querySelector('.cursor__dot');
  const ring = document.querySelector('.cursor__ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;
  let raf;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(animateRing);
  }
  raf = requestAnimationFrame(animateRing);

  const interactives = 'a, button, [role="button"], input, textarea, select, .magnetic, .filter-btn, .project-card';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-clicking'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-clicking'));
})();
