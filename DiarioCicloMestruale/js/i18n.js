/**
 * Diario Ciclo e Calendario - Internationalization (i18n) System
 * Simple, lightweight multi-language support
 */

const i18n = {
    currentLang: 'it',
    defaultLang: 'it',
    supportedLangs: ['it', 'en'],

    translations: {
        it: {
            // Navigation
            'nav.home': 'Home',
            'nav.privacy': 'Privacy Policy',
            'nav.terms': 'Termini di Servizio',
            'nav.support': 'Supporto',

            // Footer
            'footer.copyright': '© {year} Fabrizio Di Pietro. Tutti i diritti riservati.',
            'footer.madeWith': 'Fatto con ❤️ in Italia',

            // Common
            'common.lastUpdate': 'Ultimo aggiornamento',
            'common.effectiveDate': 'Data di entrata in vigore',
            'common.contactUs': 'Contattaci',
            'common.email': 'Email',
            'common.backToTop': 'Torna su',
        },
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.privacy': 'Privacy Policy',
            'nav.terms': 'Terms of Service',
            'nav.support': 'Support',

            // Footer
            'footer.copyright': '© {year} Fabrizio Di Pietro. All rights reserved.',
            'footer.madeWith': 'Made with ❤️ in Italy',

            // Common
            'common.lastUpdate': 'Last updated',
            'common.effectiveDate': 'Effective date',
            'common.contactUs': 'Contact us',
            'common.email': 'Email',
            'common.backToTop': 'Back to top',
        }
    },

    /**
     * Initialize the i18n system
     */
    init() {
        // Detect language from URL, localStorage, or browser
        const urlLang = this.getLangFromURL();
        const storedLang = localStorage.getItem('preferredLang');
        const browserLang = navigator.language.split('-')[0];

        if (urlLang && this.supportedLangs.includes(urlLang)) {
            this.currentLang = urlLang;
        } else if (storedLang && this.supportedLangs.includes(storedLang)) {
            this.currentLang = storedLang;
        } else if (this.supportedLangs.includes(browserLang)) {
            this.currentLang = browserLang;
        }

        this.applyTranslations();
        this.setupLanguageSelector();
    },

    /**
     * Get language from URL query parameter
     */
    getLangFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang');
    },

    /**
     * Translate a key with optional parameters
     */
    t(key, params = {}) {
        let text = this.translations[this.currentLang]?.[key]
            || this.translations[this.defaultLang]?.[key]
            || key;

        // Replace parameters like {year}
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
        });

        return text;
    },

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const params = el.getAttribute('data-i18n-params');
            const parsedParams = params ? JSON.parse(params) : {};

            // Add current year by default
            parsedParams.year = parsedParams.year || new Date().getFullYear();

            el.textContent = this.t(key, parsedParams);
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    },

    /**
     * Setup language selector dropdown
     */
    setupLanguageSelector() {
        const selector = document.getElementById('lang-selector');
        if (!selector) return;

        selector.value = this.currentLang;
        selector.addEventListener('change', (e) => {
            this.setLanguage(e.target.value);
        });
    },

    /**
     * Change the current language
     */
    setLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) return;

        this.currentLang = lang;
        localStorage.setItem('preferredLang', lang);

        // Update URL without reload for SPA-like behavior
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);

        this.applyTranslations();

        // Dispatch event for page-specific updates
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// Export for use in other scripts
window.i18n = i18n;
