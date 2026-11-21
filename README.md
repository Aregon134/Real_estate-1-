# Ziggloom

An editable Next.js App Router project for the Ziggloom agency website. Each page has a React source file. The text, layouts, interactive components, styles and images are in this repository. The build runs from these sources and produces the deployable site in `out/`.

## Run locally

Use Node.js 22 LTS and npm. In the folder containing `package.json`, run:

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3210
```

Open http://localhost:3210. Edits appear as you save. Run `npm run build` before opening a pull request. It builds each route and checks its output and local media references.

## Where to edit

| Change | Starting file |
| --- | --- |
| Homepage section order and page title | `app/page.jsx` |
| Homepage hero, headings and buttons | `sections/HomeHero.jsx` |
| Agency contact settings and tagline | `content/Agency.json` |
| Menu links and mobile navigation | `content/Navigation.json`, `components/HeaderBar.jsx` |
| Service list and detailed service pages | `content/Services.json`, `app/services/`, `sections/Services*.jsx` |
| Prices and plan options | `content/*Modes.json`, `components/PricingPanel.jsx`. Review matching amounts in editorial text as well. |
| Work samples and case studies | `sections/HomeWork.jsx`, `app/portfolio/` |
| Articles | `app/blog/<article>/page.jsx`. Add a link to the new article in the blog listing. |
| Team cards and portraits | `content/Team.json`, `content/People.json`, `public/icon.svg` |
| Smoke and page transitions | `components/SmokeCanvas.jsx`, `components/SiteInteractions.jsx` |
| Enquiry form and call requests | `components/ContactForm.jsx`, `components/BookingCalendar.jsx` |
| Colours, typography and spacing | `styles/theme.css`, `styles/fonts.css`, `styles/identity.css`. Tailwind also compiles new utilities in your JSX. |
| Logos, fonts, video and project images | `public/`. For example, `public/media/clip.mp4` is served as `/media/clip.mp4`. |

To add a page, create `app/your-page/page.jsx` with a default React component, then add the route to the relevant navigation or listing. The root layout loads the shared styles, guide and transitions. Import the shared header and footer for a marketing page, following `app/page.jsx`.

## Local review

Work in this checkout on a local branch. Review the live preview with Kushagra before pushing to GitHub or deploying. The editable source is in this repository. The generated site in `out/` can be rebuilt at any time.

## Call requests

The local calendar offers 15-minute weekday request times from 2:30 pm to 5 pm India time, up to 60 days ahead. FormSubmit forwards the selected time, contact details and meeting preference to the address in `content/Agency.json`. Activate FormSubmit from the recipient inbox before accepting requests. Kushagra confirms availability and sends the meeting link or places the call. The contact form also delivers enquiries through FormSubmit.
