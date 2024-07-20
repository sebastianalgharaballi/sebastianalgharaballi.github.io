document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const headerSteps = document.querySelectorAll('.header-step');
  const mainContent = document.querySelector('.main-content');

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Update visibility of each step
    headerSteps.forEach((step, index) => {
      const stepStart = index * windowHeight;
      const stepEnd = (index + 1) * windowHeight;
      
      if (scrollPosition >= stepStart && scrollPosition < stepEnd) {
        step.style.opacity = 1;
      } else {
        step.style.opacity = 0;
      }
    });

    // Fade out header after last step
    if (scrollPosition > windowHeight * 2) {
      const fadeOutProgress = (scrollPosition - windowHeight * 2) / windowHeight;
      header.style.opacity = Math.max(0, 1 - fadeOutProgress);
    } else {
      header.style.opacity = 1;
    }

    // Move main content
    if (scrollPosition > windowHeight * 2) {
      const translateY = Math.max(0, scrollPosition - windowHeight * 3);
      mainContent.style.transform = `translateY(-${translateY}px)`;
    } else {
      mainContent.style.transform = 'translateY(0)';
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call to set correct state
});
