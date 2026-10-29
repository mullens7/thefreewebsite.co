# The Free Website Co.

A responsive single-page website using the supplied logo and purple #4443c5. Plain HTML, CSS and JavaScript; no install or build step.

## Deploy to Vercel

Import mullens7/thefreewebsite.co. Select Other as the framework, leave the build command empty, and use the repository root as the output directory. Connect the custom domain when ready.

## Before launch

Edit config.js with the confirmed monthlyFee (for example £25) and canonicalUrl. No price is invented: with the fee blank the page says it is agreed before work starts.

Enquiries are made directly by email (hello@gotter.co.uk, with a “Free website enquiry” subject) or phone (+44 7796 184 248) from the #start section. There is no form, and the site collects no enquiry details.

No analytics, external fonts or cookies. Form data is not stored or submitted by this site. Add final business identity and any service terms when confirmed. Add static canonical/og:url tags and a sitemap after confirming the public domain.

## Preview

Run python -m http.server 3000 from this directory and visit http://localhost:3000.

The hero business example is explicitly illustrative. Brand images are optimised derivatives of the supplied artwork.

## Gotter initiative refinement

The Free Website Co remains the primary purple/white brand, with Gotter attribution in the header, hero, dedicated parent-brand section and footer. The official Gotter URL is https://gotter.co.uk, verified from the mullens7/gotter repository homepage setting on 18 October 2026. config.js provides a gotterUrl setting; static links and structured data retain the verified default. Update both if the official URL changes.

The existing no-framework setup, logos, hosting configuration and local brief/copy/download/email flow remain. There are no package scripts, lint, type-check or build commands; JavaScript syntax and HTML/asset/link checks apply instead.

Pending commercial decisions: monthly amount, enquiry email, final public canonical URL, domain choice and registration/ownership arrangements, security-maintenance scope, technical support scope, extra-service pricing, payment processing rate and service terms. No contract duration or cancellation terms have been invented. Domain inclusion is retained from the original confirmed offer; exact arrangements must be agreed before work starts.

## Launch pass — 19 October 2026

- Custom domain verified on the existing Vercel project: https://thefreewebsite.co/.
- Added privacy and website-use terms reflecting the actual local-only brief/email-draft flow; these are not service-contract terms.
- Added canonical/social metadata, a branded sharing image, sitemap, robots file and a 404 page.
- Added a mobile enquiry action, usable footer links, optional business-name entry, explicit review/send wording, security headers and a CSP hash for structured data.
- No advertising pixels, cookie storage or analytics were installed.
- Enquiry delivery is still a launch blocker: enquiryEmail is empty, no delivery provider/environment variables are configured, and Gotter also has no verified receiving address. Never advertise the current brief tool as a submitted application. Enter the owner's verified receiving address in config.js to activate the email-draft flow, or provision a real delivery provider before implementing server submission. Current copy remains truthful while unconfigured.
- Prices are quoted individually until an amount is confirmed. Domain inclusion is retained; exact arrangements and full service terms are agreed in a proposal.
- To verify: node --check script.js; node --check config.js; validate page links/assets, sitemap and JSON-LD. There is no framework build, dependency installation or lint/type-check script.

## Homepage update — 22 October 2026

The page focuses on the initiative, included services, costs and enquiry process. No client work, portfolio examples or project screenshots are displayed. Social previews use the initiative logo. The mobile navigation and inline Gotter logo endorsement are retained.

## Direct contact — 29 October 2026

- Replaced the local brief-preparation form and its “enquiry delivery is being connected” notice with working email and telephone actions to Gotter, which designs, develops and maintains websites for the initiative.
- Every “Get started” link still leads to #start, which now holds the contact actions.
- Removed the form code from script.js and the enquiryEmail setting from config.js; updated privacy and website terms to describe email and phone contact.
- The JSON-LD inline script is unchanged, so its CSP hash in vercel.json still applies.
