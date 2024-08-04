import ConfirmationEventBus from 'wangsvue/confirmationeventbus';
import { wangsVueConfirmSymbol } from 'wangsvue/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(wangsVueConfirmSymbol, ConfirmationService);
    }
};
