document.addEventListener('DOMContentLoaded', function() {
  const headerSteps = document.querySelectorAll('.header-step');

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    headerSteps.forEach((step, index) => {
      const stepStart = index * windowHeight;
      const stepEnd = (index + 1) * windowHeight;
      
      if (scrollPosition >= stepStart && scrollPosition < stepEnd) {
        step.style.opacity = 1;
      } else {
        step.style.opacity = 0;
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call to set correct state
});
