import type { DefineComponent, EmitFn } from '@wangsvue/core';

export interface IconProps {
    label?: string | undefined;
    spin?: boolean;
}

export interface IconSlots {}

export interface IconEmitsOptions {}

export declare type IconEmits = EmitFn<IconEmitsOptions>;

declare const Icon: DefineComponent<IconProps, IconSlots, IconEmits>;
