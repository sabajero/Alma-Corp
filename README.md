# ALMA-CORP Website

Static website for the ALMA-CORP / ALMA-1 art installation.
Three pages: Home, About, Contact. No build tools required — open `index.html` directly in a browser.

---

## File Structure

```
alma-corp.de/
├── index.html        ← Homepage (hero + cards + CTA)
├── about.html        ← About page
├── contact.html      ← Contact page with form
│
├── css/
│   ├── tokens.css    ← ALL colors, fonts, spacing ← START HERE
│   ├── base.css      ← Reset and body styles
│   ├── header.css    ← Navigation bar only
│   ├── hero.css      ← Homepage hero section only
│   ├── cards.css     ← Testimonial cards only
│   ├── cta.css       ← Call-to-action band only
│   ├── about.css     ← About page only
│   ├── contact.css   ← Contact page only
│   └── footer.css    ← Footer only
│
├── js/
│   └── main.js       ← Mobile menu, active nav, form
│
└── assets/
    └── images/       ← Put images here
```

---

## How to Customize

### Change accent colors
Open `css/tokens.css` and find:
```css
--color-lime:   #c2ff00;   /* change this */
--color-purple: #4e1fa8;   /* change this */
```

### Change font
Open `css/tokens.css` and find:
```css
--font-main: 'Georgia', Georgia, serif;   /* change this */
```

### Change page background
Open `css/tokens.css` and find:
```css
--color-bg: #f4f4f2;   /* change this */
```

### Change header blur / opacity
Open `css/tokens.css` and find:
```css
--header-bg:   rgba(244, 244, 242, 0.82);  /* 0.82 = opacity */
--header-blur: 14px;                        /* blur amount    */
```

### Edit a specific section
Each section has its own CSS file. Open the file that matches what you want to change:
- Header styles → `css/header.css`
- Hero title / subtitle → `css/hero.css`
- Cards → `css/cards.css`
- CTA band → `css/cta.css`
- Footer → `css/footer.css`
- About page → `css/about.css`
- Contact form → `css/contact.css`

### Add a real logo
In each HTML file, find the logo section and replace the `<svg>` with an `<img>`:
```html
<a href="index.html" class="logo">
  <img src="assets/images/logo.svg" class="logo-mark" alt="Alma-Corp" />
  <span class="logo-text">Alma-Corp</span>
</a>
```

### Edit page content
Open the `.html` file and change the text directly. All content is plain HTML — no special syntax needed.

---

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/your-repo-name/`

If you have a custom domain (`alma-corp.de`):
- Add a file called `CNAME` in this folder containing just: `alma-corp.de`
- Configure your domain DNS to point to GitHub Pages (see GitHub docs)

---

## No backend needed

The contact form saves no data — it shows a confirmation message client-side only. If you want real form submissions, connect it to a free service like [Formspree](https://formspree.io) by changing the form action:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```
