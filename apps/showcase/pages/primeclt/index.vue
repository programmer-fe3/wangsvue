<template>
    <Head>
        <Title>Install wangsVue with wangsCLT</Title>
        <Meta name="description" content="Install wangsVue with wangsCLT" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Install wangsVue with CLT</h1>
                <p>wangsCLT is a command line utility for wangs UI libraries. It is currently in beta state.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CreateDoc from '@/doc/clt/CreateDoc.vue';
import DownloadDoc from '@/doc/clt/DownloadDoc.vue';
import InstallDoc from '@/doc/clt/InstallDoc.vue';
import PF2TWDoc from '@/doc/clt/PF2TWDoc.vue';
import UninstallDoc from '@/doc/clt/UninstallDoc.vue';

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
                    id: 'install',
                    label: 'Install',
                    component: InstallDoc
                },
                {
                    id: 'create',
                    label: 'Create',
                    component: CreateDoc
                },
                {
                    id: 'pf2tw',
                    label: 'pf2tw',
                    component: PF2TWDoc
                },
                {
                    id: 'uninstall',
                    label: 'uninstall',
                    component: UninstallDoc
                }
            ]
        };
    }
};
</script>
