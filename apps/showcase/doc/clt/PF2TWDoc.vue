<template>
    <DocSectionText v-bind="$attrs">
        <p>Migrates files from wangsFlex to Tailwind CSS, see the <NuxtLink to="/guides/wangsflex">wangsflex migration</NuxtLink> for further information.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
wangs pf2tw
`
            }
        };
    }
};
</script>
