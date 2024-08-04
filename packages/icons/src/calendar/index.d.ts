import type { GlobalComponentConstructor } from '@wangsvue/core';
import type { Icon } from '@wangsvue/icons';

declare class CalendarIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CalendarIcon: GlobalComponentConstructor<CalendarIcon>;
    }
}

export default CalendarIcon;
