<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import MenuStyle from 'wangsvue/menu/style';

export default {
    name: 'BaseMenu',
    extends: BaseComponent,
    props: {
        popup: {
            type: Boolean,
            default: false
        },
        model: {
            type: Array,
            default: null
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: MenuStyle,
    provide() {
        return {
            $pcMenu: this,
            $parentInstance: this
        };
    }
};
</script>
