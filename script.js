'use strict';
const config = window.SITE_CONFIG || {};
// The default link is verified against Gotter’s repository homepage setting.
try {
 const brandUrl = new URL(config.gotterUrl || 'https://gotter.co.uk');
 if (brandUrl.protocol === 'https:') document.querySelectorAll('[data-gotter-link]').forEach(link => { link.href = brandUrl.href; });
} catch {}
const email = String(config.enquiryEmail || '').trim();
const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[\r\n]/.test(email);
document.getElementById('year').textContent = new Date().getFullYear();
if (config.monthlyFee) {
 document.getElementById('monthly-copy').textContent = `${config.monthlyFee} per month for hosting, maintenance, technical support and your domain under the agreed arrangements.`;
 document.getElementById('monthly-faq').textContent = `The monthly fee is ${config.monthlyFee}, covering hosting, maintenance, technical support and your domain under the agreed arrangements. Payment processing charges are explained separately before work begins.`;
}
if (config.canonicalUrl) {
 try { const url = new URL(config.canonicalUrl); if(url.protocol === 'https:') { const link = document.querySelector('link[rel=canonical]') || document.createElement('link'); link.rel='canonical'; link.href=url.href; if (!link.parentNode) document.head.append(link); } } catch {}
}
if(emailIsValid) {
 document.getElementById('contact-status').textContent = `Get in touch at ${email}, or prepare an enquiry below.`;
 document.getElementById('form-note').textContent = 'Review your enquiry, then open your email app to send it to Gotter. This website does not submit or store your form details.';
 document.querySelectorAll('[data-contact-email]').forEach(link => { link.href = `mailto:${email}`; link.textContent = email; link.hidden = false; });
}
let brief = '';
document.getElementById('brief-form').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.currentTarget);
 const business = String(data.get('business') || '').trim() || 'Not specified';
 brief = `Website enquiry — The Free Website Co., an initiative by Gotter\n\nName: ${data.get('name')}\nBusiness: ${business}\nEmail: ${data.get('email')}\nLooking for: ${data.get('service')}\n\n${data.get('idea')}`;
 document.getElementById('prepared-brief').value = brief;
 document.getElementById('brief-result').hidden = false;
 document.getElementById('result-message').textContent = emailIsValid ? 'Your enquiry is ready. Choose Email enquiry to open your email app, then send it from there. Nothing has been sent yet.' : 'Your brief is ready to copy or save. No enquiry has been sent.';
 if(emailIsValid) { const link = document.getElementById('email-brief'); link.hidden=false; link.href=`mailto:${email}?subject=${encodeURIComponent('Website enquiry: '+business)}&body=${encodeURIComponent(brief)}`; }
 document.getElementById('prepared-brief').focus();
});
document.getElementById('copy-brief').addEventListener('click', async () => {
 const field = document.getElementById('prepared-brief');
 try { await navigator.clipboard.writeText(brief); document.getElementById('result-message').textContent = 'Brief copied.'; } catch { field.focus(); field.select(); document.getElementById('result-message').textContent = 'Select and copy the brief above.'; }
});
document.getElementById('download-brief').addEventListener('click', () => {
 const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
 const a=document.createElement('a'); a.href=url; a.download='my-website-brief.txt'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
});

// Hide the mobile action while the enquiry section is visible, so it never obscures the form.
if ('IntersectionObserver' in window) {
 const action = document.querySelector('.mobile-cta');
 if (action) new IntersectionObserver(entries => {
   action.classList.toggle('is-hidden', entries[0].isIntersecting);
 }, {threshold: 0}).observe(document.getElementById('start'));
}

// Three live design explorations. These are illustrative, never presented as client work.
const conceptThemes = {
 cafe: {brand:'DAYBREAK', eyebrow:'GOOD MORNINGS START HERE.', heading:['A little slower.','A little better.'], description:['Great coffee. Something freshly baked.','A good reason to stay a while.'], link:'Pull up a chair ↗', nav:'OUR STORY   THE MENU   FIND US ↗', foot:'YOUR LOCAL FAVOURITE, IN THE MAKING.', counter:'01 — 03'},
 studio: {brand:'FORM / STUDIO', eyebrow:'A LITTLE SPACE. A BIG DIFFERENCE.', heading:['Find your rhythm.','Make it yours.'], description:['Room to move. Space to reset.','A studio that feels like you.'], link:'Find your class ↗', nav:'THE STUDIO   CLASSES   SAY HELLO ↗', foot:'LESS PRESSURE. MORE POSSIBILITY.', counter:'02 — 03'},
 trade: {brand:'BUILT RIGHT.', eyebrow:'GOOD WORK SPEAKS FOR ITSELF.', heading:['Built right.','From day one.'], description:['Care in the details. Pride in the finish.','Local expertise, properly delivered.'], link:'Let’s talk about your project ↗', nav:'OUR WORK   SERVICES   GET IN TOUCH ↗', foot:'YOUR NEXT PROJECT STARTS HERE.', counter:'03 — 03'}
};
const nameInput = document.getElementById('preview-name');
const previewShell = document.querySelector('[data-preview-theme]');
if (nameInput && previewShell) {
 let selectedTheme = 'cafe';
 const splitLine = (id, lines) => {
  const target = document.getElementById(id);
  target.replaceChildren(document.createTextNode(lines[0]), document.createElement('br'), document.createTextNode(lines[1]));
 };
 const showConcept = theme => {
  const content = conceptThemes[theme];
  if (!content) return;
  selectedTheme = theme;
  previewShell.dataset.previewTheme = theme;
  document.getElementById('concept-brand').textContent = nameInput.value.trim() || content.brand;
  document.getElementById('concept-eyebrow').textContent = content.eyebrow;
  document.getElementById('concept-nav-copy').textContent = content.nav;
  document.getElementById('concept-link').textContent = content.link;
  document.getElementById('concept-foot').textContent = content.foot;
  document.getElementById('concept-counter').textContent = content.counter;
  splitLine('concept-heading', content.heading);
  splitLine('concept-description', content.description);
  document.querySelectorAll('[data-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.theme === theme)));
  const concept = document.getElementById('website-concept');
  concept.classList.remove('is-changing');
  // A frame boundary restarts the short transition without an animation loop.
  requestAnimationFrame(() => concept.classList.add('is-changing'));
 };
 document.querySelectorAll('[data-theme]').forEach(button => button.addEventListener('click', () => showConcept(button.dataset.theme)));
 nameInput.addEventListener('input', () => { document.getElementById('concept-brand').textContent = nameInput.value.trim() || conceptThemes[selectedTheme].brand; });
}
// Mobile navigation closes after a destination is chosen, including keyboard activation.
const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileMenu.open = false; }));
