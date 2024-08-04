<template>
    <DocSectionText v-bind="$attrs">
        <p>wangsVue is available for download on <a href="https://www.npmjs.com/package/wangsvue">npm Registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install wangsvue

# Using yarn
yarn add wangsvue

# Using pnpm
pnpm add wangsvue
`
            }
        };
    }
};
</script>
