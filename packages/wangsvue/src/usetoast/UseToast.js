import { inject } from 'vue';

export const wangsVueToastSymbol = Symbol();

export function useToast() {
    const wangsVueToast = inject(wangsVueToastSymbol);

    if (!wangsVueToast) {
        throw new Error('No wangsVue Toast provided!');
    }

    return wangsVueToast;
}
