<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import ScrollTopStyle from 'wangsvue/scrolltop/style';

export default {
    name: 'BaseScrollTop',
    extends: BaseComponent,
    props: {
        target: {
            type: String,
            default: 'window'
        },
        threshold: {
            type: Number,
            default: 400
        },
        icon: {
            type: String,
            default: undefined
        },
        behavior: {
            type: String,
            default: 'smooth'
        },
        buttonProps: {
            type: Object,
            default: () => {
                return { rounded: true };
            }
        }
    },
    style: ScrollTopStyle,
    provide() {
        return {
            $pcScrollTop: this,
            $parentInstance: this
        };
    }
};
</script>
