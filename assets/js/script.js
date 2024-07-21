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

  // Code for collapsible sections
  const content = document.querySelector('.collapsible-sections');
  const headers = content.querySelectorAll('h3');
  
  headers.forEach((header, index) => {
    // Create button
    const button = document.createElement('button');
    button.className = 'collapsible';
    button.textContent = header.textContent;
    
    // Create content div
    const contentDiv = document.createElement('div');
    contentDiv.className = 'collapsible-content';
    
    // Move content
    let nextEl = header.nextElementSibling;
    while(nextEl && nextEl.tagName !== 'H3') {
      const current = nextEl;
      nextEl = nextEl.nextElementSibling;
      contentDiv.appendChild(current);
    }
    
    // Replace header with button and content
    header.parentNode.replaceChild(contentDiv, header);
    contentDiv.parentNode.insertBefore(button, contentDiv);
    
    // Add click event
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      if (contentDiv.style.maxHeight) {
        contentDiv.style.maxHeight = null;
      } else {
        contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
      }
    });
  });
});
