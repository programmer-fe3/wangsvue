/**
 *
 * OrderList is used to managed the order of a collection.
 *
 * [Live Demo](https://wangsvue.org/orderlist)
 *
 * @module orderliststyle
 *
 */
import type { BaseStyle } from '@wangsvue/core/base/style';

export enum OrderListClasses {
    /**
     * Class name of the root element
     */
    root = 'p-orderlist',
    /**
     * Class name of the controls element
     */
    controls = 'p-orderlist-controls'
}

export interface OrderListStyle extends BaseStyle {}
