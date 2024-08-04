import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: 'wangsvue/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: 'wangsvue/tooltip' },
    { name: 'ripple', as: 'Ripple', from: 'wangsvue/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: 'wangsvue/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: 'wangsvue/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: 'wangsvue/animateonscroll' }
]);
