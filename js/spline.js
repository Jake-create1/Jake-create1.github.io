(function () {
  const wrapper = document.querySelector('.spline-wrapper');
  if (!wrapper) return;

  const src = wrapper.dataset.src;
  if (!src) return;

  // Respect reduced motion — show fallback only, no 3D scene
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    wrapper.querySelector('.spline-fallback').style.cssText =
      'background: radial-gradient(ellipse at 40% 50%, rgba(255,107,43,0.15) 0%, transparent 60%), var(--bg-2); animation: none;';
    wrapper.querySelector('.spline-fallback::after') && null;
    return;
  }

  // Lazy-load the iframe when the wrapper enters the viewport
  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('title', '3D animated design scene');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('allow', 'autoplay');

    iframe.addEventListener('load', () => {
      wrapper.classList.add('loaded');
    });

    // Fallback: mark loaded after 8s even if load event doesn't fire
    setTimeout(() => wrapper.classList.add('loaded'), 8000);

    wrapper.appendChild(iframe);
  }, { threshold: 0.1 });

  observer.observe(wrapper);
})();
