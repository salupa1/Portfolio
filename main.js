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

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// side nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // Close sidenav on link click
  elems.forEach(function(sidenav, i) {
    sidenav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        instances[i].close();
      });
    });
  });
});
  
  // Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(targetID);
      if (target) {
        const nav = document.querySelector('nav');
        const navHeight = nav ? nav.offsetHeight : 0;
        const buffer = 10; // extra space so text isn't flush with navbar

        console.log(`Navbar height: ${navHeight}`);

        const yOffset = -navHeight - buffer;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        console.log(`Scrolling to ${targetID} at position ${y}`);

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});

const text = `Hi! I’m Saloni, a business and technology professional who turns strategy into scalable solutions. Feel free to check out my work and portfolio below to see how I bring ideas to life.`;

const typingElement = document.getElementById('typing-text');

let index = 0;
const speed = 30; // milliseconds per character

function typeWriter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // Remove blinking cursor styles when done
    typingElement.style.borderRight = 'none';
    typingElement.style.animation = 'none';
  }
}

typeWriter();

