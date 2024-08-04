<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import ColumnGroupStyle from 'wangsvue/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $pcColumnGroup: this,
            $parentInstance: this
        };
    }
};
</script>
