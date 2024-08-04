/**
 *
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * [Live Demo](https://www.wangsvue.org/skeleton/)
 *
 * @module skeleton
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@wangsvue/core';
import type { ComponentHooks } from '@wangsvue/core/basecomponent';
import type { PassThroughOptions } from 'wangsvue/passthrough';

export declare type SkeletonPassThroughOptionType = SkeletonPassThroughAttributes | ((options: SkeletonPassThroughMethodOptions) => SkeletonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SkeletonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SkeletonProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SkeletonProps.pt}
 */
export interface SkeletonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SkeletonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SkeletonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Skeleton component.
 */
export interface SkeletonProps {
    /**
     * Shape of the element.
     * @defaultValue rectangle
     */
    shape?: 'rectangle' | 'circle' | undefined;
    /**
     * Size of the Circle or Square.
     */
    size?: string | undefined;
    /**
     * Width of the element.
     * @defaultValue 100%
     */
    width?: string | undefined;
    /**
     * Height of the element.
     * @defaultValue 1rem
     */
    height?: string | undefined;
    /**
     * Border radius of the element, defaults to value from theme.
     */
    borderRadius?: string | undefined;
    /**
     * Type of the animation.
     * @defaultValue wave
     */
    animation?: 'wave' | 'none' | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {SkeletonPassThroughOptions}
     */
    pt?: PassThrough<SkeletonPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Skeleton component.
 */
export interface SkeletonSlots {}

/**
 * Defines valid emits in Skeleton component.
 */
export interface SkeletonEmitsOptions {}

export declare type SkeletonEmits = EmitFn<SkeletonEmitsOptions>;

/**
 * **wangsVue - Skeleton**
 *
 * _Skeleton is a placeholder to display instead of the actual content._
 *
 * [Live Demo](https://www.wangsvue.org/skeleton/)
 * --- ---
 * ![wangsVue](https://wangsfaces.org/cdn/wangsvue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Skeleton: DefineComponent<SkeletonProps, SkeletonSlots, SkeletonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Skeleton: GlobalComponentConstructor<SkeletonProps, SkeletonSlots, SkeletonEmits>;
    }
}

export default Skeleton;
