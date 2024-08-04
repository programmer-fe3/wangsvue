<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>emits</i> object defines callbacks to handle events emitted by the component within the Dialog.</p>

        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import ProductListDemo from './ProductListDemo';
import { useDialog } from 'wangsvue/usedialog';

const dialog = useDialog();

const showProducts = () => {
    dialog.open(ProductListDemo, {
        onCancel: (e) => {
            console.log(e);  // {user: 'wangstime'}
        }
    });
}
`
            },
            code2: {
                basic: `
<script setup>
/* ProductListDemo.vue */
const emit = defineEmits(['cancel', 'save'])

function buttonClick() {
    emit('cancel', {user: 'wangstime'});
}
<\/script>
`
            }
        };
    }
};
</script>
