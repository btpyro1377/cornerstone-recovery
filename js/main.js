// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
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
      hamburger.classList.remove('open');
    }
  });
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
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

// Form submission handler (Formspree via AJAX with inline success message)
function handleFormSubmit(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
      } else {
        form.style.display = 'none';
        success.style.display = 'block';
      }
    }).catch(() => {
      form.style.display = 'none';
      success.style.display = 'block';
    });
  });
}

handleFormSubmit('contact-form', 'contact-success');
handleFormSubmit('apply-form', 'apply-success');
