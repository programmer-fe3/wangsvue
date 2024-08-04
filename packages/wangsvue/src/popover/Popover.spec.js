import { mount } from '@vue/test-utils';
import wangsVue from 'wangsvue/config';
import Popover from './Popover.vue';

describe('Popover.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Popover, {
            global: {
                plugins: [wangsVue],
                stubs: {
                    teleport: true
                }
            },
            slots: {
                default: 'wangsVue'
            }
        });

        await wrapper.vm.toggle({}, {});
    });

    it('should exist', () => {
        expect(wrapper.find('.p-popover.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').text()).toBe('wangsVue');
    });
});
