import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class TrashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TrashIcon: GlobalComponentConstructor<TrashIcon>;
    }
}

export default TrashIcon;
