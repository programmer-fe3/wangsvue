import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class SortAmountUpAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountUpAltIcon: GlobalComponentConstructor<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;
