<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import StepPanelsStyle from 'wangsvue/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
