import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class ChevronRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronRightIcon: GlobalComponentConstructor<ChevronRightIcon>;
    }
}

export default ChevronRightIcon;
