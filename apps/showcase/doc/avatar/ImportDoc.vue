<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Avatar from 'wangsvue/avatar';
import AvatarGroup from 'wangsvue/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
