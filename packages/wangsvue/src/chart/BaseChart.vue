<script>
import BaseComponent from '@wangsvue/core/basecomponent';
import ChartStyle from 'wangsvue/chart/style';

export default {
    name: 'BaseChart',
    extends: BaseComponent,
    props: {
        type: String,
        data: null,
        options: null,
        plugins: null,
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 150
        },
        canvasProps: {
            type: null,
            default: null
        }
    },
    style: ChartStyle,
    provide() {
        return {
            $pcChart: this,
            $parentInstance: this
        };
    }
};
</script>
