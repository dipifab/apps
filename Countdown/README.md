# Countdown - Day Counter Widget - Website

Website for the Countdown - Day Counter Widget iOS app.

## Structure

```
Countdown/
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
    ├── app-icon.png    # App icon (100x100+)
    ├── favicon.png     # Favicon
    ├── apple-touch-icon.png
    └── og-image.png    # Open Graph image (1200x630)
```

## Required Images

Before deploying, add the following images to the `img/` folder:

1. **app-icon.png** - App icon, 100x100px (or larger, will be resized via CSS)
2. **favicon.png** - Favicon, 32x32px recommended
3. **apple-touch-icon.png** - Apple touch icon, 180x180px
4. **og-image.png** - Open Graph image for social sharing, 1200x630px

## Multi-language Support

The website supports Italian (default) and English. Language switching is handled via dedicated HTML files per language with a dropdown selector.

## Apple App Store Requirements

This website satisfies Apple's requirements for:
- **Privacy Policy** - Required for all apps
- **Terms of Service** - Recommended for all apps
- **Support URL** - Required for all apps

Add the URLs in App Store Connect:
- Privacy Policy URL: `https://dipifab.github.io/apps/Countdown/privacy.html`
- Terms of Service URL: `https://dipifab.github.io/apps/Countdown/terms.html`
- Support URL: `https://dipifab.github.io/apps/Countdown/support.html`

## Developer

**Fabrizio Di Pietro**
- Email: support@pediary.net

## License

All rights reserved. This website content is part of the Countdown app project.
