import DeferredDemo from '@/components/demo/DeferredDemo.vue';
import WangsVueNuxtLink from '@/components/layout/WangsVueNuxtLink';
import CodeHighlight from '@/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.component('DeferredDemo', DeferredDemo); // @todo
    nuxtApp.vueApp.component('WangsVueNuxtLink', WangsVueNuxtLink);
});
