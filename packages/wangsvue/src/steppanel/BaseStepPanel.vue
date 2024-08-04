<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import StepPanelStyle from 'wangsvue/steppanel/style';

export default {
    name: 'BaseStepPanel',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        asChild: {
            type: Boolean,
            default: false
        },
        as: {
            type: String,
            default: 'DIV'
        }
    },
    style: StepPanelStyle,
    provide() {
        return {
            $pcStepPanel: this,
            $parentInstance: this
        };
    }
};
</script>
