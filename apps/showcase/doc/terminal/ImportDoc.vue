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
import Terminal from 'wangsvue/terminal';
import TerminalService from 'wangsvue/terminalservice'
`
            }
        };
    }
};
</script>
