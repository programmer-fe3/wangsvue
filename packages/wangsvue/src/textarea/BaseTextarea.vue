<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import TextareaStyle from 'wangsvue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        modelValue: null,
        autoResize: Boolean,
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        }
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
