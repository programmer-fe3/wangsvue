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
import Stepper from 'wangsvue/stepper';
import StepList from 'wangsvue/steplist';
import StepPanels from 'wangsvue/steppanels';
import StepItem from 'wangsvue/stepitem';
import Step from 'wangsvue/step';
import StepPanel from 'wangsvue/steppanel';
`
            }
        };
    }
};
</script>
