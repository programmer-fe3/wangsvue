import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class PlusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PlusIcon: GlobalComponentConstructor<PlusIcon>;
    }
}

export default PlusIcon;
