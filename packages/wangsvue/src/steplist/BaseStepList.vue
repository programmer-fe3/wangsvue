<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import StepListStyle from 'wangsvue/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
