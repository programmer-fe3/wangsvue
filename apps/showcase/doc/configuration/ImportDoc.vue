<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>wangsVue</i> instance imported from <i>wangsvue/config</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import wangsVue from 'wangsvue/config';
const app = createApp(App);

app.use(wangsVue, { /* options */ });
`
            }
        };
    }
};
</script>
