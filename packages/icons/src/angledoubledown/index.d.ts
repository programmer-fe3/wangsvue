import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleDoubleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleDownIcon: GlobalComponentConstructor<AngleDoubleDownIcon>;
    }
}

export default AngleDoubleDownIcon;
