<template>
    <DocSectionText v-bind="$attrs">
        <p>
            wangsVue uses the <i>system</i> as the default <i>darkModeSelector</i> in theme configuration. If you have a dark mode switch in your application, set the <i>darkModeSelector</i> to the selector you utilize such as <i>.my-app-dark</i> so
            that wangsVue can fit in seamlessly with your light-dark toggle.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>
            Following is a very basic example implementation of a dark mode switch, you may extend it further by involving <i>prefers-color-scheme</i> to retrieve it from the system initially and use <i>localStorage</i> to make it stateful. See this
            <a href="https://dev.to/abbeyperini/dark-mode-toggle-and-prefers-color-scheme-4f3m" target="_blank" rel="noopener noreferrer">article</a> for more information.
        </p>
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
        <p>In case you prefer to use dark mode all the time, apply the <i>darkModeSelector</i> initially and never change it.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import wangsVue from 'wangsvue/config';
import Aura from '@wangsvue/themes/aura';

const app = createApp(App);

app.use(wangsVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
 });
`
            },
            code2: {
                basic: `
<Button label="Toggle Color Scheme" @click="toggleColorScheme()" />
`
            },
            code3: {
                basic: `
const toggleColorScheme() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
}
`
            }
        };
    }
};
</script>
