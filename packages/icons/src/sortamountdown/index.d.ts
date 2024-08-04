import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class SortAmountDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountDownIcon: GlobalComponentConstructor<SortAmountDownIcon>;
    }
}

export default SortAmountDownIcon;
