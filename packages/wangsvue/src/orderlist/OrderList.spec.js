import { mount } from '@vue/test-utils';
import wangsVue from 'wangsvue/config';
import OrderList from './OrderList.vue';

describe('OrderList.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(OrderList, {
            global: {
                plugins: [wangsVue]
            },
            props: {
                modelValue: [
                    {
                        id: '1000',
                        code: 'vbb124btr',
                        name: 'Game Controller',
                        description: 'Product Description',
                        image: 'game-controller.jpg',
                        price: 99,
                        category: 'Electronics',
                        quantity: 2,
                        inventoryStatus: 'LOWSTOCK',
                        rating: 4
                    },
                    {
                        id: '1001',
                        code: 'nvklal433',
                        name: 'Black Watch',
                        description: 'Product Description',
                        image: 'black-watch.jpg',
                        price: 72,
                        category: 'Accessories',
                        quantity: 61,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    },
                    {
                        id: '1002',
                        code: 'zz21cz3c1',
                        name: 'Blue Band',
                        description: 'Product Description',
                        image: 'blue-band.jpg',
                        price: 79,
                        category: 'Fitness',
                        quantity: 2,
                        inventoryStatus: 'LOWSTOCK',
                        rating: 3
                    },
                    {
                        id: '1003',
                        code: '244wgerg2',
                        name: 'Blue T-Shirt',
                        description: 'Product Description',
                        image: 'blue-t-shirt.jpg',
                        price: 29,
                        category: 'Clothing',
                        quantity: 25,
                        inventoryStatus: 'INSTOCK',
                        rating: 5
                    },
                    {
                        id: '1004',
                        code: 'h456wer53',
                        name: 'Bracelet',
                        description: 'Product Description',
                        image: 'bracelet.jpg',
                        price: 15,
                        category: 'Accessories',
                        quantity: 73,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    },
                    {
                        id: '1005',
                        code: 'cm230f032',
                        name: 'Gaming Set',
                        description: 'Product Description',
                        image: 'gaming-set.jpg',
                        price: 299,
                        category: 'Electronics',
                        quantity: 63,
                        inventoryStatus: 'INSTOCK',
                        rating: 3
                    }
                ]
            },
            slots: {
                header: 'List of Products',
                item: `
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="image-container">
                                <img :src="'images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                            </div>
                            <div class="product-list-detail">
                                <h6 class="mb-2">{{slotProps.item.name}}</h6>
                                <i class="pi pi-tag product-category-icon"></i>
                                <span class="product-category">{{slotProps.item.category}}</span>
                            </div>
                            <div class="product-list-action">
                                <h6 class="mb-2">\${{slotProps.item.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span>
                            </div>
                        </div>
                    </template>
                `
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-orderlist.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-orderlist-controls').exists()).toBe(true);
        expect(wrapper.findAll('li.p-listbox-option').length).toBe(6);
    });

    it('should select item', async () => {
        const listBoxOption = wrapper.find('li.p-listbox-option');

        expect(listBoxOption.classes()).not.toContain('p-listbox-option-selected');

        await listBoxOption.trigger('click');

        expect(wrapper.findAll('li.p-listbox-option')[0].classes()).toContain('p-listbox-option-selected');
    });

    it('should slot works', () => {
        expect(wrapper.find('.p-listbox-header').text()).toBe('List of Products');
        expect(wrapper.findAll('.product-item').length).toBe(6);
    });

    it('should change order', async () => {
        await wrapper.setProps({ selection: [wrapper.vm.modelValue[2]] });
        await wrapper.setData({ d_selection: [wrapper.vm.modelValue[2]] });

        expect(wrapper.findAll('li.p-listbox-option')[2].classes()).toContain('p-listbox-option-selected');

        await wrapper.vm.moveUp({});

        expect(wrapper.emitted()['update:modelValue'][0][0][1]).toEqual(wrapper.vm.modelValue[2]);
    });
});
