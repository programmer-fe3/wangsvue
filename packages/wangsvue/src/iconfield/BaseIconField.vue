<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import IconFieldStyle from 'wangsvue/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
