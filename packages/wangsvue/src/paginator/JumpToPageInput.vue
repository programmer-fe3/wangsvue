<template>
    <JTPInput ref="jtpInput" :modelValue="d_page" :class="cx('pcJumpToPageInput')" :aria-label="inputArialabel" :disabled="disabled" @update:modelValue="onChange" :unstyled="unstyled" :pt="ptm('pcJumpToPageInput')"></JTPInput>
</template>

<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import InputNumber from 'wangsvue/inputnumber';

export default {
    name: 'JumpToPageInput',
    hostName: 'Paginator',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['page-change'],
    props: {
        page: Number,
        pageCount: Number,
        disabled: Boolean
    },
    data() {
        return {
            d_page: this.page
        };
    },
    watch: {
        page(newValue) {
            this.d_page = newValue;
        }
    },
    methods: {
        onChange(value) {
            if (value !== this.page) {
                this.d_page = value;
                this.$emit('page-change', value - 1);
            }
        }
    },
    computed: {
        inputArialabel() {
            return this.$wangsvue.config.locale.aria ? this.$wangsvue.config.locale.aria.jumpToPageInputLabel : undefined;
        }
    },
    components: {
        JTPInput: InputNumber
    }
};
</script>
