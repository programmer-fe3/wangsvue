import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class ExclamationTriangleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ExclamationTriangleIcon: GlobalComponentConstructor<ExclamationTriangleIcon>;
    }
}

export default ExclamationTriangleIcon;
