<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import IconField from 'wangsvue/iconfield';
import InputIcon from 'wangsvue/inputicon';
`
            }
        };
    }
};
</script>
