# Ziggloom

An editable Next.js App Router project for the Ziggloom agency website. Each page has a React source file. The text, layouts, interactive components, styles, images and showreel are in this repository. The build runs from these sources and produces the deployable site in `out/`.

## Run locally

Use Node.js 22 LTS and npm. In the folder containing `package.json`, run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edits appear as you save. Run `npm run build` before opening a pull request. It builds each route and checks its output and local media references.

## Where to edit

| Change | Starting file |
| --- | --- |
| Homepage section order and page title | `app/page.jsx` |
| Homepage hero, headings and buttons | `sections/HomeHero.jsx` |
| Agency contact settings and tagline | `content/Agency.json` |
| Menu links and mobile navigation | `content/Navigation.json`, `components/HeaderBar.jsx` |
| Service list and detailed service pages | `content/Services.json`, `app/services/`, `sections/Services*.jsx` |
| Prices and plan options | `content/*Modes.json`, `components/PricingPanel.jsx`. Review matching amounts in editorial text as well. |
| Work samples and case studies | `content/PortfolioItems.json`, `sections/PortfolioCards.jsx`, `app/portfolio/` |
| Articles | `app/blog/<article>/page.jsx`. Add a link to the new article in the blog listing. |
| Team cards and portraits | `content/Team.json`, `content/People.json`, `public/images/founders/` |
| Showreel, smoke and page transitions | `components/StatementReel.jsx`, `components/SmokeCanvas.jsx`, `components/SiteInteractions.jsx` |
| Enquiry form and call requests | `components/ContactForm.jsx`, `components/CalEmbed.jsx` |
| Colours, typography and spacing | `styles/theme.css`, `styles/fonts.css`, `styles/identity.css`. Tailwind also compiles new utilities in your JSX. |
| Logos, fonts, video and project images | `public/`. For example, `public/media/clip.mp4` is served as `/media/clip.mp4`. |

To add a page, create `app/your-page/page.jsx` with a default React component, then add the route to the relevant navigation or listing. The root layout loads the shared styles, guide and transitions. Import the shared header and footer for a marketing page, following `app/page.jsx`.

## Collaborate on GitHub

Create an empty GitHub repository under your account. From this project folder, run the following commands, replacing the angle-bracket placeholder with its HTTPS clone URL.

```sh
git init -b main
git add .
git commit -m "Add Ziggloom website source"
git remote add origin <YOUR-GITHUB-REPOSITORY-URL>
git push -u origin main
```

If your copy already has a first commit, start at `git remote add`. Invite your friends through the repository settings. Each person can clone the repo, run `npm ci`, and make changes on a branch such as `feature/homepage-copy`. Open a pull request into `main`. GitHub Actions runs the same production build on pushes and pull requests.

## Publish

Set the build command to `npm run build` and the output directory to `out` on a static host serving the site at the domain root. Uploading this repository to GitHub alone does not update the current ChatGPT Sites deployment.

## Handoff notes

This is a reconstruction of the public-facing site from its available published material. The original private repository and its history were unavailable. The enquiry form opens the visitor’s email app. Calendar and AI-receptionist requests use email until you connect your own providers. The studio guide links to agency pages. No provider keys are required to run this version.

Before using this as your primary marketing site, review the Grimsby location, UK pricing, performance claims, team placeholders and project credits. Keep reference work attributed when showing it. Search the whole project when changing business terms because some also appear inside articles, FAQs and page metadata.
