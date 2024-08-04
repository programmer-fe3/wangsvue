<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import AccordionContentStyle from 'wangsvue/accordioncontent/style';

export default {
    name: 'BaseAccordionContent',
    extends: BaseComponent,
    props: {
        as: {
            type: String,
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionContentStyle,
    provide() {
        return {
            $pcAccordionContent: this,
            $parentInstance: this
        };
    }
};
</script>
