import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'usewangsVue', as: 'usewangsVue', from: 'wangsvue/config' },
    { name: 'useStyle', as: 'useStyle', from: 'wangsvue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: 'wangsvue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: 'wangsvue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: 'wangsvue/usedialog' }
]);
