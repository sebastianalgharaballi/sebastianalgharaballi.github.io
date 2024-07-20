document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const mainContent = document.querySelector('.main-content');
  
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollPosition > windowHeight * 0.7) {
      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
    } else {
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    }
    
    mainContent.style.transform = `translateY(${Math.max(0, scrollPosition * 0.5)}px)`;
  }
  
  window.addEventListener('scroll', handleScroll);
});
