import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class AngleUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleUpIcon: GlobalComponentConstructor<AngleUpIcon>;
    }
}

export default AngleUpIcon;
