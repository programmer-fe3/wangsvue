import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleDoubleUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleUpIcon: GlobalComponentConstructor<AngleDoubleUpIcon>;
    }
}

export default AngleDoubleUpIcon;
