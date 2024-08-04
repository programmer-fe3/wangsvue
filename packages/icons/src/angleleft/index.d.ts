import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleLeftIcon: GlobalComponentConstructor<AngleLeftIcon>;
    }
}

export default AngleLeftIcon;
