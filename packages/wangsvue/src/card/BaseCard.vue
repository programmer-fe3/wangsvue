<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import CardStyle from 'wangsvue/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
