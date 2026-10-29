'use strict';
const config = window.SITE_CONFIG || {};
// The default link is verified against Gotter’s repository homepage setting.
try {
 const brandUrl = new URL(config.gotterUrl || 'https://gotter.co.uk');
 if (brandUrl.protocol === 'https:') document.querySelectorAll('[data-gotter-link]').forEach(link => { link.href = brandUrl.href; });
} catch {}
document.getElementById('year').textContent = new Date().getFullYear();
if (config.monthlyFee) {
 document.getElementById('monthly-copy').textContent = `${config.monthlyFee} per month for hosting, maintenance, technical support and your domain under the agreed arrangements.`;
 document.getElementById('monthly-faq').textContent = `The monthly fee is ${config.monthlyFee}, covering hosting, maintenance, technical support and your domain under the agreed arrangements. Payment processing charges are explained separately before work begins.`;
}
if (config.canonicalUrl) {
 try { const url = new URL(config.canonicalUrl); if(url.protocol === 'https:') { const link = document.querySelector('link[rel=canonical]') || document.createElement('link'); link.rel='canonical'; link.href=url.href; if (!link.parentNode) document.head.append(link); } } catch {}
}
// Hide the mobile action while the contact section is visible, so it never covers the contact details.
if ('IntersectionObserver' in window) {
 const action = document.querySelector('.mobile-cta');
 if (action) new IntersectionObserver(entries => {
   action.classList.toggle('is-hidden', entries[0].isIntersecting);
 }, {threshold: 0}).observe(document.getElementById('start'));
}


const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenu) {
 mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileMenu.open = false; }));
 document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.open) { mobileMenu.open = false; mobileMenu.querySelector('summary').focus(); }
 });
 document.addEventListener('click', event => {
  if (mobileMenu.open && !mobileMenu.contains(event.target)) mobileMenu.open = false;
 });
}
