// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal — stagger siblings that enter together
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    const entering = entries.filter((e) => e.isIntersecting);
    entering.forEach((entry, i) => {
      entry.target.style.setProperty('--d', `${Math.min(i * 0.09, 0.45)}s`);
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Mail button: Gmail compose tab on desktop, mail app (mailto) on mobile.
// The href is already mailto — only upgrade it on non-touch/desktop devices.
const mailBtn = document.getElementById('mailBtn');
const EMAIL = 'sreeabirammandava@gmail.com';
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (!isMobile) {
  mailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
  mailBtn.target = '_blank';
  mailBtn.rel = 'noopener noreferrer';
}
