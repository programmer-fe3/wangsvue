/**
 *
 * Popover is a container component positioned as connected to its target.
 *
 * [Live Demo](https://wangsvue.org/popover)
 *
 * @module popoverstyle
 *
 */
import type { BaseStyle } from '@wangsvue/core/base/style';

export enum PopoverClasses {
    /**
     * Class name of the root element
     */
    root = 'p-popover',
    /**
     * Class name of the content element
     */
    content = 'p-popover-content'
}

export interface PopoverStyle extends BaseStyle {}
