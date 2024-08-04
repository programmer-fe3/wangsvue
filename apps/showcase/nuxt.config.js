import path from 'path';

const baseUrl = '/';

const alias = {
    wangsvue: path.resolve(__dirname, '../../packages/wangsvue/src'),
    '@wangsvue/core': path.resolve(__dirname, '../../packages/core/src'),
    '@wangsvue/themes/aura': path.resolve(__dirname, '../../packages/themes/src/presets/aura'),
    '@wangsvue/themes/lara': path.resolve(__dirname, '../../packages/themes/src/presets/lara'),
    '@wangsvue/themes/nora': path.resolve(__dirname, '../../packages/themes/src/presets/nora'),
    '@wangsvue/themes': path.resolve(__dirname, '../../packages/themes/src'),
    '@wangsvue/icons': path.resolve(__dirname, '../../packages/icons/src')
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', '@wangsvue/nuxt-module'],
    components: {
        path: '~/components',
        pathPrefix: false
    },
    vite: {
        resolve: {
            optimizeDeps: {
                disabled: true
            },
            alias
        }
    },
    nitro: {
        alias
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } }
    },
    wangsvue: {
        autoImport: true, // When enabled, the module automatically imports wangsVue components and directives used throughout the application.
        importTheme: { from: '@/themes/app-theme.js' }
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'wangsVue - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@wangsvue' },
                { name: 'twitter:title', content: 'wangsVue | Vue UI Component Library' },
                { name: 'twitter:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'wangsVue | Vue UI Component Library' },
                { property: 'og:url', content: 'https://wangsvue.org/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:image', content: 'https://www.wangsfaces.org/static/social/wangsvue-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/tailwind/main.css', '@/assets/styles/layout/layout.scss']
});
