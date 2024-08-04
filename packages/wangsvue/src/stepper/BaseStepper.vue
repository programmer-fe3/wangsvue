<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import StepperStyle from 'wangsvue/stepper/style';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $pcStepper: this,
            $parentInstance: this
        };
    }
};
</script>
