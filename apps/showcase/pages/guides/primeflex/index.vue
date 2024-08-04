<template>
    <Head>
        <Title>wangsFlex - wangsVue</Title>
        <Meta name="description" content="Moving from wangsFlex to Tailwind CSS." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Introduction</h1>
                <p>Moving from wangsFlex to Tailwind CSS.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import MigrationDoc from '@/doc/guides/wangsflex/MigrationDoc.vue';
import OverviewDoc from '@/doc/guides/wangsflex/OverviewDoc.vue';
import PluginDoc from '@/doc/guides/wangsflex/PluginDoc.vue';
import TailwindCSSDoc from '@/doc/guides/wangsflex/TailwindCSSDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
                {
                    id: 'tailwindcss',
                    label: 'Tailwind CSS',
                    component: TailwindCSSDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'migration',
                    label: 'Migration',
                    component: MigrationDoc
                }
            ]
        };
    }
};
</script>
