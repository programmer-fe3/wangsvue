/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://wangsvue.org/ripple)
 *
 * @module ripplestyle
 *
 */
import type { BaseStyle } from '@wangsvue/core/base/style';

export enum RippleClasses {
    /**
     * Class name of the root element
     */
    root = 'p-ink'
}

export interface RippleStyle extends BaseStyle {}
