/**
 *
 * SplitButton groups a set of commands in an overlay with a default command.
 *
 * [Live Demo](https://www.wangsvue.org/splitbutton/)
 *
 * @module splitbuttonstyle
 *
 */
import type { BaseStyle } from '@wangsvue/core/base/style';

export enum SplitButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-splitbutton',
    /**
     * Class name of the button element
     */
    pcButton = 'p-splitbutton-button',
    /**
     * Class name of the dropdown element
     */
    pcDropdown = 'p-splitbutton-dropdown'
}

export interface SplitButtonStyle extends BaseStyle {}
