<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import ConfirmPopupStyle from 'wangsvue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $pcConfirmPopup: this,
            $parentInstance: this
        };
    }
};
</script>
