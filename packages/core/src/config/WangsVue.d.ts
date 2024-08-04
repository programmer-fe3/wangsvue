import { Plugin } from 'vue';

export interface wangsVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: wangsVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: wangsVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: any;
    ptOptions?: any;
    csp?: wangsVueCSPOptions;
}

export declare const defaultOptions: wangsVueConfiguration;

export interface wangsVueZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

export interface wangsVueCSPOptions {
    nonce?: string;
}

export interface wangsVueLocaleAriaOptions {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
    star?: string;
    stars?: string;
    selectAll?: string;
    unselectAll?: string;
    close?: string;
    previous?: string;
    next?: string;
    navigation?: string;
    scrollTop?: string;
    moveUp?: string;
    moveTop?: string;
    moveDown?: string;
    moveBottom?: string;
    moveToTarget?: string;
    moveToSource?: string;
    moveAllToTarget?: string;
    moveAllToSource?: string;
    pageLabel?: string;
    firstPageLabel?: string;
    lastPageLabel?: string;
    nextPageLabel?: string;
    prevPageLabel?: string;
    rowsPerPageLabel?: string;
    jumpToPageDropdownLabel?: string;
    jumpToPageInputLabel?: string;
    selectRow?: string;
    unselectRow?: string;
    expandRow?: string;
    collapseRow?: string;
    showFilterMenu?: string;
    hideFilterMenu?: string;
    filterOperator?: string;
    filterConstraint?: string;
    editRow?: string;
    saveEdit?: string;
    cancelEdit?: string;
    listView?: string;
    gridView?: string;
    slide?: string;
    slideNumber?: string;
    zoomImage?: string;
    zoomIn?: string;
    zoomOut?: string;
    rotateRight?: string;
    rotateLeft?: string;
    listLabel?: string;
}

export interface wangsVueLocaleOptions {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    completed?: string;
    pending?: string;
    fileSizeTypes: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear?: string;
    chooseMonth?: string;
    chooseDate?: string;
    prevDecade?: string;
    nextDecade?: string;
    prevYear?: string;
    nextYear?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevHour?: string;
    nextHour?: string;
    prevMinute?: string;
    nextMinute?: string;
    prevSecond?: string;
    nextSecond?: string;
    am?: string;
    pm?: string;
    today?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    showMonthAfterYear?: boolean;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyFilterMessage?: string;
    searchMessage?: string;
    selectionMessage?: string;
    emptySelectionMessage?: string;
    emptySearchMessage?: string;
    emptyMessage?: string;
    fileChosenMessage?: string;
    noFileChosenMessage?: string;
    aria?: wangsVueLocaleAriaOptions;
}

export declare function usewangsVue(): {
    config: wangsVueConfiguration;
};

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $wangsvue: {
            config: wangsVueConfiguration;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $wangsvue: {
            config: wangsVueConfiguration;
        };
    }
}
