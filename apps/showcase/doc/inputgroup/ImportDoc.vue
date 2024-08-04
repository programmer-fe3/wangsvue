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
import InputGroup from 'wangsvue/inputgroup';
import InputGroupAddon from 'wangsvue/inputgroupaddon';
`
            }
        };
    }
};
</script>
