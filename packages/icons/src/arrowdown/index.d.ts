import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class ArrowDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowDownIcon: GlobalComponentConstructor<ArrowDownIcon>;
    }
}

export default ArrowDownIcon;
