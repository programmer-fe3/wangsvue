import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class EyeSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeSlashIcon: GlobalComponentConstructor<EyeSlashIcon>;
    }
}

export default EyeSlashIcon;
