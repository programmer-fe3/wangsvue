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
import Tabs from 'wangsvue/tabs';
import TabList from 'wangsvue/tablist';
import Tab from 'wangsvue/tab';
import TabPanels from 'wangsvue/tabpanels';
import TabPanel from 'wangsvue/tabpanel';
`
            }
        };
    }
};
</script>
