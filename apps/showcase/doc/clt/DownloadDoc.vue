<template>
    <DocSectionText v-bind="$attrs">
        <p>wangsCLT is available for download on <a href="https://www.npmjs.com/package/wangsclt">npm Registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
npm install -g wangsclt
`
            }
        };
    }
};
</script>
