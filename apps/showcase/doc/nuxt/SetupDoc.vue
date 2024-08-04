<template>
    <DocSectionText v-bind="$attrs">
        <p>In <i>nuxt.config</i> file, add the <i>@wangsvue/nuxt-module</i> to the modules section and define <i>wangsvue</i> object for the configuration of the module.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default defineNuxtConfig({
    modules: [
        '@wangsvue/nuxt-module'
    ],
    wangsvue: {
        /* Configuration */
    }
})
`
            }
        };
    }
};
</script>
