const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');

if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => mobile.classList.remove('open'));
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const contactButton = document.querySelector('.contact-action .btn');
if (contactButton) {
  document.querySelectorAll('.service-card a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
      const serviceName = link.closest('.service-card')
        ?.querySelector('h3')
        ?.innerText
        .replace(/\s+/g, ' ')
        .trim();

      if (serviceName) {
        const subject = `${serviceName} - Gurkha Consulting Group`;
        contactButton.href = `mailto:contact@gurkhaconsultinggroup.com?subject=${encodeURIComponent(subject)}`;
      }
    });
  });
}
