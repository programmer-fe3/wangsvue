import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class WindowMaximizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMaximizeIcon: GlobalComponentConstructor<WindowMaximizeIcon>;
    }
}

export default WindowMaximizeIcon;
