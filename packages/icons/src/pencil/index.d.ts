import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class PencilIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PencilIcon: GlobalComponentConstructor<PencilIcon>;
    }
}

export default PencilIcon;
