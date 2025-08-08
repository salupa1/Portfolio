// Initialize Materialize components if needed
document.addEventListener('DOMContentLoaded', () => {
    // Scrollspy for nav highlight
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, { scrollOffset: 100 });
  
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });
  });
  
  // Typed.js intro text
  const typed = new Typed('#typed', {
    strings: [
      "Hi, I'm Saloni — Business Professional and HR Specialist",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: false,
    showCursor: true,
    cursorChar: '|',
  });
  
  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(targetID);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Simple form submit handler (for demo, no backend)
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    M.toast({html: 'Thank you for reaching out! I will get back to you soon.', classes: 'rounded'});
    e.target.reset();
  });
  