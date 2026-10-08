'use strict';
const config = window.SITE_CONFIG || {};
const email = String(config.enquiryEmail || '').trim();
const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[\r\n]/.test(email);
document.getElementById('year').textContent = new Date().getFullYear();
if (config.monthlyFee) {
 document.getElementById('monthly-copy').textContent = `${config.monthlyFee} per month for hosting, maintenance and your domain.`;
 document.getElementById('monthly-faq').textContent = `The monthly fee is ${config.monthlyFee}, covering hosting, maintenance and your domain. Payment processing charges are explained separately before work begins.`;
}
if (config.canonicalUrl) {
 try { const url = new URL(config.canonicalUrl); if(url.protocol === 'https:') { const link = document.createElement('link'); link.rel='canonical'; link.href=url.href; document.head.append(link); } } catch {}
}
if(emailIsValid) {
 document.getElementById('contact-status').textContent = `Get in touch at ${email}, or prepare an enquiry below.`;
 document.getElementById('form-note').textContent = 'Your details stay in this browser. Prepare your enquiry, then send it using your email app.';
}
let brief = '';
document.getElementById('brief-form').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.currentTarget);
 brief = `Website enquiry — The Free Website Co.\n\nName: ${data.get('name')}\nBusiness: ${data.get('business')}\nEmail: ${data.get('email')}\nLooking for: ${data.get('service')}\n\n${data.get('idea')}`;
 document.getElementById('prepared-brief').value = brief;
 document.getElementById('brief-result').hidden = false;
 document.getElementById('result-message').textContent = emailIsValid ? 'Your enquiry is ready. Open your email app to send it, or save a copy.' : 'Your brief is ready to copy or save. No enquiry has been sent.';
 if(emailIsValid) { const link = document.getElementById('email-brief'); link.hidden=false; link.href=`mailto:${email}?subject=${encodeURIComponent('Website enquiry: '+data.get('business'))}&body=${encodeURIComponent(brief)}`; }
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
