<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme preset via a script element after adding wangsVue, valid options are Aura, Lara and Nora.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<!-- <script src="https://unpkg.com/@wangsvue/themes/umd/{preset}.min.js"><\/script> -->

<script src="https://unpkg.com/@wangsvue/themes/umd/aura.min.js"><\/script>
<script src="https://unpkg.com/@wangsvue/themes/umd/lara.min.js"><\/script>
<script src="https://unpkg.com/@wangsvue/themes/umd/nora.min.js"><\/script>
`
            }
        };
    }
};
</script>
