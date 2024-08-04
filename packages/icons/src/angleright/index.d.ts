import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleRightIcon: GlobalComponentConstructor<AngleRightIcon>;
    }
}

export default AngleRightIcon;
