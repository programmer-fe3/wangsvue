import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: GlobalComponentConstructor<BarsIcon>;
    }
}

export default BarsIcon;
