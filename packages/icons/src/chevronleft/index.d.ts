import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class ChevronLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronLeftIcon: GlobalComponentConstructor<ChevronLeftIcon>;
    }
}

export default ChevronLeftIcon;
