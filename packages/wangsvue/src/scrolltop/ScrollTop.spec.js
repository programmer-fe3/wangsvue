import { mount } from '@vue/test-utils';
import wangsVue from 'wangsvue/config';
import ScrollTop from './ScrollTop.vue';

describe('ScrollTop.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ScrollTop, {
            global: {
                plugins: [wangsVue],
                stubs: {
                    transition: false
                }
            }
        });
    });

    it('should exist', async () => {
        await wrapper.setData({ visible: true });

        expect(wrapper.find('.p-scrolltop.p-component').exists()).toBe(true);
    });
});
