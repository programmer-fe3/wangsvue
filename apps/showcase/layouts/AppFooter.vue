<template>
    <div class="layout-footer">
        <div>
            <span>wangsVue {{ version }} on Vue 3 by </span>
            <a href="https://www.wangstek.com.tr" target="_blank" rel="noopener noreferrer">wangsTek</a>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';

export default {
    data() {
        return {
            version: pkg.version
        };
    }
};
</script>
