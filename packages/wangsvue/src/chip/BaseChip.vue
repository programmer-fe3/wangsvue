<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import ChipStyle from 'wangsvue/chip/style';

export default {
    name: 'BaseChip',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        removable: {
            type: Boolean,
            default: false
        },
        removeIcon: {
            type: String,
            default: undefined
        }
    },
    style: ChipStyle,
    provide() {
        return {
            $pcChip: this,
            $parentInstance: this
        };
    }
};
</script>
