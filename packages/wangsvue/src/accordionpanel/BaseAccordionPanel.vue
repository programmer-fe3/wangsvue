<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import AccordionPanelStyle from 'wangsvue/accordionpanel/style';

export default {
    name: 'BaseAccordionPanel',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: String,
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionPanelStyle,
    provide() {
        return {
            $pcAccordionPanel: this,
            $parentInstance: this
        };
    }
};
</script>
