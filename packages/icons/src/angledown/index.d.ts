import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDownIcon: GlobalComponentConstructor<AngleDownIcon>;
    }
}

export default AngleDownIcon;
