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
import Splitter from 'wangsvue/splitter';
import SplitterPanel from 'wangsvue/splitterpanel';
`
            }
        };
    }
};
</script>
