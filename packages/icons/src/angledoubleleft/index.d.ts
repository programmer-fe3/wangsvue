import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleDoubleLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleLeftIcon: GlobalComponentConstructor<AngleDoubleLeftIcon>;
    }
}

export default AngleDoubleLeftIcon;
