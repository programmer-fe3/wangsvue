/**
 *
 * Fluid is a layout component to make descendant components span full width of their container.
 *
 * [Live Demo](https://www.wangsvue.org/fluid/)
 *
 * @module fluidstyle
 *
 */
import type { BaseStyle } from '@wangsvue/core/base/style';

export enum FluidClasses {
    /**
     * Class name of the root element
     */
    root = 'p-fluid'
}

export interface FluidStyle extends BaseStyle {}
