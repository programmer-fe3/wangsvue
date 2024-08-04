/**
 *
 * OverlayBadge represents people using icon, label, image and badge.
 *
 * [Live Demo](https://www.wangsvue.org/badge)
 *
 * @module overlaybadge
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@wangsvue/core';
import type { ComponentHooks } from '@wangsvue/core/basecomponent';
import type { BadgePassThroughOptions } from 'wangsvue/badge';
import type { PassThroughOptions } from 'wangsvue/passthrough';
import { VNode } from 'vue';

export declare type OverlayBadgePassThroughOptionType<T = any> = OverlayBadgePassThroughAttributes | ((options: OverlayBadgePassThroughMethodOptions<T>) => OverlayBadgePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface OverlayBadgePassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: OverlayBadgeProps;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
    /**
     * Defines parent instance.
     */
    parent: T;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface OverlayBadgeSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: OverlayBadgeProps;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface OverlayBadgePassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link OverlayBadgeProps.pt}
 */
export interface OverlayBadgePassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OverlayBadgePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the Badge.
     * @see {@link BadgePassThroughOptions}
     */
    pcBadge?: BadgePassThroughOptions<OverlayBadgeSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in OverlayBadge component.
 */
export interface OverlayBadgeProps {
    /**
     * Value to display inside the badge.
     */
    value?: string | number;
    /**
     * Severity type of the badge.
     */
    severity?: HintedString<'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast'> | null | undefined;
    /**
     * Size of the badge, valid options are 'small', 'large', and 'xlarge'.
     */
    size?: 'small' | 'large' | 'xlarge' | null | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {OverlayBadgePassThroughOptions}
     */
    pt?: PassThrough<OverlayBadgePassThroughOptions>;
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
 * Defines valid slots in OverlayBadge component.
 */
export interface OverlayBadgeSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in display.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in OverlayBadge component.
 */
export interface OverlayBadgeEmitsOptions {}

export declare type OverlayBadgeEmits = EmitFn<OverlayBadgeEmitsOptions>;

/**
 * **wangsVue - OverlayBadge**
 *
 * _OverlayBadge represents people using icon, label, image and badge._
 *
 * [Live Demo](https://www.wangsvue.org/badge/)
 * --- ---
 * ![wangsVue](https://wangsfaces.org/cdn/wangsvue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const OverlayBadge: DefineComponent<OverlayBadgeProps, OverlayBadgeSlots, OverlayBadgeEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        OverlayBadge: GlobalComponentConstructor<OverlayBadgeProps, OverlayBadgeSlots, OverlayBadgeEmits>;
    }
}

export default OverlayBadge;
