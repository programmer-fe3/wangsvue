import { addPlugin, addPluginTemplate, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit';
import { wangsVueResolver } from '@wangsvue/auto-import-resolver';
import type { MetaType } from '@wangsvue/metadata';
import { normalize } from 'pathe';
import Components from 'unplugin-vue-components/nuxt';
import { register } from './register';
import type { ModuleOptions } from './types';

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@wangsvue/nuxt-module',
        configKey: 'wangsvue',
        compatibility: {
            nuxt: '^3.0.0'
        }
    },
    defaults: {
        usewangsVue: true,
        autoImport: true,
        resolvePath: undefined,
        //cssLayerOrder: undefined,
        importPT: undefined,
        importTheme: undefined,
        options: {},
        components: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        directives: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        composables: {
            //prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        }
    },
    hooks: {},
    setup(moduleOptions, nuxt) {
        moduleOptions.components.exclude = moduleOptions.components.exclude || ['Editor', 'Chart'];

        const resolver = createResolver(import.meta.url);
        const registered = register(moduleOptions);
        const { autoImport, importPT, importTheme, options } = moduleOptions;
        const hasTheme = (importTheme || options?.theme) && !options?.unstyled;

        nuxt.options.runtimeConfig.public.wangsvue = {
            ...moduleOptions,
            ...registered
        };

        //nuxt.options.build.transpile.push('nuxt');
        nuxt.options.build.transpile.push('wangsvue');

        let registeredStyles: MetaType[] = registered.styles;

        if (autoImport) {
            Components(
                {
                    dts: false,
                    resolvers: [
                        wangsVueResolver({
                            components: moduleOptions.components,
                            directives: moduleOptions.directives,
                            resolve: (meta: MetaType) => {
                                registeredStyles.push({
                                    ...meta,
                                    name: `${meta.name}Style`,
                                    as: `${meta.as}Style`,
                                    from: `${meta.from}/style`
                                });
                            }
                        })
                    ]
                },
                nuxt
            );
        }

        const styleContent = () => {
            const uniqueRegisteredStyles = Array.from(new Map(registeredStyles?.map((m: MetaType) => [m.name, m])).values());

            return `
import { useRuntimeConfig } from '#imports';
${uniqueRegisteredStyles?.map((style: MetaType) => `import ${style.as} from '${style.from}';`).join('\n')}
${
    hasTheme
        ? `import { Theme } from '@primeuix/styled';
${importTheme ? `import ${importTheme.as} from '${normalize(importTheme.from)}';\n` : ''}`
        : ''
}

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.wangsvue ?? {};
const { options = {} } = config;

const stylesToTop = [${registered.injectStylesAsStringToTop.join('')}].join('');
const styleProps = {
  ${options?.csp?.nonce ? `nonce: ${options?.csp?.nonce}` : ''}
}
const styles = [
  ${registered.injectStylesAsString.join('')},
  ${uniqueRegisteredStyles?.map((item: MetaType) => `${item.as} && ${item.as}.getStyleSheet ? ${item.as}.getStyleSheet(undefined, styleProps) : ''`).join(',')}
].join('');

${hasTheme ? `Theme.setTheme(${importTheme?.as} || options?.theme)` : ''}

const themes = [
    ${`${uniqueRegisteredStyles?.[0].as} && ${uniqueRegisteredStyles?.[0].as}.getCommonThemeStyleSheet ? ${uniqueRegisteredStyles?.[0].as}.getCommonThemeStyleSheet(undefined, styleProps) : ''`},
    ${uniqueRegisteredStyles?.map((item: MetaType) => `${item.as} && ${item.as}.getThemeStyleSheet ? ${item.as}.getThemeStyleSheet(undefined, styleProps) : ''`).join(',')}
].join('');

export { styles, stylesToTop, themes };
`;
        };

        nuxt.options.alias['#wangsvue-style'] = addTemplate({
            filename: 'wangsvue-style.mjs',
            getContents: styleContent
        }).dst;

        addPlugin(resolver.resolve('./runtime/plugin.client'));

        addPluginTemplate({
            filename: 'wangsvue-plugin.mjs',
            getContents() {
                return `
import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
${registered.config.map((config: MetaType) => `import ${config.as} from '${config.from}';`).join('\n')}
${registered.services.map((service: MetaType) => `import ${service.as} from '${service.from}';`).join('\n')}
${!autoImport && registered.directives.map((directive: MetaType) => `import ${directive.as} from '${directive.from}';`).join('\n')}
${importPT ? `import ${importPT.as} from '${normalize(importPT.from)}';\n` : ''}
${hasTheme && importTheme ? `import ${importTheme.as} from '${normalize(importTheme.from)}';\n` : ''}

export default defineNuxtPlugin(({ vueApp }) => {
  const runtimeConfig = useRuntimeConfig();
  const config = runtimeConfig?.public?.wangsvue ?? {};
  const { usewangsVue = true, options = {} } = config;
  const pt = ${importPT ? `{ pt: ${importPT.as} }` : `{}`};
  const theme = ${hasTheme ? `{ theme: ${importTheme?.as} || options?.theme }` : `{}`};

  usewangsVue && vueApp.use(wangsVue, { ...options, ...pt, ...theme });
  ${registered.services.map((service: MetaType) => `vueApp.use(${service.as});`).join('\n')}
  ${!autoImport && registered.directives.map((directive: MetaType) => `vueApp.directive('${directive.name}', ${directive.as});`).join('\n')}
});
        `;
            }
        });

        nuxt.hook('nitro:config', async (config) => {
            config.externals = config.externals || {};
            config.externals.inline = config.externals.inline || [];
            config.externals.inline.push(resolver.resolve('./runtime/plugin.server'));
            config.virtual = config.virtual || {};
            config.virtual['#wangsvue-style'] = styleContent;
            config.plugins = config.plugins || [];
            config.plugins.push(resolver.resolve('./runtime/plugin.server'));
        });
    }
});
