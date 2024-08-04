import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class SearchIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchIcon: GlobalComponentConstructor<SearchIcon>;
    }
}

export default SearchIcon;
