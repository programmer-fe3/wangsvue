<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <WangsVueNuxtLink to="/floatlabel">FloatLabel</WangsVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </FloatLabel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<FloatLabel>
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </FloatLabel>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
