import { Theme, ThemeService } from '@primeuix/styled';
import { getKeyValue, isArray, isEmpty, isFunction, isObject, isString, resolve, toCapitalCase, toFlatCase } from '@primeuix/utils/object';
import Base from '@wangsvue/core/base';
import BaseStyle from '@wangsvue/core/base/style';
import WangsVueService from '@wangsvue/core/service';
import { UniqueComponentId } from '@wangsvue/core/utils';
import { mergeProps } from 'vue';

const BaseDirective = {
    _getMeta: (...args) => [isObject(args[0]) ? undefined : args[0], resolve(isObject(args[0]) ? args[0] : args[1])],
    _getConfig: (binding, vnode) => (binding?.instance?.$wangsvue || vnode?.ctx?.appContext?.config?.globalProperties?.$wangsvue)?.config,
    _getOptionValue: getKeyValue,
    _getPTValue: (instance = {}, obj = {}, key = '', params = {}, searchInDefaultPT = true) => {
        const getValue = (...args) => {
            const value = BaseDirective._getOptionValue(...args);

            return isString(value) || isArray(value) ? { class: value } : value;
        };

        const { mergeSections = true, mergeProps: useMergeProps = false } = instance.binding?.value?.ptOptions || instance.$wangsvueConfig?.ptOptions || {};
        const global = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : undefined;
        const self = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, { ...params, global: global || {} });
        const datasets = BaseDirective._getPTDatasets(instance, key);

        return mergeSections || (!mergeSections && self) ? (useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
    },
    _getPTDatasets(instance = {}, key = '') {
        const datasetPrefix = 'data-pc-';

        return {
            ...(key === 'root' && { [`${datasetPrefix}name`]: toFlatCase(instance.$name) }),
            [`${datasetPrefix}section`]: toFlatCase(key)
        };
    },
    _getPT: (pt, key = '', callback) => {
        const getValue = (value) => {
            const computedValue = callback ? callback(value) : value;
            const _key = toFlatCase(key);

            return computedValue?.[_key] ?? computedValue;
        };

        return pt?.hasOwnProperty('_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt);
    },
    _usePT: (instance = {}, pt, callback, key, params) => {
        const fn = (value) => callback(value, key, params);

        if (pt?.hasOwnProperty('_usept')) {
            const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || instance.$wangsvueConfig?.ptOptions || {};
            const originalValue = fn(pt.originalValue);
            const value = fn(pt.value);

            if (originalValue === undefined && value === undefined) return undefined;
            else if (isString(value)) return value;
            else if (isString(originalValue)) return originalValue;

            return mergeSections || (!mergeSections && value) ? (useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
        }

        return fn(pt);
    },
    _useDefaultPT: (instance = {}, defaultPT = {}, callback, key, params) => {
        return BaseDirective._usePT(instance, defaultPT, callback, key, params);
    },
    _loadStyles: (el, binding, vnode) => {
        const config = BaseDirective._getConfig(binding, vnode);
        const useStyleOptions = { nonce: config?.csp?.nonce };

        BaseDirective._loadCoreStyles(el.$instance, useStyleOptions);
        BaseDirective._loadThemeStyles(el.$instance, useStyleOptions);
        BaseDirective._loadScopedThemeStyles(el.$instance, useStyleOptions);

        BaseDirective._themeChangeListener(() => BaseDirective._loadThemeStyles(el.$instance, useStyleOptions));
    },
    _loadCoreStyles(instance = {}, useStyleOptions) {
        if (!Base.isStyleNameLoaded(instance.$style?.name) && instance.$style?.name) {
            BaseStyle.loadCSS(useStyleOptions);
            instance.isUnstyled() && instance.$style?.loadCSS(useStyleOptions);

            Base.setLoadedStyleName(instance.$style.name);
        }
    },
    _loadThemeStyles: (instance = {}, useStyleOptions) => {
        if (instance?.isUnstyled()) return;

        // common
        if (!Theme.isStyleNameLoaded('common')) {
            const { primitive, semantic } = instance.$style?.getCommonTheme?.() || {};

            BaseStyle.load(primitive?.css, { name: 'primitive-variables', ...useStyleOptions });
            BaseStyle.load(semantic?.css, { name: 'semantic-variables', ...useStyleOptions });
            BaseStyle.loadTheme({ name: 'global-style', ...useStyleOptions });

            Theme.setLoadedStyleName('common');
        }

        // directive
        if (!Theme.isStyleNameLoaded(instance.$style?.name) && instance.$style?.name) {
            const { css } = instance.$style?.getDirectiveTheme?.() || {};

            instance.$style?.load(css, { name: `${instance.$style.name}-variables`, ...useStyleOptions });
            instance.$style?.loadTheme({ name: `${instance.$style.name}-style`, ...useStyleOptions });

            Theme.setLoadedStyleName(instance.$style.name);
        }

        // layer order
        if (!Theme.isStyleNameLoaded('layer-order')) {
            const layerOrder = instance.$style?.getLayerOrderThemeCSS?.();

            BaseStyle.load(layerOrder, { name: 'layer-order', first: true, ...useStyleOptions });

            Theme.setLoadedStyleName('layer-order');
        }
    },
    _loadScopedThemeStyles(instance = {}, useStyleOptions) {
        const preset = instance.preset();

        if (preset && instance.$attrSelector) {
            const { css } = instance.$style?.getPresetTheme?.(preset, `[${instance.$attrSelector}]`) || {};
            const scopedStyle = instance.$style?.load(css, { name: `${instance.$attrSelector}-${instance.$style.name}`, ...useStyleOptions });

            instance.scopedStyleEl = scopedStyle.el;
        }
    },
    _themeChangeListener(callback = () => {}) {
        Base.clearLoadedStyleNames();
        ThemeService.on('theme:change', callback);
    },
    _hook: (directiveName, hookName, el, binding, vnode, prevVnode) => {
        const name = `on${toCapitalCase(hookName)}`;
        const config = BaseDirective._getConfig(binding, vnode);
        const instance = el?.$instance;
        const selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding?.value?.pt, directiveName), BaseDirective._getOptionValue, `hooks.${name}`);
        const defaultHook = BaseDirective._useDefaultPT(instance, config?.pt?.directives?.[directiveName], BaseDirective._getOptionValue, `hooks.${name}`);
        const options = { el, binding, vnode, prevVnode };

        selfHook?.(instance, options);
        defaultHook?.(instance, options);
    },
    _mergeProps(instance = {}, fn, ...args) {
        return isFunction(fn) ? fn(...args) : mergeProps(...args);
    },
    _extend: (name, options = {}) => {
        const handleHook = (hook, el, binding, vnode, prevVnode) => {
            el._$instances = el._$instances || {};

            const config = BaseDirective._getConfig(binding, vnode);
            const $prevInstance = el._$instances[name] || {};
            const $options = isEmpty($prevInstance) ? { ...options, ...options?.methods } : {};

            el._$instances[name] = {
                ...$prevInstance,
                /* new instance variables to pass in directive methods */
                $name: name,
                $host: el,
                $binding: binding,
                $modifiers: binding?.modifiers,
                $value: binding?.value,
                $el: $prevInstance['$el'] || el || undefined,
                $style: { classes: undefined, inlineStyles: undefined, load: () => {}, loadCSS: () => {}, loadTheme: () => {}, ...options?.style },
                $wangsvueConfig: config,
                $attrSelector: el.$attrSelector,
                /* computed instance variables */
                defaultPT: () => BaseDirective._getPT(config?.pt, undefined, (value) => value?.directives?.[name]),
                isUnstyled: () => (el.$instance?.$binding?.value?.unstyled !== undefined ? el.$instance?.$binding?.value?.unstyled : config?.unstyled),
                theme: () => el.$instance?.$wangsvueConfig?.theme,
                preset: () => el.$instance?.$binding?.value?.dt,
                /* instance's methods */
                ptm: (key = '', params = {}) => BaseDirective._getPTValue(el.$instance, el.$instance?.$binding?.value?.pt, key, { ...params }),
                ptmo: (obj = {}, key = '', params = {}) => BaseDirective._getPTValue(el.$instance, obj, key, params, false),
                cx: (key = '', params = {}) => (!el.$instance?.isUnstyled() ? BaseDirective._getOptionValue(el.$instance?.$style?.classes, key, { ...params }) : undefined),
                sx: (key = '', when = true, params = {}) => (when ? BaseDirective._getOptionValue(el.$instance?.$style?.inlineStyles, key, { ...params }) : undefined),
                ...$options
            };

            el.$instance = el._$instances[name]; // pass instance data to hooks
            el.$instance[hook]?.(el, binding, vnode, prevVnode); // handle hook in directive implementation
            el[`$${name}`] = el.$instance; // expose all options with $<directive_name>
            BaseDirective._hook(name, hook, el, binding, vnode, prevVnode); // handle hooks during directive uses (global and self-definition)

            el.$pd ||= {};
            el.$pd[name] = { ...el.$pd?.[name], name, instance: el.$instance };
        };

        const handleWatch = (el) => {
            const watchers = el.$instance?.watch;

            // for 'config'
            watchers?.['config']?.call(el.$instance, el.$instance?.$wangsvueConfig);
            WangsVueService.on('config:change', ({ newValue, oldValue }) => watchers?.['config']?.call(el.$instance, newValue, oldValue));

            // for 'config.ripple'
            watchers?.['config.ripple']?.call(el.$instance, el.$instance?.$wangsvueConfig?.ripple);
            WangsVueService.on('config:ripple:change', ({ newValue, oldValue }) => watchers?.['config.ripple']?.call(el.$instance, newValue, oldValue));
        };

        return {
            created: (el, binding, vnode, prevVnode) => {
                handleHook('created', el, binding, vnode, prevVnode);
            },
            beforeMount: (el, binding, vnode, prevVnode) => {
                el.$attrSelector = UniqueComponentId('pd');
                BaseDirective._loadStyles(el, binding, vnode);
                handleHook('beforeMount', el, binding, vnode, prevVnode);
                handleWatch(el);
            },
            mounted: (el, binding, vnode, prevVnode) => {
                BaseDirective._loadStyles(el, binding, vnode);
                handleHook('mounted', el, binding, vnode, prevVnode);
            },
            beforeUpdate: (el, binding, vnode, prevVnode) => {
                handleHook('beforeUpdate', el, binding, vnode, prevVnode);
            },
            updated: (el, binding, vnode, prevVnode) => {
                BaseDirective._loadStyles(el, binding, vnode);
                handleHook('updated', el, binding, vnode, prevVnode);
            },
            beforeUnmount: (el, binding, vnode, prevVnode) => {
                handleHook('beforeUnmount', el, binding, vnode, prevVnode);
            },
            unmounted: (el, binding, vnode, prevVnode) => {
                el.$instance?.scopedStyleEl?.value?.remove();
                handleHook('unmounted', el, binding, vnode, prevVnode);
            }
        };
    },
    extend: (...args) => {
        const [name, options] = BaseDirective._getMeta(...args);

        return {
            extend: (..._args) => {
                const [_name, _options] = BaseDirective._getMeta(..._args);

                return BaseDirective.extend(_name, { ...options, ...options?.methods, ..._options });
            },
            ...BaseDirective._extend(name, options)
        };
    }
};

export default BaseDirective;
