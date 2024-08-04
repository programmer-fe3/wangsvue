import BaseDirective from '@wangsvue/core/basedirective';
import BadgeDirectiveStyle from 'wangsvue/badgedirective/style';

const BaseBadgeDirective = BaseDirective.extend({
    style: BadgeDirectiveStyle
});

export default BaseBadgeDirective;
