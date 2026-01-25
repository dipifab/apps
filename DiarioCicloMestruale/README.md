# Diario Ciclo e Calendario - Website

Website for Diario Ciclo e Calendario iOS app.

## Structure

```
web/
├── index.html          # Homepage (IT)
├── index-en.html       # Homepage (EN)
├── privacy.html        # Privacy Policy (IT)
├── privacy-en.html     # Privacy Policy (EN)
├── terms.html          # Terms of Service (IT)
├── terms-en.html       # Terms of Service (EN)
├── support.html        # Support & FAQ (IT)
├── support-en.html     # Support & FAQ (EN)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── i18n.js         # Internationalization utilities
└── img/
    ├── app-icon.png    # App icon (80x80)
    ├── favicon.png     # Favicon
    ├── apple-touch-icon.png
    └── og-image.png    # Open Graph image (1200x630)
```

## Required Images

Before deploying, add the following images to the `img/` folder:

1. **app-icon.png** - App icon, 80x80px (or larger, will be resized via CSS)
2. **favicon.png** - Favicon, 32x32px recommended
3. **apple-touch-icon.png** - Apple touch icon, 180x180px
4. **og-image.png** - Open Graph image for social sharing, 1200x630px

## Multi-language Support

The website supports Italian (default) and English. Language selection is handled via:
- URL parameter: `?lang=it` or `?lang=en`
- Browser localStorage
- Browser language detection

## Deployment

This static website can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

### GitHub Pages

1. Create a new repository (e.g., `luna-app-website`)
2. Push the contents of the `web/` folder
3. Enable GitHub Pages in repository settings
4. Use the provided URL in App Store Connect

## Apple App Store Requirements

This website satisfies Apple's requirements for:
- **Privacy Policy** - Required for all apps
- **Terms of Service** - Recommended for all apps
- **Support URL** - Required for all apps

Add the URLs in App Store Connect:
- Privacy Policy URL: `https://yourdomain.com/privacy.html`
- Support URL: `https://yourdomain.com/support.html`

## Developer

**Fabrizio Di Pietro**
- Email: support@pediary.net

## License

All rights reserved. This website content is part of the Diario Ciclo e Calendario app project.
