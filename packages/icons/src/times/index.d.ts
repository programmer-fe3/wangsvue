import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class TimesIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        TimesIcon: GlobalComponentConstructor<TimesIcon>;
    }
}

export default TimesIcon;
