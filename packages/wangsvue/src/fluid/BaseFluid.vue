<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import FluidStyle from 'wangsvue/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
