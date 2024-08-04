import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleDoubleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleRightIcon: GlobalComponentConstructor<AngleDoubleRightIcon>;
    }
}

export default AngleDoubleRightIcon;
