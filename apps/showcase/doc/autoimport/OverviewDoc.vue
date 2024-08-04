<template>
    <DocSectionText v-bind="$attrs">
        <p>wangsVue components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import wangsVue from "wangsvue/config";
import InputText from 'wangsvue/inputtext';
import Button from 'wangsvue/button';
import App from './App.vue'
const app = createApp(App);

app.use(wangsVue);
app.component('InputText', InputText);
app.component('Button', Button);
`
            }
        };
    }
};
</script>
