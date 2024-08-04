<template>
    <DocSectionText v-bind="$attrs">
        <p>Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the <NuxtLink to="/theming/styled">styled mode</NuxtLink> documentation for details.</p>
        <p>Install the <i>@wangsvue/themes</i> add-on package as the themes are not included in wangsVue by default.</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
        <p>Configure the module to use a theme like Aura.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
# Using npm
npm install @wangsvue/themes

# Using yarn
yarn add @wangsvue/themes

# Using pnpm
pnpm add @wangsvue/themes
`
            },
            code2: {
                basic: `
import Aura from '@wangsvue/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@wangsvue/nuxt-module'
    ],
    wangsvue: {
        options: {
            theme: {
                preset: Aura
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
