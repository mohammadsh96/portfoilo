# Portfolio — Mohammad Alshraideh

Personal portfolio site. Single page, no build step required (SCSS is precompiled to
`styles/styles.css`).

**Live:** _add your GitHub Pages / Netlify URL here_

## About

Technical Product Specialist working on electronic Quality Management Systems (eQMS) for
pharmaceutical and food manufacturers. Background in full-stack JavaScript development,
now focused on implementation, configuration, integrations, and product. PMP certified.

## Stack

- HTML5, SCSS (compiled to CSS), vanilla JavaScript
- Font Awesome 5, Google Fonts (Poppins)

## Local development

Open `index.html` directly, or serve the folder:

```bash
npx serve .
```

To edit styles, change `styles/styles.scss` and recompile:

```bash
sass styles/styles.scss styles/styles.css
```

## Structure

```
index.html        single page: home, about, work, writing, contact
app.js            section tab switching and light/dark toggle
styles/           styles.scss (source) and styles.css (compiled)
img/              screenshots, diagrams, and CV
```

## To do

- Point the contact form at a real endpoint (replace `FORM_ID` in `index.html`)
- Replace `img/mohammadalshraideh_Resume.pdf` with the current CV
