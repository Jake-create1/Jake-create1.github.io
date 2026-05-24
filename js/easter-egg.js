(function () {
  // Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
  const CODE = [38,38,40,40,37,39,37,39,66,65];
  let idx = 0;

  document.addEventListener('keydown', e => {
    if (e.keyCode === CODE[idx]) {
      idx++;
      if (idx === CODE.length) {
        idx = 0;
        activate();
      }
    } else {
      idx = 0;
    }
  });

  function activate() {
    const root = document.documentElement;
    const original = getComputedStyle(root).getPropertyValue('--accent').trim();

    // Cycle through party colors
    const colors = ['#FF6B2B','#FF2B6B','#2BFF6B','#6B2BFF','#2B6BFF','#FFD700'];
    let i = 0;
    const interval = setInterval(() => {
      root.style.setProperty('--accent', colors[i % colors.length]);
      i++;
    }, 180);

    // Show toast
    const toast = document.createElement('div');
    toast.textContent = '🎉 You found it.';
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: '#1E1E1E',
      color: '#EDEBE6',
      padding: '0.75rem 1.5rem',
      borderRadius: '100px',
      fontSize: '0.875rem',
      fontFamily: 'var(--font-display)',
      fontWeight: '700',
      zIndex: '9998',
      border: '1px solid rgba(255,255,255,0.12)',
      opacity: '0',
      transition: 'opacity 0.3s, transform 0.3s',
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      clearInterval(interval);
      root.style.setProperty('--accent', original);
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
})();
