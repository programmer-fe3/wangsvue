<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import TabListStyle from 'wangsvue/tablist/style';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>
