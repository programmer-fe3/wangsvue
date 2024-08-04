/**
 *
 * AccordionHeader is a helper component for Accordion component.
 *
 * [Live Demo](https://www.wangsvue.org/accordion/)
 *
 * @module accordionheaderstyle
 *
 */
import type { BaseStyle } from '@wangsvue/core/base/style';

export enum AccordionHeaderClasses {
    /**
     * Class name of the root element
     */
    root = 'p-accordionheader',
    /**
     * Class name of the toggleicon element
     */
    toggleicon = 'p-accordionheader-toggle-icon'
}

export interface AccordionHeaderStyle extends BaseStyle {}
