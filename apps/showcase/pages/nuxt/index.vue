<template>
    <div>
        <Head>
            <Title>Install wangsVue with Nuxt</Title>
            <Meta name="description" content="Setting up wangsVue in a Nuxt project" />
        </Head>
        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Install wangsVue with Nuxt</h1>
                    <p>Setting up wangsVue in a Nuxt project.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AutoImportDoc from '@/doc/nuxt/AutoImportDoc.vue';
import DownloadDoc from '@/doc/nuxt/DownloadDoc.vue';
import ExamplesDoc from '@/doc/nuxt/ExamplesDoc.vue';
import SetupDoc from '@/doc/nuxt/SetupDoc.vue';
import StyledModeDoc from '@/doc/nuxt/StyledModeDoc.vue';
import UnstyledModeDoc from '@/doc/nuxt/UnstyledModeDoc.vue';
import UsageDoc from '@/doc/nuxt/UsageDoc.vue';
import ComponentsDoc from '@/doc/nuxt/configuration/ComponentsDoc.vue';
import ComposablesDoc from '@/doc/nuxt/configuration/ComposablesDoc.vue';
import DirectivesDoc from '@/doc/nuxt/configuration/DirectivesDoc.vue';
import ImportPTDoc from '@/doc/nuxt/configuration/ImportPTDoc.vue';
import ImportThemeDoc from '@/doc/nuxt/configuration/ImportThemeDoc.vue';
import OptionsDoc from '@/doc/nuxt/configuration/OptionsDoc.vue';
import UsewangsVueDoc from '@/doc/nuxt/configuration/UseWangsVueDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'setup',
                    label: 'Setup',
                    component: SetupDoc
                },
                {
                    id: 'theming',
                    label: 'Theming',
                    description: 'wangsVue has two styling modes; Styled and Unstyled. If you are just getting started, begin with the styled mode.',
                    children: [
                        {
                            id: 'styled',
                            label: 'Styled Mode',
                            component: StyledModeDoc
                        },
                        {
                            id: 'unstyled',
                            label: 'Unstyled Mode',
                            component: UnstyledModeDoc
                        }
                    ]
                },
                {
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                },
                {
                    id: 'configuration',
                    label: 'Configuration',
                    children: [
                        {
                            id: 'usewangsvue',
                            label: 'usewangsVue',
                            component: UsewangsVueDoc
                        },
                        {
                            id: 'options',
                            label: 'options',
                            component: OptionsDoc
                        },
                        {
                            id: 'autoimport',
                            label: 'autoImport',
                            component: AutoImportDoc
                        },
                        {
                            id: 'importpt',
                            label: 'importPT',
                            component: ImportPTDoc
                        },
                        {
                            id: 'importtheme',
                            label: 'importTheme',
                            component: ImportThemeDoc
                        },
                        {
                            id: 'components',
                            label: 'components',
                            component: ComponentsDoc
                        },
                        {
                            id: 'directives',
                            label: 'directives',
                            component: DirectivesDoc
                        },
                        {
                            id: 'composables',
                            label: 'composables',
                            component: ComposablesDoc
                        }
                    ]
                },
                {
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
                }
            ]
        };
    }
};
</script>
