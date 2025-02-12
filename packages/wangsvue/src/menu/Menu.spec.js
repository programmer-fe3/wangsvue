import { mount } from '@vue/test-utils';
import wangsVue from 'wangsvue/config';
import Menu from './Menu.vue';

describe('Menu.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Menu, {
            global: {
                plugins: [wangsVue],
                stubs: {
                    'router-link': true,
                    teleport: true
                }
            },
            props: {
                model: [
                    {
                        label: 'Options',
                        items: [
                            {
                                label: 'Update',
                                icon: 'pi pi-refresh',
                                command: () => {
                                    this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                                }
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-times',
                                command: () => {
                                    this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                                }
                            }
                        ]
                    },
                    {
                        label: 'Navigate',
                        items: [
                            {
                                label: 'Vue Website',
                                icon: 'pi pi-external-link',
                                url: 'https://vuejs.org/'
                            },
                            {
                                label: 'Router',
                                icon: 'pi pi-upload',
                                to: '/fileupload'
                            }
                        ]
                    }
                ]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-menu.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-menu-submenu-label').length).toBe(2);
        expect(wrapper.findAll('.p-menu-submenu-label')[0].text()).toBe('Options');
        expect(wrapper.findAll('.p-menu-item').length).toBe(4);
        expect(wrapper.findAll('.p-menu-item')[0].find('span.p-menu-item-label').text()).toBe('Update');
        expect(wrapper.findAll('.p-menu-item')[2].find('a').attributes().href).toBe('https://vuejs.org/');
    });

    it('should popup work', async () => {
        await wrapper.setProps({ popup: true });

        await wrapper.vm.toggle({});

        expect(wrapper.find('.p-menu.p-component').exists()).toBe(true);
    });
});
