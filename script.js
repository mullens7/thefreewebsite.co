'use strict';
const config = window.SITE_CONFIG || {};

// The default link is verified against Gotter’s repository homepage setting.
try {
 const brandUrl = new URL(config.gotterUrl || 'https://gotter.co.uk');
 if (brandUrl.protocol === 'https:') document.querySelectorAll('[data-gotter-link]').forEach(link => { link.href = brandUrl.href; });
} catch {}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// No amount is advertised until the owner confirms one in config.js.
const monthlyCopy = document.getElementById('monthly-copy');
const monthlyFaq = document.getElementById('monthly-faq');
if (config.monthlyFee && monthlyCopy && monthlyFaq) {
 monthlyCopy.textContent = `${config.monthlyFee} per month, covering hosting, maintenance, technical support and your domain under the agreed arrangements.`;
 monthlyFaq.textContent = `The monthly fee is ${config.monthlyFee}, covering hosting, maintenance, technical support and your domain under the agreed arrangements. Any payment processing charges are explained separately before work begins.`;
}

// Header rule appears once the page scrolls.
const header = document.querySelector('.header');
if (header) {
 const mark = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
 mark();
 window.addEventListener('scroll', mark, {passive: true});
}

// Mobile menu: a native dialog contains focus and closes on Escape; focus returns to the Menu button.
const menu = document.getElementById('mobile-menu');
const toggle = document.querySelector('.menu-toggle');
if (menu && toggle && typeof menu.showModal === 'function') {
 toggle.addEventListener('click', () => menu.showModal());
 menu.querySelector('.menu-close').addEventListener('click', () => menu.close());
 menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.close()));
 menu.addEventListener('close', () => toggle.focus({preventScroll: true}));
} else if (toggle) {
 toggle.hidden = true;
}

// Gentle reveals, only when motion is welcome. Content is visible without JavaScript.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const items = document.querySelectorAll('[data-reveal]');
 const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.setAttribute('data-in', ''); observer.unobserve(entry.target); }
 }), {rootMargin: '0px 0px -8% 0px'});
 items.forEach(item => observer.observe(item));
 document.documentElement.dataset.motion = 'ready';
}
