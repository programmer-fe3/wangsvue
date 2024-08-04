import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class ThLargeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ThLargeIcon: GlobalComponentConstructor<ThLargeIcon>;
    }
}

export default ThLargeIcon;
