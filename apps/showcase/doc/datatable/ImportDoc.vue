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
import DataTable from 'wangsvue/datatable';
import Column from 'wangsvue/column';
import ColumnGroup from 'wangsvue/columngroup';   // optional
import Row from 'wangsvue/row';                   // optional
`
            }
        };
    }
};
</script>
