/**
 *
 * [Live Demo](https://wangsvue.org/)
 *
 * @module basestyle
 *
 */
import type { Style, StyleOptions } from '@wangsvue/core/usestyle';

export enum BaseClasses {}

export declare interface BaseStyle {
    name?: string | undefined;
    css?: string | undefined;
    classes?: object | undefined;
    inlineStyles?: object | undefined;
    load?: ((style: string | ((params?: any) => string | undefined), options?: StyleOptions) => Style | object | undefined) | undefined;
    getStyleSheet?: ((extendedCSS?: string, props?: any) => string | undefined) | undefined;
}
