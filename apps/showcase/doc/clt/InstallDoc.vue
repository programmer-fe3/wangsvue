<template>
    <DocSectionText v-bind="$attrs">
        <p>Adds wangsVue to your existing project.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
wangs vue install
`
            }
        };
    }
};
</script>
