<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import FieldsetStyle from 'wangsvue/fieldset/style';

export default {
    name: 'BaseFieldset',
    extends: BaseComponent,
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: FieldsetStyle,
    provide() {
        return {
            $pcFieldset: this,
            $parentInstance: this
        };
    }
};
</script>
