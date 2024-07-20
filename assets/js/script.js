document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const mainContent = document.querySelector('.main-content');
  let lastScrollPosition = 0;
  let ticking = false;

  function handleScroll() {
    lastScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeaderOpacity(lastScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateHeaderOpacity(scrollPosition) {
    const windowHeight = window.innerHeight;
    const opacity = Math.max(0, Math.min(1, 1 - (scrollPosition / (windowHeight * 0.5))));
    header.style.opacity = opacity;
    header.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
});
