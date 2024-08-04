<template>
    <DocSectionText v-bind="$attrs">
        <p>Main configuration settings of wangsVue, refer to the <WangsVueNuxtLink to="/configuration">configuration</WangsVueNuxtLink> documentation for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Aura from '@wangsvue/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@wangsvue/nuxt-module'
    ],
    wangsvue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }
    }
})
`
            }
        };
    }
};
</script>
