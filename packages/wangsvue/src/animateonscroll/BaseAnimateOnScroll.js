import BaseDirective from '@wangsvue/core/basedirective';
import AnimateOnScrollStyle from 'wangsvue/animateonscroll/style';

const BaseAnimateOnScroll = BaseDirective.extend({
    style: AnimateOnScrollStyle
});

export default BaseAnimateOnScroll;
