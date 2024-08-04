import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class FilterIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterIcon: GlobalComponentConstructor<FilterIcon>;
    }
}

export default FilterIcon;
