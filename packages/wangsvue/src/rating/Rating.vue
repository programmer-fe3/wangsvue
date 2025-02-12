<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <template v-for="value in stars" :key="value">
            <div :class="cx('option', { value })" @click="onOptionClick($event, value)" v-bind="getPTOptions('option', value)" :data-p-active="value <= modelValue" :data-p-focused="value === focusedOptionIndex">
                <span class="p-hidden-accessible" v-bind="ptm('hiddenOptionInputContainer')" :data-p-hidden-accessible="true">
                    <input
                        type="radio"
                        :value="value"
                        :name="name"
                        :checked="modelValue === value"
                        :disabled="disabled"
                        :readonly="readonly"
                        :aria-label="starAriaLabel(value)"
                        @focus="onFocus($event, value)"
                        @blur="onBlur"
                        @change="onChange($event, value)"
                        v-bind="ptm('hiddenOptionInput')"
                    />
                </span>
                <slot v-if="value <= modelValue" name="onicon" :value="value" :class="cx('onIcon')">
                    <component :is="onIcon ? 'span' : 'StarFillIcon'" :class="[cx('onIcon'), onIcon]" v-bind="ptm('onIcon')" />
                </slot>
                <slot v-else name="officon" :value="value" :class="cx('offIcon')">
                    <component :is="offIcon ? 'span' : 'StarIcon'" :class="[cx('offIcon'), offIcon]" v-bind="ptm('offIcon')" />
                </slot>
            </div>
        </template>
    </div>
</template>

<script>
import { UniqueComponentId } from '@wangsvue/core/utils';
import { getFirstFocusableElement, focus } from '@primeuix/utils/dom';
import BanIcon from '@wangsvue/icons/ban';
import StarIcon from '@wangsvue/icons/star';
import StarFillIcon from '@wangsvue/icons/starfill';
import BaseRating from './BaseRating.vue';

export default {
    name: 'Rating',
    extends: BaseRating,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    data() {
        return {
            name: this.$attrs.name,
            focusedOptionIndex: -1,
            isFocusVisibleItem: true
        };
    },
    watch: {
        '$attrs.name': function (newValue) {
            this.name = newValue || UniqueComponentId();
        }
    },
    mounted() {
        this.name = this.name || UniqueComponentId();
    },
    methods: {
        getPTOptions(key, value) {
            return this.ptm(key, {
                context: {
                    active: value <= this.modelValue,
                    focused: value === this.focusedOptionIndex
                }
            });
        },
        onOptionClick(event, value) {
            if (!this.readonly && !this.disabled) {
                this.onOptionSelect(event, value);
                this.isFocusVisibleItem = false;
                const firstFocusableEl = getFirstFocusableElement(event.currentTarget);

                firstFocusableEl && focus(firstFocusableEl);
            }
        },
        onFocus(event, value) {
            this.focusedOptionIndex = value;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onChange(event, value) {
            this.onOptionSelect(event, value);
            this.isFocusVisibleItem = true;
        },
        onOptionSelect(event, value) {
            if (this.focusedOptionIndex === value || this.modelValue === value) {
                this.focusedOptionIndex = -1;
                this.updateModel(event, null);
            } else {
                this.focusedOptionIndex = value;
                this.updateModel(event, value || null);
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', { originalEvent: event, value });
        },
        starAriaLabel(value) {
            return value === 1 ? this.$wangsvue.config.locale.aria.star : this.$wangsvue.config.locale.aria.stars.replace(/{star}/g, value);
        }
    },
    components: {
        StarFillIcon: StarFillIcon,
        StarIcon: StarIcon,
        BanIcon: BanIcon
    }
};
</script>
