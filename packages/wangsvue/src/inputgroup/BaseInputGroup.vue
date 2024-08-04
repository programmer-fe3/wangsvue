<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import InputGroupStyle from 'wangsvue/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    props: {
        fluid: {
            type: Boolean,
            default: null
        }
    },
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
