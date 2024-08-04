<template>
    <DocSectionText v-bind="$attrs">
        <p>To start with, Ripple needs to be enabled globally. See the <NuxtLink to="/configuration/#ripple">Configuration API</NuxtLink> for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
mounted() {
    this.$wangsvue.config.ripple = true;
}
`,
                options: `
mounted() {
    this.$wangsvue.config.ripple = true;
}
`,
                composition: `
import { usewangsVue } from 'wangsvue/config';

const wangsVue = usewangsVue();

wangsVue.config.ripple = true;
`
            }
        };
    }
};
</script>
