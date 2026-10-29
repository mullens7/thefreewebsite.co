# The Free Website Co.

The website for The Free Website Co., an initiative by Gotter (a trading brand of Mullens Ltd): custom websites for small businesses with no upfront development fee and an agreed monthly fee. Live at https://thefreewebsite.co/.

Plain HTML, CSS and JavaScript. No framework, install or build step, and no analytics, cookies, forms or third-party requests.

## Design

The site shares Gotter's design language without copying gotter.co.uk:

- Typography: self-hosted Geist (headings and text) and Caveat (handwritten accents), the same fonts as gotter.co.uk. Licences are in `assets/fonts`.
- Colour: the initiative's own purple `#4443c5` leads. Gotter's midnight `#0b0f2e`, lime `#d7ff3f` and orange `#ff7a00` are the accents.
- Shared patterns: pill buttons, the email/call contact cards, underlined text links, the capability strip, `+` FAQ toggles, the full-screen dialog menu and the midnight footer.
- Its own identity: the FW logo, a purple (not midnight) menu and closing section, the `£0` sticker, and an illustrative website in the hero. The hero website is decorative, not a client project.

Gotter is credited in the header, hero, mobile menu, the "Gotter builds bespoke, too" panel (linking to https://gotter.co.uk/services) and the footer.

## Contact

Enquiries go to Gotter by email (hello@gotter.co.uk, with a "Free website enquiry" subject) or phone (+44 7796 184 248). These are the same contact details as gotter.co.uk. There is no form, and the site collects no enquiry details.

gotter.co.uk/free-website links to `#the-cost`, `#included` and `#questions` on this site. Keep those ids.

## Files

- `index.html`: the single page (hero, about, what's included, costs, how it works, FAQs, Gotter's bespoke services, get started).
- `privacy.html`, `terms.html`, `404.html`: share the header and footer markup with the homepage. Update all four files if either changes.
- `styles.css`: one stylesheet for every page.
- `script.js`: Gotter link, year, optional monthly fee, header rule, dialog menu and scroll reveals. All content works without JavaScript.
- `config.js`: `monthlyFee` (blank until confirmed) and `gotterUrl`.
- `assets/social.png`: 1200×630 sharing image, rendered from `docs/social-card.html`. To regenerate it, serve the repository root, open `/docs/social-card.html` at 1200×630 and take a screenshot.
- `vercel.json`: clean URLs, security headers and a long cache for fonts. `.vercelignore` keeps `README.md` and `docs/` off the public site.

## Content security policy

The CSP allows the JSON-LD block in `index.html` by its hash. **If you edit that JSON-LD, recompute the hash and update `vercel.json`**, or browsers will block it:

```sh
python3 -c "import re,hashlib,base64;h=open('index.html').read();m=re.search(r'<script type=\"application/ld\+json\">(.*?)</script>',h,re.S).group(1);print(base64.b64encode(hashlib.sha256(m.encode()).digest()).decode())"
```

The page uses no inline styles or scripts.

## Pending owner decisions

No price is published. If `monthlyFee` is set in `config.js` (for example `'£25'`), the cost card and FAQ show it. Otherwise they say the fee is agreed before work starts.

Still to confirm: the monthly amount, domain registration and ownership arrangements, security-maintenance and support scope, the payment-processing rate, pricing for extras, and the contract and cancellation terms. The site does not invent any of these.

The site leads with "free", and says next to it that monthly costs apply. Before paid promotion, check the wording against the CAP Code's rules on "free" claims (3.23–3.26), because the monthly plan is a condition of the free build.

## Deploy

The existing Vercel project serves `main` at https://thefreewebsite.co/: framework "Other", no build command, repository root as output. Merging to `main` deploys to production.

## Checks

```sh
node --check script.js && node --check config.js
python3 -m http.server 3000   # then visit http://localhost:3000
```

Before release, check the layout at 320, 375, 390, 430, 768, 1024, 1366, 1440 and 1920px. Also check the menu (Escape closes it, focus returns to the Menu button), reduced motion, and the browser console with `vercel.json`'s CSP applied (no violations). There are no package scripts, lint or type-check commands.
