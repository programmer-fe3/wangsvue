<template>
    <Head>
        <Title>Auto Import - wangsVue</Title>
        <Meta name="description" content="On-demand wangsVue components with auto imports and tree-shaking." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Auto Import</h1>
                <p>On-demand wangsVue components with auto imports and tree-shaking.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ExampleDoc from '@/doc/autoimport/ExampleDoc.vue';
import OverviewDoc from '@/doc/autoimport/OverviewDoc.vue';
import UnpluginDoc from '@/doc/autoimport/UnpluginDoc.vue';

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
                    id: 'unplugin',
                    label: 'Unplugin',
                    component: UnpluginDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        };
    }
};
</script>
