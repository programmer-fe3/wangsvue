import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class UndoIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        UndoIcon: GlobalComponentConstructor<UndoIcon>;
    }
}

export default UndoIcon;
