import { mount } from '@vue/test-utils';
import TerminalService from 'wangsvue/terminalservice';
import Terminal from './Terminal.vue';

describe('Terminal.vue', () => {
    it('should return valid command', async () => {
        const wrapper = mount({
            components: {
                Terminal
            },
            template: `<Terminal welcomeMessage="Welcome to wangsVue" prompt="wangsvue $" class="dark-demo-terminal" />`,
            mounted() {
                TerminalService.on('command', this.commandHandler);
            },
            beforeUnmount() {
                TerminalService.off('command', this.commandHandler);
            },
            methods: {
                commandHandler(text) {
                    let response;
                    let argsIndex = text.indexOf(' ');
                    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

                    switch (command) {
                        case 'd':
                            response = 'Valid command';
                            break;

                        default:
                            response = 'Unknown command: ' + command;
                    }

                    TerminalService.emit('response', response);
                }
            }
        });

        expect(wrapper.find('.p-terminal.p-component').exists()).toBe(true);
        expect(wrapper.find('input.p-terminal-prompt-value').exists()).toBe(true);
    });

    it('should return invalid command', async () => {
        const wrapper = mount({
            components: {
                Terminal
            },
            template: `<Terminal welcomeMessage="Welcome to wangsVue" prompt="wangsvue $" class="dark-demo-terminal" />`,
            mounted() {
                TerminalService.on('command', this.commandHandler);
            },
            beforeUnmount() {
                TerminalService.off('command', this.commandHandler);
            },
            methods: {
                commandHandler(text) {
                    let response;
                    let argsIndex = text.indexOf(' ');
                    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

                    switch (command) {
                        case 'd':
                            response = 'Valid command';
                            break;

                        default:
                            response = 'Unknown command: ' + command;
                    }

                    TerminalService.emit('response', response);
                }
            }
        });

        expect(wrapper.find('.p-terminal.p-component').exists()).toBe(true);
        expect(wrapper.find('input.p-terminal-prompt-value').exists()).toBe(true);
    });
});
