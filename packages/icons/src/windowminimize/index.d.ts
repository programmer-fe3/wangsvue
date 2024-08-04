import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class WindowMinimizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMinimizeIcon: GlobalComponentConstructor<WindowMinimizeIcon>;
    }
}

export default WindowMinimizeIcon;
