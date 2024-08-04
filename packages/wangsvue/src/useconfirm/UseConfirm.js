import { inject } from 'vue';

export const wangsVueConfirmSymbol = Symbol();

export function useConfirm() {
    const wangsVueConfirm = inject(wangsVueConfirmSymbol);

    if (!wangsVueConfirm) {
        throw new Error('No wangsVue Confirmation provided!');
    }

    return wangsVueConfirm;
}
