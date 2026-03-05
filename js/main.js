// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Close mobile nav when a non-dropdown link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (!link.parentElement.classList.contains('dropdown')) {
      navLinks.classList.remove('active');
    }
  });
});

// Scroll fade-in animation
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// Contact form (front-end only)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will be in touch soon.');
    contactForm.reset();
  });
}

// Apply form (front-end only)
const applyForm = document.getElementById('apply-form');
if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and contact you soon.');
    applyForm.reset();
  });
}
