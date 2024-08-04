<template>
    <DocSectionText v-bind="$attrs">
        <p>The module installs the WangsVue plugin by default. Disable this option if you prefer to configure WangsVue manually e.g. with a Nuxt plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
wangsvue: {
    useWangsVue: true
}
`
            }
        };
    }
};
</script>
