<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Ease of customization may present an issue if you have global styles on HTML elements like inputs and buttons that are also utilized by wangsVue because global styles with a broader scope e.g. <i>button { }</i> and no layer always
            override the wangsVue components leading to unexpected results. A common use case for global styles applying to standard HTML elements is CSS reset utilities to remove the default styling of the browsers. In this case, best practice is
            wrapping your CSS in a layer like <i>reset</i> and make sure <i>wangsvue</i> comes after your layer since layers defined after has higher precedence. This way, your Reset CSS does not get in the way of wangsVue components.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
/* Order */
@layer reset, wangsvue;

/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}
`
            }
        };
    }
};
</script>

<style>
.my-switch-slider {
    border-radius: 0;
}

.my-switch-slider:before {
    border-radius: 0;
}
</style>
