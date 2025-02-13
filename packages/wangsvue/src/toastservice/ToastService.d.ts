/**
 *
 * [Live Demo](https://www.wangsvue.org/toast/)
 *
 * @module toastservice-usetoast
 * @todo 'use' is not a valid name for a module. Next release will change.
 */
import type { ToastMessageOptions } from 'wangsvue/toast';
import { Plugin } from 'vue';

declare const plugin: Plugin;
export default plugin;

/**
 * Toast Service methods.
 *
 * @group Model
 *
 */
export interface ToastServiceMethods {
    /**
     * Displays the message in a suitable Toast component.
     * @param {ToastMessageOptions} message - Message instance.
     */
    add(message: ToastMessageOptions): void;
    /**
     * Clears the message.
     * @param {ToastMessageOptions} message - Message instance.
     */
    remove(message: ToastMessageOptions): void;
    /**
     * Clears the messages that belongs to the group.
     * @param {string} group - Name of the message group.
     */
    removeGroup(group: string): void;
    /**
     * Clears all the messages.
     */
    removeAllGroups(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $toast: ToastServiceMethods;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $toast: ToastServiceMethods;
    }
}
