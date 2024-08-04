import type { ConfirmationOptions } from 'wangsvue/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
