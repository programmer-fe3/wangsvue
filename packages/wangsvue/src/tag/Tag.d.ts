/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.wangsvue.org/tag)
 *
 * @module tag
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@wangsvue/core';
import type { ComponentHooks } from '@wangsvue/core/basecomponent';
import type { PassThroughOptions } from 'wangsvue/passthrough';
import { VNode } from 'vue';

export declare type TagPassThroughOptionType = TagPassThroughAttributes | ((options: TagPassThroughMethodOptions) => TagPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TagPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TagProps;
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
 * @see {@link TagProps.pt}
 */
export interface TagPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TagPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: TagPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: TagPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TagPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Tag component.
 */
export interface TagProps {
    /**
     * Value to display inside the tag.
     */
    value?: any;
    /**
     * Severity type of the tag.
     */
    severity?: HintedString<'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast'> | undefined;
    /**
     * Whether the corners of the tag are rounded.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
    /**
     * Icon of the tag to display next to the value.
     */
    icon?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TagPassThroughOptions}
     */
    pt?: PassThrough<TagPassThroughOptions>;
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
 * Defines valid slots in Tag component.
 */
export interface TagSlots {
    /**
     * Custom content template
     */
    default(): VNode[];
    /**
     * Custom icon template
     */
    icon(): VNode[];
}

/**
 * Defines valid emits in Tag component.
 */
export interface TagEmitsOptions {}

export declare type TagEmits = EmitFn<TagEmitsOptions>;

/**
 * **wangsVue - Tag**
 *
 * _Tag component is used to categorize content._
 *
 * [Live Demo](https://www.wangsvue.org/tag/)
 * --- ---
 * ![wangsVue](https://wangsfaces.org/cdn/wangsvue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Tag: DefineComponent<TagProps, TagSlots, TagEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Tag: GlobalComponentConstructor<TagProps, TagSlots, TagEmits>;
    }
}

export default Tag;
