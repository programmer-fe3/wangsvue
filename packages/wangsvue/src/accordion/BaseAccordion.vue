<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import AccordionStyle from 'wangsvue/accordion/style';

export default {
    name: 'BaseAccordion',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Array],
            default: undefined
        },
        multiple: {
            type: Boolean,
            default: false
        },
        lazy: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: undefined
        },
        collapseIcon: {
            type: String,
            default: undefined
        },
        // @deprecated since v4.
        activeIndex: {
            type: [Number, Array],
            default: null
        }
    },
    style: AccordionStyle,
    provide() {
        return {
            $pcAccordion: this,
            $parentInstance: this
        };
    }
};
</script>
