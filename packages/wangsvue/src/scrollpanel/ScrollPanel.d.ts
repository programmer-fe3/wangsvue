/**
 *
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.wangsvue.org/scrollpanel/)
 *
 * @module scrollpanel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@wangsvue/core';
import type { ComponentHooks } from '@wangsvue/core/basecomponent';
import type { PassThroughOptions } from 'wangsvue/passthrough';
import { VNode } from 'vue';

export declare type ScrollPanelPassThroughOptionType = ScrollPanelPassThroughAttributes | ((options: ScrollPanelPassThroughMethodOptions) => ScrollPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ScrollPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ScrollPanelProps;
    /**
     * Defines current inline state.
     */
    state: ScrollPanelState;
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
 * @see {@link ScrollPanelProps.pt}
 */
export interface ScrollPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the content container's DOM element.
     */
    contentContainer?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the horizontal panel's DOM element.
     */
    barX?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the vertical panel's DOM element.
     */
    barY?: ScrollPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ScrollPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Panel component.
 */
export interface ScrollPanelState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current scrollpanel orientation.
     * @defaultValue vertical
     */
    orientation: string;
    /**
     * Latest scroll top position.
     * @defaultValue 0
     */
    lastScrollTop: number;
    /**
     * Latest scroll left position.
     * @defaultValue 0
     */
    lastScrollLeft: number;
}

/**
 * Defines valid properties in ScrollPanel component.
 */
export interface ScrollPanelProps {
    /**
     * Step factor to scroll the content while pressing the arrow keys.
     * @defaultValue 5
     */
    step?: number | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ScrollPanelPassThroughOptions}
     */
    pt?: PassThrough<ScrollPanelPassThroughOptions>;
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
 * Defines valid slots in Accordion slots.
 */
export interface ScrollPanelSlots {
    /**
     * Custom content slot.
     */
    default: () => VNode[];
}

export interface ScrollPanelEmitsOptions {}

export declare type ScrollPanelEmits = EmitFn<ScrollPanelEmitsOptions>;

/**
 * **wangsVue - ScrollPanel**
 *
 * _ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.._
 *
 * [Live Demo](https://www.wangsvue.org/scrollpanel/)
 * --- ---
 * ![wangsVue](https://wangsfaces.org/cdn/wangsvue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ScrollPanel: DefineComponent<ScrollPanelProps, ScrollPanelSlots, ScrollPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ScrollPanel: GlobalComponentConstructor<ScrollPanelProps, ScrollPanelSlots, ScrollPanelEmits>;
    }
}

export default ScrollPanel;
