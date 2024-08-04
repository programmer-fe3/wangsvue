<template>
    <button v-ripple :class="cx('last')" type="button" v-bind="getPTOptions('last')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleDoubleRightIcon'" :class="cx('lastIcon')" v-bind="getPTOptions('lastIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import AngleDoubleRightIcon from '@wangsvue/icons/angledoubleright';
import Ripple from 'wangsvue/ripple';

export default {
    name: 'LastPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleDoubleRightIcon: AngleDoubleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
