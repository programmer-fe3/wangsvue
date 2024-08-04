import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class FilterSlashIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterSlashIcon: GlobalComponentConstructor<FilterSlashIcon>;
    }
}

export default FilterSlashIcon;
