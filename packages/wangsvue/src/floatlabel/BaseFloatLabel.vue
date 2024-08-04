<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import FloatLabelStyle from 'wangsvue/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {},
    style: FloatLabelStyle,
    provide() {
        return {
            $pcFloatLabel: this,
            $parentInstance: this
        };
    }
};
</script>
