import type { DefaultPassThrough, PassThrough } from '@wangsvue/core';
import type { wangsVueCSPOptions, wangsVueLocaleOptions, wangsVueZIndexOptions } from '@wangsvue/core/config';
import type { AccordionPassThroughOptions } from 'wangsvue/accordion';
import type { AccordionContentPassThroughOptions } from 'wangsvue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'wangsvue/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'wangsvue/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'wangsvue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'wangsvue/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'wangsvue/autocomplete';
import type { AvatarPassThroughOptions } from 'wangsvue/avatar';
import type { AvatarGroupPassThroughOptions } from 'wangsvue/avatargroup';
import type { BadgePassThroughOptions } from 'wangsvue/badge';
import type { BadgeDirectivePassThroughOptions } from 'wangsvue/badgedirective';
import type { BlockUIPassThroughOptions } from 'wangsvue/blockui';
import type { BreadcrumbPassThroughOptions } from 'wangsvue/breadcrumb';
import type { ButtonPassThroughOptions } from 'wangsvue/button';
import type { ButtonGroupPassThroughOptions } from 'wangsvue/buttongroup';
import type { CalendarPassThroughOptions } from 'wangsvue/calendar';
import type { CardPassThroughOptions } from 'wangsvue/card';
import type { CarouselPassThroughOptions } from 'wangsvue/carousel';
import type { CascadeSelectPassThroughOptions } from 'wangsvue/cascadeselect';
import type { ChartPassThroughOptions } from 'wangsvue/chart';
import type { CheckboxPassThroughOptions } from 'wangsvue/checkbox';
import type { ChipPassThroughOptions } from 'wangsvue/chip';
import type { ChipsPassThroughOptions } from 'wangsvue/chips';
import type { ColorPickerPassThroughOptions } from 'wangsvue/colorpicker';
import type { ColumnPassThroughOptions } from 'wangsvue/column';
import type { ColumnGroupPassThroughOptions } from 'wangsvue/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'wangsvue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'wangsvue/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'wangsvue/contextmenu';
import type { DataTablePassThroughOptions } from 'wangsvue/datatable';
import type { DataViewPassThroughOptions } from 'wangsvue/dataview';
import type { DatePickerPassThroughOptions } from 'wangsvue/datepicker';
import type { DeferredContentPassThroughOptions } from 'wangsvue/deferredcontent';
import type { DialogPassThroughOptions } from 'wangsvue/dialog';
import type { DividerPassThroughOptions } from 'wangsvue/divider';
import type { DockPassThroughOptions } from 'wangsvue/dock';
import type { DrawerPassThroughOptions } from 'wangsvue/drawer';
import type { DropdownPassThroughOptions } from 'wangsvue/dropdown';
import type { EditorPassThroughOptions } from 'wangsvue/editor';
import type { FieldsetPassThroughOptions } from 'wangsvue/fieldset';
import type { FileUploadPassThroughOptions } from 'wangsvue/fileupload';
import type { FloatLabelPassThroughOptions } from 'wangsvue/floatlabel';
import type { FluidPassThroughOptions } from 'wangsvue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'wangsvue/focustrap';
import type { GalleriaPassThroughOptions } from 'wangsvue/galleria';
import type { ImagePassThroughOptions } from 'wangsvue/image';
import type { InlineMessagePassThroughOptions } from 'wangsvue/inlinemessage';
import type { InplacePassThroughOptions } from 'wangsvue/inplace';
import type { InputChipsPassThroughOptions } from 'wangsvue/inputchips';
import type { InputGroupPassThroughOptions } from 'wangsvue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'wangsvue/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'wangsvue/inputicon';
import type { InputMaskPassThroughOptions } from 'wangsvue/inputmask';
import type { InputNumberPassThroughOptions } from 'wangsvue/inputnumber';
import type { InputOtpPassThroughOptions } from 'wangsvue/inputotp';
import type { InputSwitchPassThroughOptions } from 'wangsvue/inputswitch';
import type { InputTextPassThroughOptions } from 'wangsvue/inputtext';
import type { KnobPassThroughOptions } from 'wangsvue/knob';
import type { ListboxPassThroughOptions } from 'wangsvue/listbox';
import type { MegaMenuPassThroughOptions } from 'wangsvue/megamenu';
import type { MenuPassThroughOptions } from 'wangsvue/menu';
import type { MenubarPassThroughOptions } from 'wangsvue/menubar';
import type { MessagePassThroughOptions } from 'wangsvue/message';
import type { MeterGroupPassThroughOptions } from 'wangsvue/metergroup';
import type { MultiSelectPassThroughOptions } from 'wangsvue/multiselect';
import type { OrderListPassThroughOptions } from 'wangsvue/orderlist';
import type { OrganizationChartPassThroughOptions } from 'wangsvue/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'wangsvue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'wangsvue/overlaypanel';
import type { PaginatorPassThroughOptions } from 'wangsvue/paginator';
import type { PanelPassThroughOptions } from 'wangsvue/panel';
import type { PanelMenuPassThroughOptions } from 'wangsvue/panelmenu';
import type { PassThroughOptions } from 'wangsvue/passthrough';
import type { PasswordPassThroughOptions } from 'wangsvue/password';
import type { PickListPassThroughOptions } from 'wangsvue/picklist';
import type { PopoverPassThroughOptions } from 'wangsvue/popover';
import type { ProgressBarPassThroughOptions } from 'wangsvue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'wangsvue/progressspinner';
import type { RadioButtonPassThroughOptions } from 'wangsvue/radiobutton';
import type { RatingPassThroughOptions } from 'wangsvue/rating';
import type { RippleDirectivePassThroughOptions } from 'wangsvue/ripple';
import type { RowPassThroughOptions } from 'wangsvue/row';
import type { ScrollPanelPassThroughOptions } from 'wangsvue/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'wangsvue/scrolltop';
import type { SelectPassThroughOptions } from 'wangsvue/select';
import type { SelectButtonPassThroughOptions } from 'wangsvue/selectbutton';
import type { SidebarPassThroughOptions } from 'wangsvue/sidebar';
import type { SkeletonPassThroughOptions } from 'wangsvue/skeleton';
import type { SliderPassThroughOptions } from 'wangsvue/slider';
import type { SpeedDialPassThroughOptions } from 'wangsvue/speeddial';
import type { SplitButtonPassThroughOptions } from 'wangsvue/splitbutton';
import type { SplitterPassThroughOptions } from 'wangsvue/splitter';
import type { SplitterPanelPassThroughOptions } from 'wangsvue/splitterpanel';
import type { StepPassThroughOptions } from 'wangsvue/step';
import type { StepItemPassThroughOptions } from 'wangsvue/stepitem';
import type { StepListPassThroughOptions } from 'wangsvue/steplist';
import type { StepPanelPassThroughOptions } from 'wangsvue/steppanel';
import type { StepPanelsPassThroughOptions } from 'wangsvue/steppanels';
import type { StepperPassThroughOptions } from 'wangsvue/stepper';
import type { StepsPassThroughOptions } from 'wangsvue/steps';
import type { StyleClassDirectivePassThroughOptions } from 'wangsvue/styleclass';
import type { TabPassThroughOptions } from 'wangsvue/tab';
import type { TabListPassThroughOptions } from 'wangsvue/tablist';
import type { TabMenuPassThroughOptions } from 'wangsvue/tabmenu';
import type { TabPanelPassThroughOptions } from 'wangsvue/tabpanel';
import type { TabPanelsPassThroughOptions } from 'wangsvue/tabpanels';
import type { TabsPassThroughOptions } from 'wangsvue/tabs';
import type { TabViewPassThroughOptions } from 'wangsvue/tabview';
import type { TagPassThroughOptions } from 'wangsvue/tag';
import type { TerminalPassThroughOptions } from 'wangsvue/terminal';
import type { TextareaPassThroughOptions } from 'wangsvue/textarea';
import type { TieredMenuPassThroughOptions } from 'wangsvue/tieredmenu';
import type { TimelinePassThroughOptions } from 'wangsvue/timeline';
import type { ToastPassThroughOptions } from 'wangsvue/toast';
import type { ToggleButtonPassThroughOptions } from 'wangsvue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'wangsvue/toggleswitch';
import type { ToolbarPassThroughOptions } from 'wangsvue/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'wangsvue/tooltip';
import type { TreePassThroughOptions } from 'wangsvue/tree';
import type { TreeSelectPassThroughOptions } from 'wangsvue/treeselect';
import type { TreeTablePassThroughOptions } from 'wangsvue/treetable';
import type { VirtualScrollerPassThroughOptions } from 'wangsvue/virtualscroller';

export * from '@wangsvue/core/config';
export { default } from '@wangsvue/core/config';

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
    pt?: PassThrough<wangsVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: wangsVueCSPOptions;
}

export interface wangsVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        badge?: BadgeDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        animate?: AnimateOnScrollDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
