<template>
    <TemplateContainer :templateData="veronaData">
        <template #separator>
            <VeronaSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import VeronaLogo from '@/components/template/logo/VeronaLogo.vue';

export default {
    data() {
        return {
            veronaData: {
                components: [
                    {
                        name: TemplateHero,
                        props: {
                            templateHeroData: {
                                logo: VeronaLogo,
                                pattern: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-hero-pattern.png',
                                description: 'Prepare to be amazed by the remastered Verona for wangsVue featuring a new gorgeous dark mode for the entire layout, 2 menu modes, reusable css widgets, utilities, modern icons and many more.',
                                dashboard1: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-hero-dashboard1.png',
                                dashboard2: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-hero-dashboard2.png',
                                liveHref: 'https://verona.wangsvue.org/',
                                docHref: 'https://verona.wangsvue.org/documentation',
                                pattern: {
                                    className: 'select-none absolute z-[6] opacity-90 w-[110rem] h-auto bottom-80 left-0 md:-bottom-8 md:-left-4',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: TemplateLicense,
                        props: {
                            license: {
                                documentLink: 'https://verona.wangsvue.org/documentation',
                                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                                showDiscount: false,
                                licenseDetails: [
                                    {
                                        title: 'Basic License',
                                        price: '$49',
                                        discount: '',
                                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', '1 Year Free Updates']
                                    },
                                    {
                                        title: 'Extended License',
                                        price: '$490',
                                        discount: '',
                                        included: ['Commercial Usage', 'Multiple End Products', '1 Year Free Updates']
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            title: 'Features',
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Light and Dark Modes',
                                    description: 'The stunning dark and light modes will impress your users.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: 'Verona offers 10 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/features-animation-component-themes.png'
                                },
                                {
                                    id: 3,
                                    title: '4 Menu Orientations',
                                    description: 'Choose from Static, Overlay, Slim and Slim+ menu orientations.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/Static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Slim',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/Slim.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Slim+',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/Slim+.png'
                                        },
                                        {
                                            id: 4,
                                            title: 'Overlay',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/Overlay.png'
                                        }
                                    ]
                                },
                                {
                                    id: 4,
                                    title: 'Menu Themes',
                                    description: 'Verona offers 10 special layout themes featuring gorgeous gradients.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/features-animation-orientations.png'
                                }
                            ]
                        }
                    },
                    {
                        name: TemplateConfiguration,
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite',
                                description: 'Verona is powered by Vite to get started in no time following the best practices.'
                            }
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'wangsFlex CSS Utilities',
                                    description: 'wangsFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-utilities.png'
                                },
                                {
                                    id: 2,
                                    title: 'wangsBlocks',
                                    slotType: 'description2',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-blocks.png'
                                },
                                {
                                    id: 3,
                                    title: 'wangsIcons',
                                    description: 'Verona ships with wangsIcons, wangsTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/features-animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://blocks.wangsvue.org/">wangsBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.wangsvue.org/">wangsBlocks</a> is not included in the
                template and requires a separate purchase.`,
                            description4: `Verona uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/PgQXX4HXMPeCkT74tGajod/Preview-%7C-Verona-2022?node-id=1303%3A750">preview the Figma file</a> before the purchase. Note that wangsVue UI components are excluded from the Verona Figma file as they
                are available in <WangsVueNuxtLink to="/uikit">wangsOne for Figma</WangsVueNuxtLink> only.`
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Verona is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-features2-responsive.png'
                                },
                                {
                                    title: 'Cross Browser Compatible',
                                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-compatible.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-compatible-dark.png'
                                },
                                {
                                    title: 'Support',
                                    description: `wangsTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                                        can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY">Discord</a> and
                                        <a href="https://github.com/orgs/wangsfaces/discussions/categories/wangsvue-templates" class="doc-link">Forum</a>.`,
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-lifetime.png'
                                },
                                {
                                    title: 'Customizable Design',
                                    description: 'Fully customizable with a mixture of Sass and CSS variables.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-customizable.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-features2-ready.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/verona/verona-features2-mobile.png'
                                }
                            ],
                            displayType: 'vertical'
                        }
                    }
                ]
            }
        };
    }
};
</script>
