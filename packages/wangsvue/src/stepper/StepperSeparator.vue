<template>
    <span :class="cx('separator')" v-bind="ptm('separator')" />
</template>

<script>
import BaseComponent from '@wangsvue/core/basecomponent';

export default {
    name: 'StepperSeparator',
    hostName: 'Stepper',
    extends: BaseComponent
};
</script>
