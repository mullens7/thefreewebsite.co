# The Free Website Co.

A responsive single-page website using the supplied logo and purple #4443c5. Plain HTML, CSS and JavaScript; no install or build step.

## Deploy to Vercel

Import mullens7/thefreewebsite.co. Select Other as the framework, leave the build command empty, and use the repository root as the output directory. Connect the custom domain when ready.

## Before launch

Edit config.js with the confirmed enquiryEmail, monthlyFee (for example £25) and canonicalUrl. No price is invented: with the fee blank the page says it is agreed before work starts.

The form prepares a brief in the browser and supports copying and downloading. With an enquiry email configured it also opens an email draft. It does not submit to a server or claim an enquiry was sent. Until configured, the section explicitly says enquiries open soon.

No analytics, external fonts or cookies. Form data is not stored or submitted by this site. Add final business identity and any service terms when confirmed. Add static canonical/og:url tags and a sitemap after confirming the public domain.

## Preview

Run python -m http.server 3000 from this directory and visit http://localhost:3000.

The hero business example is explicitly illustrative. Brand images are optimised derivatives of the supplied artwork.
