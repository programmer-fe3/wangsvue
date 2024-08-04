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
import Accordion from 'wangsvue/accordion';
import AccordionPanel from 'wangsvue/accordionpanel';
import AccordionHeader from 'wangsvue/accordionheader';
import AccordionContent from 'wangsvue/accordioncontent';
`
            }
        };
    }
};
</script>
