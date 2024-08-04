<template>
    <DocSectionText v-bind="$attrs">
        <p>Creates a new project from scratch with wangsVue.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
wangs vue create
`
            }
        };
    }
};
</script>
