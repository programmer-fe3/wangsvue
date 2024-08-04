import { inject } from 'vue';

export const wangsVueDialogSymbol = Symbol();

export function useDialog() {
    const wangsVueDialog = inject(wangsVueDialogSymbol);

    if (!wangsVueDialog) {
        throw new Error('No wangsVue Dialog provided!');
    }

    return wangsVueDialog;
}
