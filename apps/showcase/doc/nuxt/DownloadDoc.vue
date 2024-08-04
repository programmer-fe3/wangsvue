<template>
    <DocSectionText v-bind="$attrs">
        <p>
            wangsVue is available for download on <a href="https://www.npmjs.com/package/wangsvue">npm Registry</a> along with the official
            <a href="https://www.npmjs.com/package/@wangsvue/nuxt-module" target="_blank" rel="noopener noreferrer">nuxt-wangsvue</a> module.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install wangsvue
npm install --save-dev @wangsvue/nuxt-module

# Using yarn
yarn add wangsvue
yarn add --dev @wangsvue/nuxt-module

# Using pnpm
pnpm add wangsvue
pnpm add -D @wangsvue/nuxt-module
`
            }
        };
    }
};
</script>
