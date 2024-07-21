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

  // New code for collapsible sections
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
    // Initialize all sections as collapsed
    var content = coll[i].nextElementSibling;
    content.style.maxHeight = null;
  }
});
