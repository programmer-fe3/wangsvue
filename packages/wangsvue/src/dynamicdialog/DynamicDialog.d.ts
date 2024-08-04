/**
 *
 * DynamicDialogs can be created dynamically with any component as the content using a DialogService.
 *
 * [Live Demo](https://wangsvue.org/dynamicdialog)
 *
 * @module dynamicdialog
 *
 */
import type { DefineComponent, EmitFn, GlobalComponentConstructor } from '@wangsvue/core';

/**
 * Defines valid properties in DynamicDialog component.
 */
export interface DynamicDialogProps {
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in DynamicDialog component.
 */
export interface DynamicDialogSlots {}

/**
 * Defines valid emits in DynamicDialog component.
 */
export interface DynamicDialogEmitsOptions {}

export declare type DynamicDialogEmits = EmitFn<DynamicDialogEmitsOptions>;

/**
 * **wangsVue - DynamicDialog**
 *
 * _DynamicDialogs can be created dynamically with any component as the content using a DialogService._
 *
 * [Live Demo](https://www.wangsvue.org/dynamicdialog/)
 * --- ---
 * ![wangsVue](https://wangsfaces.org/cdn/wangsvue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const DynamicDialog: DefineComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DynamicDialog: GlobalComponentConstructor<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits>;
    }
}

export default DynamicDialog;
