<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import AvatarGroupStyle from 'wangsvue/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
