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

  // Fetch and process README content
  fetch('README.md')
    .then(response => response.text())
    .then(text => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
      const container = document.getElementById('collapsible-sections');
      
      // Split content into sections based on h3 headers
      const sections = html.split('<h3');
      sections.shift(); // Remove content before the first h3
      
      sections.forEach(section => {
        const sectionHtml = '<h3' + section;
        const titleMatch = sectionHtml.match(/<h3.*?>(.*?)<\/h3>/);
        if (titleMatch) {
          const title = titleMatch[1];
          const content = sectionHtml.replace(/<h3.*?<\/h3>/, '');
          
          const button = document.createElement('button');
          button.className = 'collapsible';
          button.textContent = title;
          
          const div = document.createElement('div');
          div.className = 'content';
          div.innerHTML = content;
          
          container.appendChild(button);
          container.appendChild(div);
        }
      });
      
      // Add click event to collapsible buttons
      const coll = document.getElementsByClassName("collapsible");
      for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
        });
      }
    });
});
