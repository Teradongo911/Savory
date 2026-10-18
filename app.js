const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const foodCards = document.querySelectorAll('[data-category]');
const searchInput = document.querySelector('#menu-search');
let activeFilter = 'all';

function filterMenu() {
  const searchTerm = (searchInput?.value || '').trim().toLowerCase();
  let visibleCount = 0;
  foodCards.forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchMatch = card.textContent.toLowerCase().includes(searchTerm);
    const visible = categoryMatch && searchMatch;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  const empty = document.querySelector('#empty-state');
  if (empty) empty.hidden = visibleCount !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  filterMenu();
}));
if (searchInput) searchInput.addEventListener('input', filterMenu);

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const notice = document.querySelector('#form-notice');
    if (notice) {
      notice.textContent = 'Thanks! This demo form works in your browser, but it does not send a message. Connect a backend or form service to receive enquiries.';
      notice.classList.add('show');
    }
    contactForm.reset();
  });
}

document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());


/* Motion enhancements */
document.documentElement.classList.add('js-motion');

// Reveal sections as they enter the viewport, with gentle staggered timing.
const revealTargets = document.querySelectorAll(
  '.section-head, .food-card, .feature-band, .testimonial, .story-image-wrap, .story-copy, .value-card, .contact-panel, .contact-form, .hours, .cta-inner'
);

revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  if (element.classList.contains('story-copy')) element.classList.add('reveal-from-right');
  if (element.classList.contains('story-image-wrap')) element.classList.add('reveal-from-left');
  const siblings = element.parentElement ? [...element.parentElement.children].filter(child => child.classList.contains('reveal')) : [];
  const stagger = siblings.length > 1 ? siblings.indexOf(element) * 100 : (index % 3) * 45;
  element.style.setProperty('--reveal-delay', `${Math.min(stagger, 220)}ms`);
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}
