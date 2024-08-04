<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import ButtonGroupStyle from 'wangsvue/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
