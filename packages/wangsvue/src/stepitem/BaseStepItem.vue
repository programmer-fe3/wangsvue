<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import StepItemStyle from 'wangsvue/stepitem/style';

export default {
    name: 'BaseStepItem',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    style: StepItemStyle,
    provide() {
        return {
            $pcStepItem: this,
            $parentInstance: this
        };
    }
};
</script>
