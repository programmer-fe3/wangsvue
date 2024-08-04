import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class StarFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarFillIcon: GlobalComponentConstructor<StarFillIcon>;
    }
}

export default StarFillIcon;
