<template>
    <DocSectionText v-bind="$attrs">
        <p>Uninstall wangsclt utility.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
wangs uninstall
`
            }
        };
    }
};
</script>
