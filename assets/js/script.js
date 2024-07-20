document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const mainContent = document.querySelector('.main-content');
  const headerSteps = document.querySelectorAll('.header-step');
  let lastScrollPosition = 0;
  let ticking = false;

  function handleScroll() {
    lastScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeaderOpacity(lastScrollPosition);
        updateStepVisibility(lastScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateHeaderOpacity(scrollPosition) {
    const windowHeight = window.innerHeight;
    const totalHeaderHeight = windowHeight * 3;
    const opacity = Math.max(0, Math.min(1, 1 - ((scrollPosition - (totalHeaderHeight - windowHeight)) / windowHeight)));
    header.style.opacity = opacity;
    header.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
  }

  function updateStepVisibility(scrollPosition) {
    const windowHeight = window.innerHeight;
    headerSteps.forEach((step, index) => {
      const stepStart = index * windowHeight;
      const stepEnd = (index + 1) * windowHeight;
      const visibility = Math.max(0, Math.min(1, 1 - Math.abs((scrollPosition - (stepStart + windowHeight / 2)) / windowHeight)));
      step.style.opacity = visibility;
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
});
