<template>
    <DocSectionText v-bind="$attrs">
        <p>Constants API is available to reference icons easily when used programmatically.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
import { wangsIcons } from '@wangsvue/core/api';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    items: [
                        { label: 'New', icon: wangsIcons.PLUS },
                        { label: 'Open', icon: wangsIcons.DOWNLOAD }
                    ]
                }
            ],
            code: {
                basic: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script>
import { wangsIcons } from '@wangsvue/core/api';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    items: [
                        { label: 'New', icon: wangsIcons.PLUS },
                        { label: 'Open', icon: wangsIcons.DOWNLOAD }
                    ]
                }
            ]
        };
    }
};
<\/script>
`
            }
        };
    }
};
</script>
