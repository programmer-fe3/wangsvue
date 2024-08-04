<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>definePreset</i> utility is used to customize an existing preset during the wangsVue setup. The first parameter is the preset to customize and the second is the design tokens to override.</p>
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
import { definePreset } from '@wangsvue/themes';
import Aura from '@wangsvue/themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
});

app.use(wangsVue, {
    theme: {
        preset: MyPreset
    }
 });
`
            }
        };
    }
};
</script>
