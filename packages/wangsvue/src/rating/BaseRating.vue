<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import RatingStyle from 'wangsvue/rating/style';

export default {
    name: 'BaseRating',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        onIcon: {
            type: String,
            default: undefined
        },
        offIcon: {
            type: String,
            default: undefined
        }
    },
    style: RatingStyle,
    provide() {
        return {
            $pcRating: this,
            $parentInstance: this
        };
    }
};
</script>
